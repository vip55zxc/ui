/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import Native from './native';
// @ts-ignore
import FlexNative from './flex-native';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { NativeInstance, Props, Data } from './index';

export default forwardRef<NativeInstance, Props>(
  (
    {
      children,
      flex,
      initData: { visible = true, className, style, content } = {},
      onTap,
    },
    ref,
  ) => {
    const dataRef = useRef<Data>({ visible, className, style, content });
    const [thisRef, setRef] = useState<NativeInstance>({
      data: {},
      setData: data => (dataRef.current = data),
    });
    useImperativeHandle(ref, () => thisRef, [thisRef]);
    return flex ? (
      <FlexNative
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindthis={({ detail }: any) => {
          detail.setData(dataRef.current);
          setRef(detail);
        }}
        bindtap={(e: any) => onTap?.(e.detail)}
      >
        {children}
      </FlexNative>
    ) : (
      <Native
        content={content}
        class-name={className}
        style={style}
        visible={visible}
        bindtap={(e: any) => onTap?.(e.detail)}
        bindthis={({ detail }: any) => {
          detail.setData(dataRef.current);
          setRef(detail);
        }}
      >
        {children}
      </Native>
    );
  },
);

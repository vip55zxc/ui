import React, { useMemo, ReactElement, cloneElement } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';
import { useEffectState } from 'parsec-hooks';

export interface DropDownMenuProps {
  /**
   * 外层样式
   */
  className?: string;
  /**
   * 是否显示modal框
   * @default true
   */
  showModal?: boolean;
  children?: React.ReactNode;
  /**
   * 当弹出层隐藏显示的回调
   */
  onOpsVisible?: (visible: boolean, index: number) => void;
  /**
   * 手动控制所有的弹出层显示的索引
   */
  opsVisibleIndex?: number;
}

export default (props: DropDownMenuProps) => {
  const {
    children,
    className,
    showModal = true,
    onOpsVisible,
    opsVisibleIndex = -1,
  } = props;
  const [showOptions, setShowOptions] = useEffectState<number>(opsVisibleIndex);
  const handledChildren = useMemo(
    () =>
      React.Children.map(children, (item, index) => {
        if (React.isValidElement(item)) {
          const childProps = {
            ...item.props,
            onToggle: () => {
              const visible = showOptions === index;
              setShowOptions(visible ? -1 : index);
              onOpsVisible?.(visible, index);
            },
            showOptions: showOptions === index,
          };
          return cloneElement(item, childProps);
        }
        return item;
      }),
    [children, onOpsVisible, setShowOptions, showOptions],
  );
  return (
    <View className={classNames(styles.wrap, className)}>
      {handledChildren}
      {showOptions !== -1 && showModal && <View className={styles.modal} />}
    </View>
  );
};

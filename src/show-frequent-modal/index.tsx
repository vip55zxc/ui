import Space from '../space';
import React from 'react';
import { Modal } from 'antd-mobile';
import { Image } from 'remax/one';
import Input from '../re-input';
import ColorText from '../color-text';
import showLoading from '../show-loading';
import hideLoading from '../hide-loading';
import showToast from '../show-toast';
import styles from './index.module.less';
import { usePromise } from 'parsec-hooks';
import classNames from 'classnames';

const Inner = ({
  getImg,
  onChange,
  setReset,
  titleCls,
}: {
  getImg: () => Promise<string>;
  onChange: (v: string) => void;
  setReset: (getImg: () => Promise<string>) => void;
  titleCls?: string;
}) => {
  const { data: src, handle } = usePromise(getImg);
  setReset(handle);
  return (
    <Space vertical className={styles.wrap}>
      <Space className={classNames(styles.title, titleCls)}>
        您的访问过于频繁，为了保护您的网络安全，请输入下方验证码：
      </Space>
      <Space size={10} alignItems={'center'}>
        <Input
          className={styles.input}
          placeholder={'请输入验证码'}
          onChange={(v = '') => onChange(v)}
        />
        <Image src={src} className={styles.img} />
        <ColorText
          className={styles.text}
          onTap={() => {
            handle();
          }}
        >
          换一张
        </ColorText>
      </Space>
    </Space>
  );
};

export default ({
  getImg,
  validator,
  titleCls,
}: {
  /**
   * 获取图形验证码
   */
  getImg: () => Promise<string>;
  /**
   * 校验图形验证码
   */
  validator: (code: string) => Promise<any>;
  /**
   * 弹窗title类名
   */
  titleCls?: string;
}) =>
  new Promise((resolve, reject) => {
    let value = '';
    let reset = () => {};
    const mode = Modal.alert(
      null,
      <Inner
        onChange={v => (value = v)}
        setReset={fn => (reset = fn)}
        getImg={getImg}
        titleCls={titleCls}
      />,
      [
        {
          text: '确定',
          onPress: async () => {
            showLoading({ title: '校验中' });
            return validator(value)
              .then(() => {
                hideLoading();
                reset();
                showToast({ title: '校验成功' });
                resolve(undefined);
                mode.close();
              })
              .catch(() => {
                hideLoading();
                showToast({ title: '校验失败请重试', icon: 'none' });
                reset();
                return Promise.reject();
              });
          },
        },
      ],
    );
  });

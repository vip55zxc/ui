import React from 'react';
import styles from './index.module.less';
import classNames from 'classnames';
import { View } from 'remax/one';
import { useEffectState } from 'parsec-hooks';
import provider from '../config-provider';
import { Props } from './types';
import CardTab from '../card-tab';

export default (props: Props) => {
  const {
    tabs,
    className,
    itemCls,
    current,
    onChange,
    control,
    type,
    style,
  } = props;
  const { brandPrimary } = provider.useContainer();
  const firstTabIndex = tabs?.[0].index;
  let [active, setActive] = useEffectState(
    current || firstTabIndex || undefined,
  );
  if (control) {
    active = current;
    setActive = onChange as any;
  }
  const handleChange = (index: number | string) => {
    setActive?.(index);
    onChange?.(index);
  };
  if (type === 'card')
    return <CardTab {...props} current={active} onChange={handleChange} />;
  return (
    <View className={classNames(styles.tab, className)} style={style}>
      {tabs.map(({ content, index }, i) => (
        <React.Fragment key={index}>
          <View
            className={classNames(styles.item, itemCls, {
              [styles.active]: active === index,
            })}
            onTap={() => handleChange(index)}
          >
            {content}
          </View>
          {i !== tabs.length - 1 && tabs.length === 2 && (
            <View
              className={styles.slice}
              style={{
                background: active
                  ? `linear-gradient(${
                      active === firstTabIndex ? 248 : -248
                    }deg, transparent 50%, ${brandPrimary} 50%)`
                  : 'transparent',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

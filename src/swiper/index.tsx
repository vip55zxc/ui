import React from 'react';
import { SwiperProps, SwiperItemProps } from 'remax/wechat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';

export interface Props extends SwiperProps {
  items: (SwiperItemProps & { node: React.ReactNode })[];
}

export default ({ items, className, style }: Props) => {
  return (
    <Swiper className={className} style={style}>
      {items.map(({ node, className, style }, index) => (
        <SwiperSlide key={index} className={className} style={style}>
          {node}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const KqKeshi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1138 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M986.204814 227.525801h-75.820125V151.728499c0-83.745854-67.867007-151.728499-151.775667-151.728499H379.372981c-83.90866 0-151.775667 67.845706-151.775667 151.728499v75.797302h-75.818604C67.867007 227.525801 0.001522 295.371507 0.001522 379.2543V872.271501C0.001522 956.017355 67.868529 1024 151.777189 1024H986.343275C1070.113474 1024 1138.117421 956.154294 1138.117421 872.271501V379.2543c-0.136939-83.882793-68.003947-151.728499-151.912607-151.728499zM304.310585 151.393759c0-41.539709 34.003495-75.316493 75.820125-75.316493H759.511299C801.326407 76.077266 835.329902 109.854051 835.329902 151.393759V226.710253H304.310585V151.393759z m757.72957 720.833617C1062.040155 913.977058 1028.045789 947.922734 986.23981 947.922734H151.879132C110.073153 947.922734 76.078788 913.977058 76.078788 872.227376V380.005944C76.078788 338.25474 110.073153 304.309064 151.879132 304.309064h834.222217c41.807501 0 75.801866 33.945676 75.801866 75.695358V872.225854h0.13694zM569.820244 453.420505c-20.954722 0-37.941254 16.986532-37.941254 37.941254v114.240666h-113.479893C397.406336 605.602425 380.387851 622.620909 380.387851 643.61367c0 20.992761 17.018484 38.011245 38.011246 38.011245h113.479893v114.240666c0 20.954722 16.986532 37.941254 37.941254 37.941254s37.941254-16.986532 37.941254-37.941254v-114.240666h113.479893C742.234152 681.624915 759.252636 664.606431 759.252636 643.61367c0-20.992761-17.018484-38.011245-38.011245-38.011245h-113.479893v-114.240666c0-20.954722-16.986532-37.941254-37.941254-37.941254z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

KqKeshi.defaultProps = {
  size: 18,
};

export default KqKeshi;

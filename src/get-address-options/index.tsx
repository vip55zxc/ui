import _provinces from './provinces.json';
import _cities from './cities.json';
import { CascadePickerOption } from 'antd-mobile/es/components/cascade-picker/cascade-picker';
import axios from '../axios';
import { List } from 'immutable';

const provinces = List(_provinces);
const cities = List(_cities);

export interface CascaderOptionType {
  value?: string;
  label?: React.ReactNode;
  children?: Array<CascaderOptionType>;
  [key: string]: any;
}

let areas: any;
let transform = false;
let pending: any = Promise.resolve();
let options: any = [];

export default async () => {
  if (!areas) {
    areas = [];
    pending = axios.get(
      'https://kq-static.oss-cn-beijing.aliyuncs.com/ui/areas.json',
    );
    ({ data: areas } = await pending);
  } else {
    await pending;
  }
  if (!transform) {
    transform = true;
    areas.forEach((area: any) => {
      const matchCity = cities
        .filter(city => city.code === area.cityCode)
        .get(0) as CascaderOptionType;
      if (matchCity) {
        matchCity.children = matchCity.children || [];
        matchCity.children.push({
          label: area.name,
          value: area.code,
        });
      }
    });
    cities.forEach((city: CascaderOptionType) => {
      const matchProvince = provinces
        .filter(province => province.code === city.provinceCode)
        .get(0) as CascaderOptionType;
      if (matchProvince) {
        matchProvince.children = matchProvince.children || [];
        matchProvince.children.push({
          label: city.name,
          value: city.code,
          children: city.children,
        });
      }
    });
  }
  if (!options.length) {
    options = provinces.map((province: CascaderOptionType) => ({
      label: province.name,
      value: province.code,
      children: province.children,
    }));
  }
  return JSON.parse(JSON.stringify(options)) as CascadePickerOption[];
};

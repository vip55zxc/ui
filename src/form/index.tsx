import React from 'react';
import RcForm, {
  FormProps,
  useForm,
  FormProvider,
  Field,
  List,
} from 'rc-field-form';
import ContainerUseWrap from 'parsec-hooks/lib/ContainerUseWrap';
import createContainer from 'parsec-hooks/lib/createContainer';
import showToast from '../show-toast';
import { FieldProps } from 'rc-field-form/es/Field';
import { Property } from 'csstype';

export const FormStore = createContainer(
  initialState => ((initialState || {}) as any) as Props<any>,
);

interface BaseItemProps {
  style?: React.CSSProperties;
  label?: React.ReactNode;
  /**
   * 后面的节点
   */
  after?: React.ReactNode;
  className?: string;
  /**
   * 是否垂直
   */
  vertical?: boolean;
  /**
   * 显示必填*号
   * @default false
   */
  requiredMark?: boolean;
  /**
   * 只读模式
   */
  readOnly?: boolean;
  /**
   * 不需要样式
   */
  noStyle?: boolean;
  /**
   * label类名
   */
  labelCls?: string;
  /**
   * label样式
   */
  labelStyle?: React.CSSProperties;
  /**
   * 子元素类别
   */
  childrenCls?: string;
  /**
   * 必填标记类名
   */
  requiredMarkCls?: string;
  afterCls?: string;
  /**
   * 字符串的label，用于提示
   * @default label
   */
  strLabel?: string;
  /**
   * label的对齐
   * @default right
   */
  labelJustify?: Property.TextAlign;
}

export interface ItemProps extends FieldProps, BaseItemProps {}

export interface Props<Values = {}>
  extends Omit<FormProps<Values>, 'className'>,
    Pick<ItemProps, keyof BaseItemProps> {
  /**
   * label的宽度，建议使用em单位
   */
  labelWidth?: number | string;
  /**
   * 子项的类名
   */
  itemCls?: string;
  /**
   * 显示冒号
   */
  colon?: React.ReactNode;
  cell?: boolean;
  /**
   * label是否靠左
   */
  leftLabel?: boolean;
}

const ReForm = ContainerUseWrap(
  FormStore,
  <Values extends unknown>({ labelWidth, ...props }: Props<Values>) => (
    <RcForm<Values>
      component={false}
      onFinishFailed={(e: any) => {
        showToast({ title: e.errorFields?.[0].errors?.[0], icon: 'none' });
      }}
      {...props}
    />
  ),
);

const Form: typeof ReForm & {
  useForm: typeof useForm;
  FormProvider: typeof FormProvider;
  Field: typeof Field;
  List: typeof List;
} = ReForm as any;

export default Form;

Form.useForm = RcForm.useForm;
Form.FormProvider = FormProvider;
Form.List = List;
Form.Field = Field;

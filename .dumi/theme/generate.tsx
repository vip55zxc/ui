import React, { forwardRef, useMemo, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import {
  Space,
  Button,
  NoData,
  Form,
  FormItem,
  BarCode,
  PartTitle,
  Icon,
  Image,
  TransferChange,
  CommonImg,
} from '@kqinfo/ui';
import {
  Card,
  Form as AntForm,
  Input,
  Button as AntButton,
  Select,
  Radio,
  Tabs as AntTabs,
  Tooltip,
} from 'antd';
import types from './types.json';
import { DeleteOutlined } from '@ant-design/icons';

type TypeKeys = keyof typeof types;

interface ItemType {
  id: number;
  type: TypeKeys;
  props: any;
}

const test = forwardRef<HTMLDivElement, any>((props, ref) => {
  const haveChildren = !!props.children.length;
  return (
    <Space
      ref={ref}
      vertical
      justify={'center'}
      padding={haveChildren ? undefined : '10px'}
      size={'10px'}
      {...props}
      style={{
        alignSelf: 'stretch',
        border: '1px solid #eee',
        width: 375,
        ...props.style,
      }}
    >
      {haveChildren ? (
        props.children
      ) : (
        <Space justify={'center'}>拖拽到此处</Space>
      )}
    </Space>
  );
});

const SortableItem = ({
  initList = [],
  onSetType,
  props: outProps = {},
  onSetId,
  clone = false,
  currentId,
  ...props
}: {
  initList?: ItemType[];
  onSetType?: (type: TypeKeys) => void;
  onSetId?: (id: number) => void;
  currentId?: number;
  props?: { [id: number]: any };
  clone?: boolean;
}) => {
  const [list, setList] = useState<ItemType[]>(initList);
  return (
    <ReactSortable
      list={list}
      animation={150}
      group={{ name: 'cloning-group-name', pull: clone ? 'clone' : undefined }}
      setList={setList}
      tag={test}
      style={{ height: 50, border: '1px solid #eee', flex: 1 }}
      clone={item => {
        const id = Math.random();
        onSetId?.(id);
        onSetType?.(item.type);
        return { ...item, id };
      }}
      {...props}
    >
      {list.map(({ id, type, props }, index) => {
        const { component: Com, initProps } = TypeObj[type];
        return (
          <Tooltip
            key={id}
            title={
              <DeleteOutlined
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  list.splice(index, 1);
                  setList([...list]);
                }}
              />
            }
          >
            <div
              onClick={e => {
                e.stopPropagation();
                onSetId?.(id);
                onSetType?.(type);
              }}
              style={
                currentId === id ? { border: '1px solid #2780d9' } : undefined
              }
            >
              <div
                style={{ pointerEvents: type !== 'Space' ? 'none' : undefined }}
              >
                <Com {...initProps} {...props} {...outProps[id]} />
              </div>
            </div>
          </Tooltip>
        );
      })}
    </ReactSortable>
  );
};

const TypeObj: any = {
  Button: { component: Button, initProps: { children: '按钮' } },
  Space: {
    component: SortableItem,
  },
  Form: {
    component: Form,
    initProps: {
      cell: true,
      labelWidth: '4em',
      children: (
        <>
          <FormItem label={'姓名'} name={'name'} />
          <FormItem
            label={'手机号'}
            name={'phone'}
            rules={[{ type: 'phone' }]}
          />
        </>
      ),
    },
  },
  BarCode: { component: BarCode, initProps: { content: '233' } },
  Image: {
    component: BarCode,
    initProps: { src: CommonImg.doctor, style: { width: 100, height: 100 } },
  },
  Icon: { component: Icon, initProps: { name: 'kq-search' } },
  PartTitle: { component: PartTitle, initProps: { children: '标题' } },
};

export default () => {
  const [type, setType] = useState<TypeKeys>();
  const [id, setId] = useState<number>();
  const [props, setProps] = useState<any>({});
  const [list, setList] = useState([
    { id: 1, type: 'Button', text: '按钮' },
    { id: 2, type: 'Space', text: '布局' },
    { id: 3, type: 'Form', text: '表单' },
    { id: 4, type: 'BarCode', text: '条形码' },
    // { id: 5, type: 'Image', text: '图片' },
    { id: 6, type: 'Icon', text: '图标' },
    { id: 7, type: 'PartTitle', text: '块标题' },
  ]);
  return (
    <Space size={'20px'}>
      <Space style={{ position: 'sticky', top: 70, alignSelf: 'flex-start' }}>
        <Card title={'组件'}>
          <ReactSortable
            list={list}
            setList={setList}
            tag={useMemo(
              () =>
                forwardRef((props, ref) => (
                  <Space
                    flexWrap={'wrap'}
                    style={{ width: 150 }}
                    size={'10px'}
                    ref={ref}
                    ignoreNum={2}
                    {...props}
                  />
                )),
              [],
            )}
            group={{ name: 'cloning-group-name', pull: 'clone' }}
            clone={item => ({ ...item, id: Math.random() })}
          >
            {list.map(({ id, type, text }) => (
              <AntButton style={{ width: 70, marginBottom: 10 }} key={id}>
                {text}
              </AntButton>
            ))}
          </ReactSortable>
        </Card>
      </Space>
      <Space
        flex={1}
        style={{ position: 'sticky', top: 70, alignSelf: 'flex-start' }}
      >
        <Card style={{ flex: 1 }}>
          <Space justify={'center'}>
            <Space style={{ width: 375 }}>
              <SortableItem
                onSetType={setType}
                onSetId={setId}
                currentId={id}
                props={props}
              />
            </Space>
          </Space>
        </Card>
      </Space>
      <Space>
        <Card bodyStyle={{ paddingTop: 10 }}>
          <AntForm
            layout="vertical"
            onValuesChange={values =>
              setProps({
                ...props,
                [id + '']: { ...props[id + ''], ...values },
              })
            }
          >
            <AntTabs>
              <AntTabs.TabPane key={1} tab={'属性设置'}>
                {type &&
                  types[type].map(
                    ({ identifier, description, type, required }) => (
                      <AntForm.Item
                        name={identifier}
                        key={identifier}
                        label={identifier}
                        tooltip={description}
                        required={required}
                        initialValue={id && props[id]?.[identifier]}
                      >
                        {type.includes('|') && !/string|number/.test(type) ? (
                          <Select>
                            {type.split('|').map(i => {
                              const v = i.match(/\w+/)?.[0];
                              return (
                                <Select.Option value={v + ''}>
                                  {v}
                                </Select.Option>
                              );
                            })}
                          </Select>
                        ) : type === 'boolean' ? (
                          <Radio.Group>
                            <Radio value={true}>是</Radio>
                            <Radio value={false}>否</Radio>
                          </Radio.Group>
                        ) : (
                          <Input />
                        )}
                      </AntForm.Item>
                    ),
                  )}
              </AntTabs.TabPane>
              <AntTabs.TabPane key={2} tab={'样式设置'}>
                <AntForm.Item noStyle name={'style'}>
                  <TransferChange>
                    {(onChange, value) => (
                      <AntForm onValuesChange={onChange} initialValues={value}>
                        <AntForm.Item label={'宽度'} name={'width'}>
                          <Input />
                        </AntForm.Item>
                        <AntForm.Item label={'高度'} name={'height'}>
                          <Input />
                        </AntForm.Item>
                      </AntForm>
                    )}
                  </TransferChange>
                </AntForm.Item>
              </AntTabs.TabPane>
            </AntTabs>
          </AntForm>
        </Card>
      </Space>
    </Space>
  );
};

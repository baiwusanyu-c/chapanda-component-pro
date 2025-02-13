import { ChaPandaTablePro as ProTable } from '@chapanda/component-pro'
import type { ProColumns } from '@chapanda/component-pro'
import { ConfigProvider } from "antd";
import { genChaPandaAntdTheme } from "@chapanda/style-preset/antd";
import {useState} from "react";
import dayjs, {Dayjs} from 'dayjs'
const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
  date: string,
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[((Math.floor(Math.random() * 10) % 4) + '') as '0'],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    date: '2018-05-05',
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    dataIndex: 'name',
    searchType: 'input',
    defaultSearchValue: 'all',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    render: (_) => <a>{_}</a>,
  },

  {
    title: '创建者',
    dataIndex: 'creator',
    searchIndex: 'creatorCustom',
    searchType: 'radio',
    defaultSearchValue: 'all',
    searchLabelKey: 'text',
    searchValueKey: 'val',
    searchEnum: {
      all: { text: '全部', val: 'all' },
      付小小: { text: '付小小', val: 'fxx'},
    },
  },
  {
    title: '时间',
    dataIndex: 'date',
    searchIndex: 'date',
    searchType: 'date-picker',
    defaultSearchValue: dayjs('2018-05-05'),
    formComponentProps: {
      picker: "week"
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    searchType: 'select',
    defaultSearchValue: 'Default',
    searchEnum: {
      all: { label: '全部', value: 'all' },
      close: { label: '关闭', value: 'Default' },
      running: { label: '运行中', value: 'Processing' },
      online: { label: '已上线', value: 'Success' },
      error: { label: '异常', value: 'Error' },
    },
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    searchType: 'select',
    defaultSearchValue: ['Default'],
    formComponentProps: {
      allowClear: true,
      maxTagCount: 1,
      placeholder: '全部',
      mode: "multiple"
    },
    searchEnum: {
      all: { label: '全部', value: 'all' },
      close: { label: '关闭', value: 'Default' },
      running: { label: '运行中', value: 'Processing' },
      online: { label: '已上线', value: 'Success' },
      error: { label: '异常', value: 'Error' },
    },
  },
  {
    title: '操作',
    width: 180,
    key: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="link2">报警</a>,
      <a key="link3">监控</a>,
    ],
  },
];

export default () => {
  const [params, setParams] = useState({
    ba: 'sxzz'
  });
  return (
    <ConfigProvider theme={genChaPandaAntdTheme()} componentSize="middle">
      <ProTable<TableListItem>
        params={params}
        columns={columns}
        rowKey="key"
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
            total: 100
          });
        }}
        searchTitle={{
          title: '高级表格搜索',
          tooltip: '这是一个标题提示',
        }}
        tableTitle={{
          title: '高级表格',
          tooltip: '这是一个标题提示',
        }}
        toolBarRender={() => [
          <div key='haha'>
            危险按钮
          </div>,
          <div key='hahas' onClick={() => {
            setParams({
              ba: 'yyx'
            })
          }}>
            危险按钮
          </div>,
        ]}
      />
    </ConfigProvider>

  );
};

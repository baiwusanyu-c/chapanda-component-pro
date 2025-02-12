import { ChaPandaTablePro as ProTable } from '@chapanda/component-pro'
import type { ProColumns } from '@chapanda/component-pro'
import { ConfigProvider } from "antd";
import { genChaPandaAntdTheme } from "@chapanda/style-preset/antd";
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
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '排序',
    dataIndex: 'index',
    width: 48,
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    searchType: 'input',
    defaultSearchValue: 'all',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '应用名称2',
    dataIndex: 'name2',
    searchType: 'input',
    defaultSearchValue: 'all',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '应用名称3',
    dataIndex: 'name3',
    searchType: 'input',
    defaultSearchValue: 'all',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '应用名称4',
    dataIndex: 'name4',
    searchType: 'input',
    defaultSearchValue: 'all',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '应用名称5',
    dataIndex: 'name5',
    searchType: 'input',
    defaultSearchValue: 'all',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '应用名称6',
    dataIndex: 'name6',
    searchType: 'input',
    defaultSearchValue: 'all',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    searchIndex: 'creatorCustom',
    searchType: 'select',
    defaultSearchValue: 'all',
    searchLabelKey: 'text',
    searchValueKey: 'val',
    searchEnum: {
      all: { text: '全部', val: 'all' },
      付小小: { text: '付小小', val: '付小小'},
      曲丽丽: { text: '曲丽丽', val: '曲丽丽'},
      林东东: { text: '林东东', val: '林东东'},
      陈帅帅: { text: '陈帅帅', val: '陈帅帅'},
      兼某某: { text: '兼某某', val: '兼某某'},
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    searchType: 'select',
    defaultSearchValue: 'Default',
    searchEnum: {
      all: { label: '全部', value: 'Default' },
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
  return (

    <ConfigProvider theme={genChaPandaAntdTheme()} componentSize="middle">
      <ProTable<TableListItem>
        columns={columns}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}

        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
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
          <div>
            危险按钮
          </div>,
        ]}
      />
    </ConfigProvider>


  );
};

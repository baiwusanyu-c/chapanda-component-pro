/*
import {
  ChapandaContext,
  ChaPandaTablePro as ProTable,
} from '@chapanda/component-pro'
import type { ProColumns } from '@chapanda/component-pro'
import {Button, ConfigProvider} from "antd";
import { genChaPandaAntdTheme } from "@chapanda/style-preset/antd";
import {useContext, useState} from "react";
import dayjs from 'dayjs'
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
    searchRenderIndex: 5,
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
    searchEnum: [
      { text: '全部', val: 'all' },
      { text: '付小小', val: 'fxx'},
    ]
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
    defaultSearchValue: '-1',
    searchEnum: [
       { value: "-1", key: "status-1", label: "全部" },
      { value: 1, key: "status-2", label: "正常" },
      { value: 0, key: "status-3", label: "冻结" },
      { value: 2, key: "status-4", label: "锁定" },
      { value: 3, key: "status-5", label: "限制登录" },
  ],
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    searchType: 'select',
    defaultSearchValue: ['all'],
    formComponentProps: {
      allowClear: true,
      maxTagCount: 1,
      placeholder: '全部',
      mode: "multiple"
    },
    searchEnum: [
      { label: '全部', value: 'all' },
      { label: '关闭', value: 'Default' },
      { label: '运行中', value: 'Processing' },
      { label: '已上线', value: 'Success' },
      { label: '异常', value: 'Error' },
    ]
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

  const { getFunc } = useContext(ChapandaContext);
  function testSearch(){
    if(getFunc){
      const searchFn = getFunc('tablePro')
      if(searchFn && searchFn.search){
        searchFn.search()
      }
    }
  }

  return (
    <ConfigProvider theme={genChaPandaAntdTheme()} componentSize="middle">
      <Button onClick={testSearch}> search </Button>
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
*/

/*import {
  NavCard,
} from '@chapanda/component-pro'
import { ConfigProvider, Col, Row} from "antd";
import { genChaPandaAntdTheme } from "@chapanda/style-preset/antd";
import React from 'react'

export default () => {

  const IconDataPlate = <svg
    style={{marginTop: '10px'}}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="36" height="36" rx="10" fill="#6ACC48" />
    <g clipPath="url(#clip0_2155_13761)">
      <path
        d="M27.6847 8.71393H8.32577C7.9742 8.71409 7.63707 8.85381 7.38848 9.10241C7.13988 9.35101 7.00015 9.68813 7 10.0397V17.4057H12.4994C12.6189 17.4059 12.7362 17.4379 12.8392 17.4985C12.9422 17.5591 13.0272 17.6461 13.0854 17.7505L14.0292 19.4659L17.3464 12.7601C17.6062 12.2326 18.3592 12.2298 18.6243 12.7549L21.0957 17.6842H29.0105V10.0397C29.0104 9.68812 28.8706 9.35097 28.622 9.10236C28.3734 8.85376 28.0363 8.71405 27.6847 8.71393Z"
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M20.0933 18.6441L17.988 14.4492L14.6948 21.1074C14.4403 21.6244 13.7058 21.6403 13.43 21.1338L12.1095 18.7314H7V23.8278C7.00015 24.1794 7.13987 24.5165 7.38847 24.7651C7.63707 25.0137 7.97419 25.1534 8.32577 25.1536H17.3385V25.9603H12.6817C12.4658 25.9603 12.2905 26.2573 12.2905 26.6232C12.2905 26.9891 12.4658 27.286 12.6817 27.286H23.321C23.5369 27.286 23.7122 26.9892 23.7122 26.6232C23.7122 26.2571 23.537 25.9603 23.321 25.9603H18.6642V25.1536H27.6847C28.0363 25.1535 28.3734 25.0138 28.622 24.7651C28.8706 24.5165 29.0104 24.1794 29.0105 23.8278V19.0099H20.6899C20.5664 19.0101 20.4452 18.976 20.3399 18.9114C20.2345 18.8468 20.1492 18.7543 20.0933 18.6441Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2155_13761">
        <rect
          width="22"
          height="22"
          fill="white"
          transform="translate(7 7)"
        />
      </clipPath>
    </defs>
  </svg>

  return (
    <ConfigProvider theme={genChaPandaAntdTheme()} componentSize="middle">
      <Row gutter={[20, 20]}>
        <Col span={6}>
          <NavCard
            title='白雾三语'
            extra='baiwusanyu-c'
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>
        <Col span={6}>
          <NavCard
            title='白雾三语'
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>

        <Col span={6}>
          <NavCard
            titleIcon={IconDataPlate}
            title='白雾三语'
            isATag={true}
            description='通过编写SQL语句，用户自助完成数据探索'/>
        </Col>
        <Col span={6}>
          <NavCard
            title='白雾三语'
            disabled={true}
            isATag={true}
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>
        <Col span={6}>
          <NavCard
            titleIcon={IconDataPlate}
            title='白雾三语'
            disabled={true}
            isATag={true}
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>

        <Col span={6}>
          <NavCard
            titleIcon={IconDataPlate}
            title='白雾三语'
            extra='baiwusanyu-c'
            disabled={true}
            isATag={true}
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>
        <Col span={6}>
          <NavCard
            titleIcon={IconDataPlate}
            showExtra={false}
            title='白雾三语'
            extra='baiwusanyu-c'
            disabled={true}
            isATag={true}
            description='通过编写SQL语句，用户自助完成数据探索'/>
        </Col>
        <Col span={6}>
          <NavCard
            titleIcon={IconDataPlate}
            title='白雾三语'
            extra={<div>baiwusanyu-c</div>}
            isATag={true}
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>
        <Col span={6}>
          <NavCard
            titleIcon={IconDataPlate}
            showExtra={false}
            title='白雾三语'
            extra='baiwusanyu-c'
            description='凭借丰富的数据可视化手段，精准呈现业务关键指标与实时运行状况，为管理者提供直观全面的决策支持，助力企业高效发展'/>
        </Col>
      </Row>

    </ConfigProvider>

  );
};*/

import {
  SkeletonPro,
} from '@chapanda/component-pro'
import { ConfigProvider } from "antd";
import { genChaPandaAntdTheme } from "@chapanda/style-preset/antd";
import React from 'react'

export default () => {
  return (
    <ConfigProvider theme={genChaPandaAntdTheme()} componentSize="middle">
      <SkeletonPro type='list' active={false} renderNum={4}/>
      <hr/>
      <SkeletonPro type='list'/>
      <hr/>
      <SkeletonPro type='description' active={false} renderNum={4}/>
      <hr/>
      <SkeletonPro type='description' />
      <hr/>
      <SkeletonPro type='matrix'
                   active={false}
                   renderNum={8}
                   rowProps={{ gutter: [20, 20]}}
                   colProps={{ span: 6 }}
      />
      <hr/>
      <SkeletonPro type='matrix' renderNum={8}
                   rowProps={{ gutter: [20, 20]}}
                   colProps={{ span: 6 }}/>
      <hr/>


      <SkeletonPro type='query' renderNum={6}/>
      <hr/>

      <SkeletonPro type='table' renderNum={6}/>
      <hr/>
    </ConfigProvider>

  );
};

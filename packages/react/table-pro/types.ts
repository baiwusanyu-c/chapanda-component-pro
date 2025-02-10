import { TableProps } from 'antd'
import React from "react";
import type {
  SortOrder,
  ColumnFilterItem,
  ColumnType,
} from 'antd/lib/table/interface';

declare type PropertyKey = string | number | symbol;
export type AnyObject = Record<PropertyKey, any>;

export type RequestData<T> = {
  data: T[] | undefined;
  success?: boolean;
  total?: number;
} & Record<string, any>;

export interface ProColumns<RecordType = AnyObject> extends ColumnType<RecordType>{
  // TODO: 列是否开启搜索表单，目前支持有限的表单
  searchType?: 'input' | 'select' | 'textarea' | false;
  // TODO: 列处于搜索表单时，其具体的字段参数，默认是 dataIndex
  searchIndex?: 'string';
  // TODO: 下拉枚举列表，当 searchType 为 select 时生效
  searchEnum?: Record<string, any>;
  // TODO: 下拉枚举列表 label key，当 searchType 为 select 时生效
  searchLabelKey?: Record<string, any>;
  // TODO: 下拉枚举列表 value key，当 searchType 为 select 时生效
  searchValueKey?: Record<string, any>;
  // TODO: 列处于搜索表单时，对应的默认值
  defaultSearchValue?: any;
}
export interface ChapandaTableProProps<DataSource, U> extends TableProps<DataSource> {
  // TODO: 标记搜索表单是独立的表单区，还是在表格头部
  formType?: 'form' | 'table-head';
  // TODO: 查询表单区的 title，仅 formType 为 form 时有效
  searchTitle?: {
    title?: string;
    tooltip?: string;
  }
  // TODO: 表格 title
  tableTitle?: {
    title?: string;
    tooltip?: string;
  }
  // TODO: 获取 dataSource 的方法
  request?: (
    params: U & {
      pageSize?: number;
      current?: number;
      keyword?: string;
    },
    sort: Record<string, SortOrder>,
    filter: Record<string, (string | number)[] | null>,
  ) => Promise<Partial<RequestData<DataSource>>>;
  // TODO: request 的参数，修改之后会触发更新
  params?: U;
  // TODO: 搜索操作按钮区
  toolBarRender?: () => React.ReactNode[];
  // TODO: 列配置项
  columns: ProColumns<DataSource>[]
}

// target: 封装分页、搜索查询逻辑、
// TODO: 搜索表单渲染
// TODO: 表格渲染


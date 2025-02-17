import type { TableProps } from "antd";
import React from "react";
import type { ColumnType } from "antd/lib/table/interface";
import type { FilterValue, SorterResult } from "antd/es/table/interface";

declare type PropertyKey = string | number | symbol;
export type AnyObject = Record<PropertyKey, any>;

export type RequestData<T> = {
	data: T[] | undefined;
	success?: boolean;
	total?: number;
} & Record<string, any>;

export interface ProColumns<RecordType = AnyObject>
	extends ColumnType<RecordType> {
	// 列是否开启搜索表单，目前支持有限的表单
	searchType?: "input" | "select" | "date-picker" | "radio";
	// 列处于搜索表单时，其具体的字段参数，默认是 dataIndex
	searchIndex?: string;
	// 列处于搜索表单时, 渲染的顺序
	searchRenderIndex?: number;
	// 列处于搜索表单时，其具体的字段参数，默认是 title
	searchLabel?: string;
	// 下拉枚举列表，当 searchType 为 select、radio 时生效
	searchEnum?: Array<Record<string, any>>;
	// 下拉枚举列表 label key，当 searchType 为 select、radio 时生效, 默认使用 label
	searchLabelKey?: string;
	// 下拉枚举列表 value key，当 searchType 为 select、radio 时生效, 默认使用 value
	searchValueKey?: string;
	// 列处于搜索表单时，对应的默认值
	defaultSearchValue?: any;
	// 表单组件的 props，将直接传递给组件
	formComponentProps?: Record<string, any>;
}
export interface ChapandaTableProProps<DataSource, U>
	extends TableProps<DataSource> {
	// TODO: 标记搜索表单是独立的表单区，还是在表格头部
	formType?: "form" | "table-head";
	// 查询表单区的 title，仅 formType 为 form 时有效
	searchTitle?: {
		title?: string;
		tooltip?: string;
	};
	// 表格 title
	tableTitle?: {
		title?: string;
		tooltip?: string;
	};
	// 获取 dataSource 的方法, sort 和 filter 来自
	//  antd table 的 change 事件，只有对应排序和搜索事件发生时才会传递
	request?: (
		params: U & {
			pageSize?: number;
			current?: number;
			[key: string]: any;
		},
		sort?: SorterResult<DataSource> | SorterResult<DataSource>[],
		filter?: Record<string, FilterValue | null>,
	) => Promise<Partial<RequestData<DataSource>>>;
	// request 的参数，修改之后会触发更新
	params?: U;
	// 搜索操作按钮区
	toolBarRender?: () => React.ReactNode[];
	// 列配置项
	columns: ProColumns<DataSource>[];
}

export interface ChapandaTableFns {
	search?: <dataSourceT extends Record<string, any>>(
		sParams?: Record<string, any>,
		filters?: Record<string, FilterValue | null>,
		sorter?: SorterResult<dataSourceT> | SorterResult<dataSourceT>[],
	) => void;
	getSearchParams?: <dataSourceT extends Record<string, any>>() => {
		params: Record<string, any>;
		filters: Record<string, FilterValue | null>;
		sorter: SorterResult<dataSourceT> | SorterResult<dataSourceT>[];
	};
	getFormFilterParams?: () => any;
	[key: string]: any;
}

export type IChapandaCompProCtxKeys = "tablePro";
export interface IChapandaCompProCtx {
	tablePro?: ChapandaTableFns;
}

export type UncertainFunction<T = any> = (...arg: any[]) => T | undefined;
export interface IChapandaContext {
	expose:
		| null
		| ((
				scope: IChapandaCompProCtxKeys,
				name: keyof ChapandaTableFns,
				fn: UncertainFunction | null,
		  ) => void);
	getFunc:
		| null
		| ((
				scope: IChapandaCompProCtxKeys,
		  ) => IChapandaCompProCtx[IChapandaCompProCtxKeys]);
}
// target: 封装分页、搜索查询逻辑、
// TODO: columns 搜索表单渲染 select 多选时，全选

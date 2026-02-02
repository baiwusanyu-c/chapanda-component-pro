import React, { useContext, useEffect, useRef, useState } from "react";
import "../../styles/table-pro/index.css";
import { LayoutTitle } from "../../layout-title";
import { FormFilter } from "./FormFilter.tsx";
import type { ChapandaTableProProps } from "../types.ts";
import { Divider, Table, type TableProps } from "antd";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { ChapandaContext } from "../../provider";

export function FormFilterTable<
	dataSourceT extends Record<string, any>,
	U = any,
>(props: ChapandaTableProProps<dataSourceT, U>) {
	const {
		searchTitle,
		tableTitle,
		columns,
		toolBarRender,
		request,
		params,
		dataSource,
		pagination = {
			pageSize: 10,
			current: 1,
			total: 0,
		},
	} = props;

	// 判断是否渲染 Divider
	const [hasFilter, setHasFilter] = useState(false);
	function handleFormFilterRender(isRender: boolean) {
		setHasFilter(isRender);
	}

	const [searchParams, setSearchParams] = useState<Record<string, any>>(
		pagination as Record<string, any>,
	);

	// 过滤器提交
	function onFilterFormSubmit(params: any) {
		const resolveParams = {
			...searchParams,
			...params,
			pageSize: searchParams.pageSize || 10,
			current: (pagination as Record<string, any>).current || 1,
		};
		setSearchParams(resolveParams);
		getDataSource(resolveParams);
	}

	// 过滤器重置
	function onFilterFormReset(params: any) {
		const resolveParams = {
			...searchParams,
			...params,
			pageSize: (pagination as Record<string, any>).pageSize || 10,
			current: (pagination as Record<string, any>).current || 1,
		};
		setSearchParams(resolveParams);
		getDataSource(resolveParams);
	}

	const [data, setData] = useState<dataSourceT[]>([]);
	useEffect(() => {
		if (dataSource && !request) {
			setData(dataSource as dataSourceT[]);
		}
	}, [dataSource, request]);

	async function getDataSource(
		sParams = searchParams,
		filters?: Record<string, FilterValue | null>,
		sorter?: SorterResult<dataSourceT> | SorterResult<dataSourceT>[],
	) {
		if (request) {
			const resolveParams = {
				...(params as U),
				...sParams,
			};
			const result = await request(resolveParams, sorter, filters);

			setData(result.data as dataSourceT[]);
			setSearchParams({
				...sParams,
				total: result.total || 0,
			});
			// 初始化时会搜索一遍，标记它
			isInit.current = true;
		}
	}

	const isInit = useRef(false);
	// biome-ignore lint/correctness/useExhaustiveDependencies(isInit): <是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(searchParams): <不是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(filtersParams): <不是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(sorterParams): <不是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(getDataSource): <不是依赖>
	useEffect(() => {
		if (isInit.current && params) {
			getDataSource(searchParams, filtersParams, sorterParams);
		}
	}, [isInit, params]);

	const [filtersParams, setFiltersParams] = useState<
		Record<string, FilterValue | null>
	>({});
	const [sorterParams, setSorterParams] = useState<
		SorterResult<dataSourceT> | SorterResult<dataSourceT>[]
	>([]);
	const onTableChange: TableProps<dataSourceT>["onChange"] = (
		pagination,
		filters,
		sorter,
	) => {
		const resolveSearchParams = {
			...searchParams,
			pageSize: pagination.pageSize,
			current: pagination.current,
		};
		setSearchParams(resolveSearchParams);
		getDataSource(resolveSearchParams, filters, sorter);
		setFiltersParams(filters);
		setSorterParams(sorter);
	};

	// 对上下文暴露公共方法
	const { expose, getFunc } = useContext(ChapandaContext);
	function getFromCurrentParams(sParams: Record<string, any>) {
		let resolveParams = {
			...sParams,
		};
		if (getFunc) {
			const formFn = getFunc("tablePro");
			if (formFn && formFn.getFormFilterParams) {
				resolveParams = {
					...resolveParams,
					...formFn.getFormFilterParams(),
				};
			}
		}
		return resolveParams;
	}
	const search = (
		sParams: Record<string, any> = searchParams,
		filters: Record<string, FilterValue | null> = filtersParams,
		sorter:
			| SorterResult<dataSourceT>
			| SorterResult<dataSourceT>[] = sorterParams,
	) => {
		const resolveParams = getFromCurrentParams(sParams);
		getDataSource(resolveParams, filters, sorter);
	};

	const getSearchParams = () => {
		const resolveParams = getFromCurrentParams(searchParams);
		return {
			params: resolveParams,
			filters: filtersParams,
			sorter: sorterParams,
		};
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies(search): <不是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(getSearchParams): <不是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(getFunc): <是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(searchParams): <是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(sorterParams): <是依赖>
	// biome-ignore lint/correctness/useExhaustiveDependencies(filtersParams): <是依赖>
	useEffect(() => {
		if (expose) {
			expose("tablePro", "search", search);
			expose("tablePro", "getSearchParams", getSearchParams);
			return () => {
				expose("tablePro", "search", null);
				expose("tablePro", "getSearchParams", null);
			};
		}
	}, [expose, getFunc, searchParams]);

	return (
		<>
			{searchTitle ? (
				<LayoutTitle
					key="title"
					title={searchTitle.title}
					tooltip={searchTitle.tooltip}
				/>
			) : (
				<></>
			)}

			<FormFilter<dataSourceT, U>
				onSubmit={onFilterFormSubmit}
				onReset={onFilterFormReset}
				canRender={handleFormFilterRender}
				columns={columns}
			/>
			{(searchTitle || hasFilter) && (toolBarRender || tableTitle) ? (
				<Divider />
			) : (
				<></>
			)}
			<LayoutTitle
				key="operation"
				title={(tableTitle || {}).title}
				tooltip={(tableTitle || {}).tooltip}
			>
				{toolBarRender && toolBarRender()}
			</LayoutTitle>
			<Table
				{...props}
				pagination={{
					...props.pagination,
					current: searchParams.current,
					total: searchParams.total,
					pageSize: searchParams.pageSize,
				}}
				onChange={onTableChange}
				columns={columns}
				dataSource={data}
			/>
		</>
	);
}

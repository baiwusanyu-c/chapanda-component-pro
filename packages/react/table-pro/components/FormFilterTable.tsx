import React, { useEffect, useRef, useState } from "react";
import "../../styles/table-pro/index.css";
import { TitleArea } from "./TitleArea.tsx";
import { FormFilter } from "./FormFilter.tsx";
import type { ChapandaTableProProps } from "../types.ts";
import { Divider, Table, type TableProps } from "antd";
import type { FilterValue, SorterResult } from "antd/es/table/interface";

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
	} = props;

	// 判断是否渲染 Divider
	const [hasFilter, setHasFilter] = useState(false);
	function handleFormFilterRender(isRender: boolean) {
		setHasFilter(isRender);
	}

	const [searchParams, setSearchParams] = useState<Record<string, any>>({
		pageSize: 10,
		current: 1,
		total: 0,
	});

	// 过滤器提交
	function onFilterFormSubmit(params: any) {
		const resolveParams = {
			...searchParams,
			...params,
			pageSize: 10,
			current: 1,
		};
		setSearchParams(resolveParams);
		getDataSource(resolveParams);
	}

	// 过滤器重置
	function onFilterFormReset(params: any) {
		const resolveParams = {
			...searchParams,
			...params,
			pageSize: 10,
			current: 1,
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

	return (
		<>
			{searchTitle ? (
				<TitleArea
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
			<TitleArea
				key="operation"
				title={(tableTitle || {}).title}
				tooltip={(tableTitle || {}).tooltip}
			>
				{toolBarRender && toolBarRender()}
			</TitleArea>
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

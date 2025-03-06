import type { SkeletonProps, RowProps, ColProps } from "antd";

export interface SkeletonProProps {
	type: "list" | "description" | "matrix" | "detail" | "table" | "query";
	// 是否显示动态
	active?: boolean;
	//  渲染数量，list、description、matrix 生效
	renderNum?: number;
	//  row 组件 props， 仅 matrix 生效
	rowProps?: RowProps;
	// col 组件 props， 仅 matrix 生效
	colProps?: ColProps;

	//  渲染 table 的行数、table、detail 生效
	renderTableRow?: number;
	//  渲染 table 的列数、table、detail 生效
	renderTableCol?: number;
	//  渲染 table 的 query区域、table、detail 生效、
	renderTableQuery?: boolean;

	//  渲染 detail 的 table 区域、detail 生效、
	renderDetailTable?: boolean;
	// 作用在每个原子Skeleton组件上的 props
	skeletonProps?: SkeletonProps;
}

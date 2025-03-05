import type { SkeletonProps, RowProps, ColProps } from "antd";

export interface SkeletonProProps {
	type: "list" | "description" | "matrix" | "detail" | "table";
	// TODO: 是否显示动态
	active?: boolean;
	// TODO: 渲染数量，list、description、matrix 生效
	renderNum?: number;
	// TODO: row 组件 props， 仅 matrix 生效
	rowProps?: RowProps;
	// TODO: col 组件 props， 仅 matrix 生效
	colProps?: ColProps;
	// TODO: 作用在每个原子Skeleton组件上的 props
	skeletonProps?: SkeletonProps;
}

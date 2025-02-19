import type { SkeletonProps } from "antd";
export interface SkeletonProProps {
	type: "list" | "description" | "matrix" | "detail" | "table" | "query";
	// TODO: 是否显示动态
	active?: boolean;
	// TODO: 渲染数量，list、description、matrix 生效
	renderNum?: number;
	// TODO: 作用在每个原子Skeleton组件上的 props
	skeletonProps?: SkeletonProps;
}

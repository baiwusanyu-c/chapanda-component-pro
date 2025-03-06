import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { useRenderList } from "@chapanda/component-pro-utils";
import { Skeleton, Space } from "antd";
import "../../styles/skeleton-pro/index.css";
export function SkeletonQuery(props: SkeletonProProps) {
	const { active = true, renderNum = 20, skeletonProps } = props;
	const { list } = useRenderList({ renderNum });
	return (
		<div className="cbd-skeleton-pro-query">
			<Skeleton.Button
				active={active}
				block={true}
				className="cbd-skeleton-pro-query-title"
				{...skeletonProps}
			/>
			<div className="cbd-skeleton-pro-query-form">
				<Space size={[10, 16]} wrap>
					{list.map((_, index: number) => {
						return (
							<Skeleton.Input
								active={active}
								block={true}
								key={`cbd-skeleton-pro-query${index}`}
								className="cbd-skeleton-pro-query-input"
								{...skeletonProps}
							/>
						);
					})}
				</Space>
			</div>
			<div className="cbd-skeleton-pro-query-operate">
				<Skeleton.Button
					active={active}
					block={true}
					className="cbd-skeleton-pro-query-item"
					{...skeletonProps}
				/>
				<Skeleton.Button
					active={active}
					block={true}
					className="cbd-skeleton-pro-query-item"
					{...skeletonProps}
				/>
			</div>
		</div>
	);
}

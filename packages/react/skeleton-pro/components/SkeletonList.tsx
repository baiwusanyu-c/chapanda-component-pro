import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { Skeleton } from "antd";
import { useRenderList } from "@chapanda/component-pro-utils";
import "../../styles/skeleton-pro/index.css";
export function SkeletonList(props: SkeletonProProps) {
	const { active = true, renderNum = 6, skeletonProps } = props;
	const { list } = useRenderList({active, renderNum})
	return (
		<>
			{list.map((_,index: number) => {
				return (
					<div
						className="cbd-skeleton-pro-list"
						key={`cbd-skeleton-pro-list${index}`}
					>
						<Skeleton.Button
							active={active}
							block={false}
							className="cbd-skeleton-pro-item"
							{...skeletonProps}
						/>
						<Skeleton.Input
							active={active}
							block={false}
							className="cbd-skeleton-pro-item"
							{...skeletonProps}
						/>
						<Skeleton.Button
							active={active}
							block={false}
							className="cbd-skeleton-pro-item"
							{...skeletonProps}
						/>
					</div>
				);
			})}
		</>
	);
}

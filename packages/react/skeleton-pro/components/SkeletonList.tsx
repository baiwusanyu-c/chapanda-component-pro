import type { SkeletonProProps } from "../types.ts";
import React, { useMemo } from "react";
import { Skeleton } from "antd";

export function SkeletonList(props: SkeletonProProps) {
	const { active = true, renderNum = 6, skeletonProps } = props;
	const list = useMemo(() => {
		return Array.from({ length: renderNum });
	}, [renderNum]);
	return (
		<>
			{list.map((index) => {
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

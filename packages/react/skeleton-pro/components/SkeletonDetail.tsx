import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { SkeletonTable } from "./SkeletonTable.tsx";
import "../../styles/skeleton-pro/index.css";
import { Divider, Skeleton } from "antd";
export function SkeletonDetail(props: SkeletonProProps) {
	const { active = true, skeletonProps } = props;

	return (
		<>
			<div className="cbd-skeleton-pro-detail">
				<div className="cbd-skeleton-pro-detail-item">
					<Skeleton.Button active={active} {...skeletonProps} />
					<Skeleton active={active} {...skeletonProps} />
				</div>
				<div className="cbd-skeleton-pro-detail-item">
					<Skeleton active={active} {...skeletonProps} />
				</div>
			</div>
			<div className="cbd-skeleton-pro-detail">
				<div className="cbd-skeleton-pro-detail-item">
					<Skeleton.Button active={active} {...skeletonProps} />
					<Skeleton active={active} {...skeletonProps} />
				</div>
				<div className="cbd-skeleton-pro-detail-item">
					<Skeleton
						active={active}
						paragraph={{ rows: 4 }}
						{...skeletonProps}
					/>
				</div>
			</div>
			<Divider />
			<SkeletonTable
				type="table"
				skeletonProps={skeletonProps}
				active={active}
			/>
		</>
	);
}

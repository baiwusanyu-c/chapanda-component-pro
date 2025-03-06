import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { SkeletonTable } from "./SkeletonTable.tsx";
import "../../styles/skeleton-pro/index.css";
import { Divider, Skeleton } from "antd";
export function SkeletonDetail(props: SkeletonProProps) {
	const {
		active = true,
		skeletonProps,
		renderTableQuery = true,
		renderTableRow = 10,
		renderTableCol = 4,
		renderDetailTable = true,
	} = props;

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
			{renderDetailTable ? (
				<>
					<Divider />
					<SkeletonTable
						type="table"
						renderTableQuery={renderTableQuery}
						renderTableRow={renderTableRow}
						renderTableCol={renderTableCol}
						skeletonProps={skeletonProps}
						active={active}
					/>
				</>
			) : (
				<></>
			)}
		</>
	);
}

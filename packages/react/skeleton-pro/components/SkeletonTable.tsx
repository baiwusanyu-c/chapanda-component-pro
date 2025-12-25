import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { SkeletonQuery } from "./SkeletonQuery.tsx";
import { Skeleton, Divider, Table } from "antd";
import { useRenderList } from "@chapanda/component-pro-utils";

export function SkeletonTable(props: SkeletonProProps) {
	const {
		active = true,
		renderNum = 10,
		renderTableRow = 10,
		renderTableCol = 4,
		skeletonProps,
		renderTableQuery = true,
	} = props;
	const { list: listRow } = useRenderList({ renderNum: renderTableRow });
	const { list: listCol } = useRenderList({ renderNum: renderTableCol });
	const columns = listCol.map((_column, index: number) => {
		return {
			title: (
				<Skeleton.Button active={active} block={true} {...skeletonProps} />
			),
			render: () => (
				<Skeleton.Button active={active} block={true} {...skeletonProps} />
			),
			dataIndex: `SkeletonTable-${index}`,
			key: `SkeletonTable-${index}`,
		};
	});

	const dataSource = listRow.map((_, rIndex) => {
		const item: Record<string, string> = {};
		listCol.forEach((_column, index: number) => {
			item[`SkeletonTable-${index}`] = `data-source-${index}-${rIndex}`;
		});
		return item;
	});
	return (
		<>
			{renderTableQuery ? (
				<>
					<SkeletonQuery
						type="query"
						renderNum={renderNum}
						active={active}
						skeletonProps={skeletonProps}
					/>
					<Divider />
				</>
			) : (
				<></>
			)}

			<div className="cbd-skeleton-pro-table">
				<div className="cbd-skeleton-pro-table-operate">
					<Skeleton.Button
						active={active}
						block={true}
						className="cbd-skeleton-pro-table-title"
						{...skeletonProps}
					/>
					<div>
						<Skeleton.Button
							active={active}
							block={true}
							className="cbd-skeleton-pro-table-item"
							{...skeletonProps}
						/>
						<Skeleton.Button
							active={active}
							block={true}
							className="cbd-skeleton-pro-table-item"
							{...skeletonProps}
						/>
					</div>
				</div>
				<Table
					columns={columns}
					pagination={false}
					dataSource={dataSource}
					rowKey={(r) => {
						return JSON.stringify(r);
					}}
				/>
				<div className="cbd-skeleton-pro-table-page">
					<div className="cbd-skeleton-pro-table-pager">
						<Skeleton.Input active={active} block={true} {...skeletonProps} />
					</div>
				</div>
			</div>
		</>
	);
}

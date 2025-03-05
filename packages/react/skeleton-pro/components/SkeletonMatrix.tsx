import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { useRenderList } from "@chapanda/component-pro-utils";
import { Row, Col, Skeleton, Card } from "antd";
import "../../styles/skeleton-pro/index.css";
export function SkeletonMatrix(props: SkeletonProProps) {
	const {
		active = true,
		renderNum = 6,
		skeletonProps,
		rowProps,
		colProps,
	} = props;
	const { list } = useRenderList({ renderNum });
	return (
		<Row {...rowProps} className="cbd-skeleton-pro-matrix">
			{list.map((_, index: number) => {
				return (
					<Col key={`cbd-skeleton-pro-matrix${index}`} {...colProps}>
						<Card
							title={
								<Skeleton.Button
									className="cbd-skeleton-pro-matrix-title"
									{...skeletonProps}
								/>
							}
							extra={null}
							className={"cbd-skeleton-pro-matrix-card"}
							bordered={false}
						>
							<div className="cbd-skeleton-pro-matrix-content">
								<Skeleton.Button
									active={active}
									block={true}
									className="cbd-skeleton-pro-matrix-sub-title"
									{...skeletonProps}
								/>
								<Skeleton.Button
									active={active}
									block={true}
									className="cbd-skeleton-pro-matrix-description"
									{...skeletonProps}
								/>
							</div>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}

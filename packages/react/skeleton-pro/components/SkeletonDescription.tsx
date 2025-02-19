import type { SkeletonProProps } from "../types.ts";
import React from "react";
import {useRenderList} from "@chapanda/component-pro-utils";
import { Skeleton } from "antd";
import "../../styles/skeleton-pro/index.css";
export function SkeletonDescription(props: SkeletonProProps) {
	const { active = true, renderNum = 6, skeletonProps } = props;
	const { list } = useRenderList({active, renderNum})
	return (
		<>
			{list.map((_,index: number) => {
				return (
					<div
						className="cbd-skeleton-pro-description"
						key={`cbd-skeleton-pro-description${index}`}
					>
						<div className='cbd-skeleton-pro-description-body'>
							<Skeleton.Button
								active={active}
								className="cbd-skeleton-pro-decr-title"
								{...skeletonProps}
							/>
							<Skeleton.Button
								active={active}
								className="cbd-skeleton-pro-decr-sub-title"
								{...skeletonProps}
							/>
						</div>
						<div className='cbd-skeleton-pro-description-right'>
							<Skeleton.Button
								active={active}
								block={false}
								className="cbd-skeleton-pro-decr-extra"
								{...skeletonProps}
							/>
						</div>
					</div>
				);
			})}
		</>
	)
}

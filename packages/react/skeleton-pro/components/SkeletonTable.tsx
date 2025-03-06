import type { SkeletonProProps } from "../types.ts";
import React from "react";

export function SkeletonTable(props: SkeletonProProps) {
	const { active = true, renderNum = 10, skeletonProps } = props;
	return (
		<div>
			<div></div>
		</div>
	);
}

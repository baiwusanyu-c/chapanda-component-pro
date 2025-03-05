import type { SkeletonProProps } from "../types.ts";
import React from "react";
import { useRenderList } from "@chapanda/component-pro-utils";

export function SkeletonDetail(props: SkeletonProProps) {
	const { active = true, renderNum = 6, skeletonProps } = props;
	const { list } = useRenderList({ renderNum });
	return <div></div>;
}

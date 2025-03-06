import React, { useMemo } from "react";
import type { SkeletonProProps } from "./types.ts";
import { SkeletonDetail } from "./components/SkeletonDetail.tsx";
import { SkeletonDescription } from "./components/SkeletonDescription.tsx";
import { SkeletonList } from "./components/SkeletonList.tsx";
import { SkeletonMatrix } from "./components/SkeletonMatrix.tsx";
import { SkeletonQuery } from "./components/SkeletonQuery.tsx";
import { SkeletonTable } from "./components/SkeletonTable.tsx";
import "../styles/skeleton-pro/index.css";
export function SkeletonPro(props: SkeletonProProps) {
	const renderSkeleton = useMemo(() => {
		if (props.type === "list") {
			return <SkeletonList {...props} />;
		}
		if (props.type === "description") {
			return <SkeletonDescription {...props} />;
		}
		if (props.type === "matrix") {
			return <SkeletonMatrix {...props} />;
		}
		if (props.type === "detail") {
			return <SkeletonDetail {...props} />;
		}
		if (props.type === "table") {
			return <SkeletonTable {...props} />;
		}
		if (props.type === "query") {
			return <SkeletonQuery {...props} />;
		}
	}, [props]);
	return <div className="cbd-skeleton-pro">{renderSkeleton}</div>;
}

import React from "react";
import "../../styles/table-pro/index.css";
import { LayoutTitle } from "../../layout-title";
import type { ChapandaTableProProps } from "../types.ts";

export function HeaderFilterTable<
	dataSource extends Record<string, any>,
	U = any,
>(props: ChapandaTableProProps<dataSource, U>) {
	const { searchTitle } = props;
	return (
		<>
			{searchTitle ? (
				<LayoutTitle title={searchTitle.title} tooltip={searchTitle.tooltip} />
			) : (
				<></>
			)}
		</>
	);
}

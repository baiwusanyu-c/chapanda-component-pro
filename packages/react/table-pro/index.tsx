import React from "react";
import "../styles/table-pro/index.css";
import type { ChapandaTableProProps } from "./types.ts";
import { FormFilterTable } from "./components/FormFilterTable.tsx";
import { HeaderFilterTable } from "./components/HeaderFilterTable.tsx";

function ChaPandaTablePro<dataSource extends Record<string, any>, U = any>(
	props: ChapandaTableProProps<dataSource, U>,
) {
	const { formType = "form" } = props;
	return (
		<div className="cbd-table-pro">
			{formType === "form" ? (
				<FormFilterTable<dataSource, U> {...props} />
			) : (
				<HeaderFilterTable {...props} />
			)}
		</div>
	);
}

export { ChaPandaTablePro };

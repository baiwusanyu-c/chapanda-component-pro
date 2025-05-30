import React, { useMemo } from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import type { LayoutTitleProps } from "./types.ts";
import "../styles/layout-title/index.css";

export function LayoutTitle(props: LayoutTitleProps) {
	const { title, tooltip } = props;
	const renderTitle = useMemo(() => {
		if (title) {
			return (
				<h1 className="title-content">
					<div className="title-bar"></div>
					{title}
					{tooltip ? (
						<Tooltip title={tooltip}>
							<InfoCircleOutlined className="title-icon" />
						</Tooltip>
					) : (
						<></>
					)}
				</h1>
			);
		} else {
			return <div></div>;
		}
	}, [title, tooltip]);
	return (
		<>
			<div className="cbd-table-layout-title">
				{renderTitle}
				<div className="operation">{props.children}</div>
			</div>
		</>
	);
}

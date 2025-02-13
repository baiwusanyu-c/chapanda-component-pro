import React, { useMemo } from "react";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "../../styles/table-pro/index.css";
export interface TitleAreaProps {
	title?: string;
	tooltip?: string;
	children?: React.ReactNode;
}
export function TitleArea(props: TitleAreaProps) {
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
			<div className="title-area">
				{renderTitle}
				<div className="operation">{props.children}</div>
			</div>
		</>
	);
}

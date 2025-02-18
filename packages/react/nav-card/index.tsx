import React, { useCallback, useMemo } from "react";
import type { NavCardProps } from "./types.ts";
import "../styles/nav-card/index.css";
import { Card, Tag } from "antd";

export function NavCard(props: NavCardProps) {
	const {
		isATag,
		attrs,
		title,
		titleIcon,
		extra,
		description,
		showExtra = true,
		disabled = false,
	} = props;
	const renderNavCard = useCallback(
		(child?: string | React.ReactNode) => {
			const cls = disabled ? "is-disabled" : "";
			return isATag ? (
				<a className={`cbd-nav-card cbd-nav-card--a ${cls}`} {...attrs}>
					{child}
				</a>
			) : (
				<div className={`cbd-nav-card ${cls}`} {...attrs}>
					{child}
				</div>
			);
		},
		[isATag, attrs, disabled],
	);

	const renderExtra = useMemo(() => {
		if (showExtra) {
			if (extra && typeof extra === "string") {
				return (
					<Tag bordered={false} className="cbd-nav-card--extra">
						{extra}
					</Tag>
				);
			}
			return extra;
		} else {
			return <></>;
		}
	}, [showExtra, extra]);

	const coreCardCls = useMemo(() => {
		if (titleIcon) {
			return "core-card";
		} else {
			return "core-card--not-title";
		}
	}, [titleIcon]);
	return (
		<>
			{renderNavCard(
				<Card
					title={titleIcon}
					extra={renderExtra}
					className={coreCardCls}
					bordered={false}
				>
					<p className={`cbd-nav-card--title`}>{title}</p>
					<p className={`cbd-nav-card--description`}>{description}</p>
				</Card>,
			)}
		</>
	);
}

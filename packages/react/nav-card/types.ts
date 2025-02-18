import React from "react";

export interface NavCardProps {
	// 是否渲染成 a 标签
	isATag?: boolean;
	// TODO: 继承到渲染元素上的属性
	attrs?: Record<string, any>;
	// TODO: 标题图标
	titleIcon?: React.ReactNode;
	// TODO: 标题
	title?: string | React.ReactNode;
	// TODO: 标题的附加内容
	extra?: string | React.ReactNode;
	// TODO: 是否显示标题附加内容
	showExtra?: boolean;
	// TODO: 是否禁用
	disabled?: boolean;
	// TODO: 描述
	description?: string | React.ReactNode;
}

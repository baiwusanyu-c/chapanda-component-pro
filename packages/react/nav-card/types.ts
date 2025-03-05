import React from "react";

export interface NavCardProps {
	// 是否渲染成 a 标签
	isATag?: boolean;
	// 继承到渲染元素上的属性
	attrs?: Record<string, any>;
	// 标题图标
	titleIcon?: React.ReactNode;
	// 标题
	title?: string | React.ReactNode;
	// 标题的附加内容
	extra?: string | React.ReactNode;
	// 是否显示标题附加内容
	showExtra?: boolean;
	// 是否禁用
	disabled?: boolean;
	// 描述
	description?: string | React.ReactNode;
}

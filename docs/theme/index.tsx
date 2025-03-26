import Theme from "rspress/theme";
import { ChapandaProvider } from "@chapanda/component-pro";
import "@chapanda/style-preset/theme/antd";
import React from "react";
import "./style.scss";
import { ConfigProvider } from "antd";
import { genChaPandaAntdTheme } from "@chapanda/style-preset/antd";
const Layout = () => (
	<ConfigProvider theme={genChaPandaAntdTheme()} componentSize="middle">
		<ChapandaProvider>
			<Theme.Layout />
		</ChapandaProvider>
	</ConfigProvider>
);

export default {
	...Theme,
	Layout,
};

export * from "rspress/theme";

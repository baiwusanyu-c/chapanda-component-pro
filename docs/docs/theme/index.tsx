import Theme from 'rspress/theme';
import { ChapandaProvider } from "@chapanda/component-pro";
import React from 'react'
const Layout = () => <ChapandaProvider><Theme.Layout /></ChapandaProvider>;

export default {
  ...Theme,
  Layout
};

export * from 'rspress/theme';

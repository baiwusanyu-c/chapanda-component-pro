import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'chapanda component pro',
  icon: '/logo.png',
  logo: {
    light: '/logo-2.png',
    dark: '/logo-2.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/baiwusanyu-c/chapanda-component-pro',
      },
    ],
  },
});

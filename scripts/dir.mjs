export const entry = [
  {
    entryPath: "../packages/react/index.ts",
    outputPath: "react",
  },

  {
    entryPath: "../packages/utils/index.ts",
    outputPath: "utils",
  },
  {
    entryPath: "../packages/component-pro/index.ts",
    outputPath: "component-pro",
  },
]


export const entryPkg = {
  'react': '../packages/react',
  'utils': '../packages/utils',
  'component-pro': '../packages/component-pro',
}

export const entryTheme = {
  'component-pro/react': ['../packages/react'],
}

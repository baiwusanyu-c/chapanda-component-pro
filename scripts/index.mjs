import * as process from 'process'
import * as path from 'path'
import { defineConfig } from 'tsup'
import { entry as entryConfig } from './dir.mjs'

let entry = {}
const buildMode = process.env.BUILD_MODE
const baseConfig = {
  entry: {},
  external: [
    'chalk',
    'fs-extra',
    'fast-glob',
    'react-dom',
    'react',
    'antd',
    '@ant-design/icons',
    '@ant-design/colors',
    'fs-extra',
    'magic-string',
  ],
  format: ['cjs', 'esm'],
  clean: true,
  minify: false,
  dts: false,
  outDir: path.resolve(process.cwd(), '../dist'),

}
const configOptions = []

if (buildMode === 'prod') {
  entry = entryConfig
  for (let i = 0; i < entry.length; i++) {
    const config = JSON.parse(JSON.stringify(baseConfig))
    // path
    config.entry = [entry[i].entryPath]
    config.external = [/@chapanda/]
    config.outDir = path.resolve(process.cwd(), `../dist/${entry[i].outputPath}`)
    config.dts = true
    config.outExtension = (format) => {
      return {
        js: `.${format.format === 'cjs' ? 'cjs' : 'mjs'}`,
      }
    }
    configOptions.push(config)
  }
}

export default defineConfig(configOptions)

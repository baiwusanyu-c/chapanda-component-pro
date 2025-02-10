import gulp from 'gulp'
import { runTask } from './utils.mjs'

export default gulp.series(
  runTask('publish @chapanda/component-pro-utils', 'cd dist/utils && pnpm run publish:npm'),
  runTask('publish @chapanda/component-pro-react', 'cd dist/react && pnpm run publish:npm'),
  runTask('publish @chapanda/component-pro', 'cd dist/component-pro && pnpm run publish:npm'),
)

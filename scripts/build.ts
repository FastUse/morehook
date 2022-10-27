import path from 'path'
import assert from 'assert'
import { execSync as exec } from 'child_process'
import fs from 'fs-extra'
import fg from 'fast-glob'
import consola from 'consola'
import { metadata } from '../packages/metadata/metadata'
import { packages } from '../meta/packages'
import { version } from '../package.json'
import { updateImport } from './utils'

const rootDir = path.resolve(__dirname, '..')
const watch = process.argv.includes('--watch')

const FILES_COPY_ROOT = [
  'LICENSE',
]

const FILES_COPY_LOCAL = [
  'README.md',
  'index.json',
  '*.cjs',
  '*.mjs',
  '*.d.ts',
]

assert(process.cwd() !== __dirname)

/**
 * 将打包后的 dist 文件进行二次处理 (复制一些公共文件进 dist 包以及文件的移动)
 */
async function buildMetaFiles() {
  for (const { name } of packages) {
    const packageRoot = path.resolve(__dirname, '..', 'packages', name)
    const packageDist = path.resolve(packageRoot, 'dist')

    if (name === 'core')
      await fs.copyFile(path.join(rootDir, 'README.md'), path.join(packageDist, 'README.md'))

    for (const file of FILES_COPY_ROOT)
      await fs.copyFile(path.join(rootDir, file), path.join(packageDist, file))

    const files = await fg(FILES_COPY_LOCAL, { cwd: packageRoot })
    for (const file of files)
      await fs.copyFile(path.join(packageRoot, file), path.join(packageDist, file))

    const packageJSON = await fs.readJSON(path.join(packageRoot, 'package.json'))

    // 当子类包互相引用时，要手动更改其版本（不改的话则是 workspace）
    for (const key of Object.keys(packageJSON.dependencies || {})) {
      if (key.startsWith('@morehook/')) {
        packageJSON.dependencies[key] = version
      }
    }
    await fs.writeJSON(path.join(packageDist, 'package.json'), packageJSON, { spaces: 2 })
  }
}

async function build() {
  consola.info('Clean up')
  exec('pnpm run clean', { stdio: 'inherit' })

  consola.info('Generate Imports')
  await updateImport(metadata)

  exec(`pnpm run build:rollup`, { stdio: 'inherit' })
  // exec(`pnpm run build:rollup${watch ? ' -- --watch' : ''}`, { stdio: 'inherit' })

  consola.info('Fix types')
  exec('pnpm run types:fix', { stdio: 'inherit' })

  await buildMetaFiles()
}

async function cli() {
  try {
    await build()
  }
  catch (e) {
    console.error(e)
    process.exit(1)
  }
}

export {
  build,
}

if (require.main === module)
  cli()

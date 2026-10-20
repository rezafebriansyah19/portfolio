import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repositoryName ? `/${repositoryName}/` : '/'

let outputDirectory = ''

const githubPagesFallback: Plugin = {
  name: 'github-pages-spa-fallback',
  apply: 'build',
  configResolved(config) {
    outputDirectory = resolve(config.root, config.build.outDir)
  },
  async closeBundle() {
    await copyFile(
      resolve(outputDirectory, 'index.html'),
      resolve(outputDirectory, '404.html'),
    )
  },
}

export default defineConfig({
  base,
  plugins: [react(), githubPagesFallback],
})

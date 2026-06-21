import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Plugin to handle optional private data files (milestones, movies)
function optionalPrivateFiles() {
  const privateFiles = {
    'milestones.private.js': '\0virtual:empty-milestones',
    'movies.private.js': '\0virtual:empty-movies',
  }

  const fileExists = Object.fromEntries(
    Object.keys(privateFiles).map(name => [
      name,
      existsSync(resolve(__dirname, 'src', name))
    ])
  )

  return {
    name: 'optional-private-files',
    enforce: 'pre',
    resolveId(source) {
      for (const [name, virtualId] of Object.entries(privateFiles)) {
        if (source === `./${name}` || source.endsWith(`/${name}`)) {
          if (!fileExists[name]) return virtualId
        }
      }
      return null
    },
    load(id) {
      if (Object.values(privateFiles).includes(id)) {
        return 'export default null;'
      }
      return null
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [optionalPrivateFiles(), react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Plugin to handle optional private milestones file
function optionalPrivateFiles() {
  const privateFilePath = resolve(__dirname, 'src/milestones.private.js')
  const fileExists = existsSync(privateFilePath)

  return {
    name: 'optional-private-files',
    enforce: 'pre',
    resolveId(source) {
      if (source === './milestones.private.js' || source.endsWith('/milestones.private.js')) {
        if (!fileExists) {
          return '\0virtual:empty-milestones'
        }
      }
      return null
    },
    load(id) {
      if (id === '\0virtual:empty-milestones') {
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

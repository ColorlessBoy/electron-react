import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
try {
  contextBridge.exposeInMainWorld('context', {})
} catch (error) {
  console.error(error)
}

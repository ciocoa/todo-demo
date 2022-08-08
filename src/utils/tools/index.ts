import type { App, Component, Plugin } from 'vue'

export const extend = Object.assign

export const withInstall = <T>(options: T, alias?: string) => {
  ;(options as Record<string, unknown>).install = (app: App) => {
    const { name, displayName } = options as unknown as { name: string; displayName: string }
    app.component(name || displayName, options as Component)
    if (alias) app.config.globalProperties[alias] = options
  }
  return options as T & Plugin
}

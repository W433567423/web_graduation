import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

// 注册element icon
export const rejectElement = (app: App<Element>) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
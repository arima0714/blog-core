import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

const sendPageView = (path) => {
  if (typeof window === 'undefined') return
  if (!window.gtag) return
  window.gtag('event', 'page_view', { page_path: path })
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)

    const previousAfterRouteChanged = ctx.router.onAfterRouteChanged
    ctx.router.onAfterRouteChanged = (to) => {
      previousAfterRouteChanged?.(to)
      sendPageView(to)
    }
  }
}

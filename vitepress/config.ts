import { defineConfig, type DefaultTheme } from 'vitepress'

type BlogConfigOptions = {
  title: string
  description: string
  gaMeasurementId?: string
  nav?: DefaultTheme.NavItem[]
}

const createGaHead = (gaMeasurementId?: string) => {
  if (!gaMeasurementId) {
    return []
  }

  return [
    ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}` }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaMeasurementId}', { send_page_view: false });
    `]
  ]
}

export const createBlogConfig = ({
  title,
  description,
  gaMeasurementId,
  nav = [{ text: 'Home', link: '/' }]
}: BlogConfigOptions) => {
  return defineConfig({
    title,
    description,
    themeConfig: {
      nav
    },
    head: createGaHead(gaMeasurementId)
  })
}

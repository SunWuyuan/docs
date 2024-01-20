import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "悟元文档",
  lang: 'zh-CN',
  description: "孙悟元的文档站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      //{ text: 'Examples', items: [ { text: 'Markdown Examples', link: '/markdown-examples' }, { text: 'Runtime API Examples', link: '/api-examples' } ] },
    {
      text: '合法性',
      items: [
        { text: '用户协议', link: '/User-Agreement' },
        { text: '隐私策略', link: '/Privacy' },
      ]
    }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sitemap: {
      hostname: 'https://docs.wuyuan.dev'
    },
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/sunwuyuan/docs/edit/main/:path'
    },
    search: {
      provider: 'local'
    }
  }
})

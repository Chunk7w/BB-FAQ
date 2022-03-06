module.exports = {
    lang: 'zh-CN',
    title: 'Blockbuster Mod - FAQ',
    description: '中文常见问题文档',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/img/McHorses_Mods_Color.png',

    // 侧边栏
      // 侧边栏对象
      // 不同子路径下的页面会使用不同的侧边栏
      sidebar: {
      '/install/': [
          {
          text: '模组 / 软件下载与安装',
          collapsible: true,
          children: ['/install/README.md', '/install/dev.md', '/install/apps.md'],
          },
      ],
      '/reference/': [
          {
          text: 'Reference',
          collapsible: true,
          children: ['/reference/cli.md', '/reference/config.md'],
          },
      ],
    },
    },
}

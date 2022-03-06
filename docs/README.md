---
home: true
title: 首页
heroImage: /img/McHorses_Mods_Color.png
actions:
  - text: 快速上手
    link: /install/
    type: primary
  - text: 项目简介
    link: /install/
    type: secondary
features:
  - title: 为你量身定制
    details: 专为 Minecraft 视频创作者和冒险地图创作者开发，Blockbuster 能为你带来极致的演出效果。
  - title: 功能丰富而强大
    details: 除基础的录制与回放功能外，还有自定义模型系统、粒子系统、回放编辑系统、动画系统，以及众多辅助功能。
  - title: 集成编辑
    details: 与 Aperture、Minema 等模组高度集成，形成迄今为止在 Minecraft 中最强大的创作工具。
  - title: CGI
    details: 提供了众多 CGI 数据导出功能，能让你在 Blender、After Effects 中继续加工素材。
  - title: 开源
    details: 所有模组的源代码均托管在 GitHub，欢迎贡献新的代码！
  - title: 社区支持
    details: 依托社区的支持，与众多志同道合的创作者们互相交流进步。
footer: Licensed Under CC BY-NC 4.0 | Copyright © 2018-present Chunk7 | Powered by VuePress
---

### 像数 1, 2, 3 一样容易

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>

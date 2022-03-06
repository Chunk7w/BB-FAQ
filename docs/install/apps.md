# 获取 & 安装相关软件

## GitHub 下载加速

将任意来自 GitHub 的文件链接输入[本站](https://ghproxy.com/)，点击「下载」，即可跳转至加速站点，或尝试使用 [Github 增强 - 高速下载](https://greasyfork.org/zh-CN/scripts/412245-github-%E5%A2%9E%E5%BC%BA-%E9%AB%98%E9%80%9F%E4%B8%8B%E8%BD%BD) 脚本替换 URL。适用于受大陆特殊基础设施干扰的网络环境下使用。


若没有唤醒下载请求，请手动复制 URL，并通过 IDM, FDM, Motrix, Aria2 等工具进行下载。
​

## FFmpeg

如果你需要使用 Minema 辅助你的游戏录制工作，那么你通常需要下载 FFmpeg 作为视频编码器使用。


请按以下步骤下载和安装 FFmpeg 的二进制可执行文件：

1. 下载 FFmpeg 的 Windows [官方构建](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-full.7z)
2. 如果官方源无法下载、速度慢，或不确定自己下的对不对，可尝试访问 [**备用下载 ①**](http://tmp.link/f/6168c6ecb6acc) / [**备用下载 ②**](https://wwi.lanzoui.com/i1osIpj1mpc)
3. 下载完成后，你将会得到一个拓展名为 `.zip` 或 `.7z` 的压缩包
   * 解压后，在`ffmpeg\bin` 文件夹内会有 `ffmpeg.exe``ffplay.exe` 和 `ffprobe.exe` 3 个文件
   * 如果您下载得到的不是 `.zip` 文件，解压后找不到上述文件，或是 `bin` 文件夹内出现了 3 个以上的文件，那么~~恭喜你~~你下错了，请瞪大眼睛看步骤 1 和步骤 2，蓝色部分是可以点击的链接
4. 解压，并在 `ffmpeg\bin` 目录下找到名为 `ffmpeg.exe` 的文件，将其放在 `.minecraft` 文件夹下
   * 如果你在启动器设置了版本隔离，请将 `ffmpeg.exe` 放在 `.minecraft\versions\游戏版本` 文件夹下。没有特殊需求，不推荐使用版本隔离功能
5. 在 Minema mod 的设置中将`编码器路径`恢复为默认
6. 最后确认你的 Minema mod 版本为最新版，通常情况下即可解决该问题



标准的安装教程请看：[**Minema mod 安装教程及初级使用教程**](https://www.bilibili.com/video/av45214103)
**​**

## Java 8 

运行 Minecraft Java Edition 1.12.2 必备组件。

::: details 下载
[**官方源**](https://java.com/en/download/manual.jsp) / [**OpenJDK 8 - HotSpot JVM**](https://adoptopenjdk.net/archive.html?variant=openjdk8&jvmVariant=hotspot)

[**TMP.Link**](http://tmp.link/f/6168c70b82c52) / [**蓝奏云**](https://wwi.lanzoui.com/icH0Ph4ilza) / 
[**OpenJDK - TMP.Link**](http://tmp.link/f/61c3f985950c8)
:::

::: tip 提示
官方源请下载 Windows x64 离线安装包。

下载 OpenJDK 时请选择对应系统的「二进制」版本，解压后在启动器手动设置 Java 路径即可。
:::
::: danger 警告
切勿使用 OpenJ9 JVM，否则会严重影响游戏的稳定性和模组的兼容性，除非你知道你在做什么。
:::


## 启动器

### PCL2
![PCL2](/img/download/pcl2.png)
新进第三方启动器，正式版免费。启动速度更快，交互体验流畅，运行稳定，启动出错概率更小，作者长期活跃维护。

[**获取正式版 PCL2**](https://afdian.net/p/0164034c016c11ebafcb52540025c377) - <Badge type="tip" text="官方源" vertical="middle" />

### Hello Minecraft! Launcher (HMCL)

![HMCL](/img/download/hmcl.png)
老牌的免费、开源第三方启动器，全平台可用。Bug 较多，交互较为繁琐，但功能丰富且自由，自定义程度更高，适合老手使用。**游戏崩溃的时候不要发 HMCL 的日志窗口截图！**

[**获取 HMCL**](https://hmcl.huangyuhui.net/) <Badge type="tip" text="官方源" vertical="middle" />

## McHorse's Mods 徽标

![McHorses_Mods_Color.png](/img/download/McHorses_Mods_Color.png) ![McHorses_Mods_Lines.png](/img/download/McHorses_Mods_Lines.png) ![McHorses_Mods_LinesWhite.png](/img/download/McHorses_Mods_LinesWhite.png)

McHorse's Mods 的徽标，也可以视作 Blockbuster 的徽标来使用。包含使用 InkScape 制作的原版徽标文件，以及通过 Adobe Illustrator 制作的重置版徽标。

::: details 下载
[**TMP.Link**](http://tmp.link/room/610df1cd8ff11) / [**蓝奏云**](https://wwi.lanzoui.com/iclCrsdhh7c)
:::

::: warning 注意
**请不要直接右键保存**，否则您保存下来的将会是一个位图而非矢量图。

使用矢量版图标时，需要软件支持加载 `.ai` 文件；`InkScape-McHorses_mods.svg` 必须使用 InkScape 进行编辑。
:::

## SkinConvertingSheep

![image.png](/img/download/SkinConvertingSheep.png)

该工具可以将旧版的 `64x32` 皮肤批量转换为新版的 `64x64` 皮肤。

::: details 下载
[官方源](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-tools/1265755) / [**汉化版 - TMP.Link**](http://tmp.link/f/6168c7e7c7b40)
:::


## 下载 MagicaVoxel
![MagicaVoxel](/img/download/MagicaVoxel.png)

轻量级的体素模型制作工具，并附带简易的渲染功能。Blockbuster 支持直接导入 `.vox` 模型。

::: details 下载
[官方源 - 英文版](https://ephtracy.github.io/) <Badge type="tip" text="0.99.6.4" vertical="middle" /> <Badge type="warning" text="0.99.7.0 beta" vertical="middle" />

[TMP.Link - 汉化版](http://tmp.link/f/6168c83207856) / [蓝奏云 - 汉化版](https://wwi.lanzoui.com/iXPhosaa2hc) <Badge type="tip" text="0.99.6.3 - 仅提供 Windows 64bit" vertical="middle" />
:::


## 下载 Blockbench

![Blockbench](/img/download/Blockbench.png)

享誉整个 Minecraft 社区的 Low-poly 风格 3D 模型制作工具，包括 Mojang Studio 在内的多个工作室都在使用 Blockbench。

使用基岩版模型格式制作的静态与动态 Blockbench 模型，在导出为基岩版几何文件后，能够以 Chameleon 模型的形式被 Blockbuster 读取和使用。

::: details 下载
[**官方源**](https://blockbench.net/downloads/) <Badge type="danger" text="中国大陆被屏蔽" vertical="middle" />

[**TMP.Link**](http://tmp.link/f/620a53c7a7484)（仅提供 Windows 安装包，仅支持 64 位系统）<Badge type="tip" text="4.1.5" vertical="middle" />
:::

### 如何将 Blockbench 设置为中文

![Blockbench_zh_cn](/img/download/Blockbench_Language.gif)

::: tip 提示
修改设置后记得重启 Blockbench。
​
:::

## 下载 Blockbench 插件

由于 Blockbench 的插件目录是通过访问 `raw.githubusercontent.com` 加载的，除非您的网络不受大陆神秘力量的干扰，否则您永远也无法加载出可用插件列表。


您可以访问 [JannisX11/blockbench-plugins/tree/master/plugins](https://github.com/JannisX11/blockbench-plugins/tree/master/plugins) 找到全部插件，并通过 [GitHub 下载加速](#y2BXA) 获取这些插件，或尝试使用 [Github 增强 - 高速下载](https://greasyfork.org/zh-CN/scripts/412245-github-%E5%A2%9E%E5%BC%BA-%E9%AB%98%E9%80%9F%E4%B8%8B%E8%BD%BD) 脚本替换为 CDN 加速 URL。

![Blockbench_plugins](/img/download/Blockbench-plugins.png)

获取插件链接后，可以直接下载插件或复制其 URL，并通过「从URL加载插件」或「从文件加载插件」的方式手动安装。如果通过 URL 无法加载插件，请直接下载插件并以「从文件加载插件」的方式安装。

### Texture Stitcher - 材质合并

```:no-line-numbers
https://cdn.jsdelivr.net/gh/JannisX11/blockbench-plugins@master/plugins/texture_stitcher.js
```

### GeckoLib Animation Utils - GeckoLib 动画插件

```:no-line-numbers
https://cdn.jsdelivr.net/gh/JannisX11/blockbench-plugins@master/plugins/animation_utils.js
```

### Shape Generator - 形状生成（生成圆环等复杂结构）

```:no-line-numbers
https://cdn.jsdelivr.net/gh/JannisX11/blockbench-plugins@master/plugins/shape_generator.js
```



## 下载 Adobe 全家桶

如果钱多的没处花，可以考虑入正，否则就去微博关注 [@vposy](https://weibo.com/vposy)，然后看置顶微博。具体操作看自己的悟性，本文不方便透露过多细节。
​

## Snowstorm 粒子编辑器

Snowstorm 是一个基于网页的的粒子编辑器。你也可以通过 Blockbuster 内置的粒子编辑器进行编辑。

[**官网**](https://jannisx11.github.io/snowstorm/) / [**离线版下载**](https://www.lanzoui.com/iNOTpi5pita)（不保证版本始终为最新版）
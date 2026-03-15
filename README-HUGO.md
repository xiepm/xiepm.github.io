# Hugo 中文操作手册

这份手册是给你后续维护站点时用的。目标很简单：

- 平时只改 Markdown，不改生成后的网页代码
- 图片、视频、附件放到固定位置
- 本地预览确认没问题后，再生成和发布

---

## 1. 站点内容平时改哪里

你以后主要维护的是这些目录：

- `content/`：所有页面和文章内容
- `assets/images/`：全站共用图片
- `assets/videos/`：全站共用视频
- `assets/files/`：全站共用附件

常用页面入口：

- 首页：`content/_index.md`
- 项目区总览：`content/projects/_index.md`
- 知识区总览：`content/study/_index.md`
- 交流页：`content/connect/_index.md`
- 关于页：`content/about/_index.md`

---

## 2. 项目文章怎么写

### 方法一：直接新建项目文章

在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\new-project.ps1 your-project
```

例如：

```powershell
powershell -ExecutionPolicy Bypass -File .\new-project.ps1 robot-demo
```

然后你会得到一个新的项目 Markdown 文件，通常放在：

- `content/projects/your-project.md`

或者你也可以自己手动建一个目录：

- `content/projects/robot-demo/index.md`

这种方式更适合以后给文章单独放图片、附件和视频。

### 项目文章建议结构

一个项目页建议至少写这些部分：

1. 项目背景
2. 项目目标
3. 系统组成
4. 核心流程
5. 技术栈
6. 结果展示
7. 可扩展方向

### 项目文章简单示例

```md
---
title: "机器人视觉识别实战"
description: "基于 ROS 2 和 OpenCV 的项目示例。"
kicker: "PROJECT"
lead: "这是一篇演示如何组织机器人项目页的示例文章。"
---

## 项目背景

这个项目主要想验证机器人相机图像读取和基础目标识别流程。

## 项目目标

- 完成图像采集
- 完成基础识别
- 输出结果页面

## 技术栈

- ROS 2
- OpenCV
- Python

## 结果展示

这里可以插入图片、视频和说明。
```

---

## 3. 学习文章怎么写

### 方法一：直接新建学习文章

在仓库根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\new-study.ps1 your-topic
```

例如：

```powershell
powershell -ExecutionPolicy Bypass -File .\new-study.ps1 ros-notes
```

### 学习文章建议结构

一篇学习文章建议至少写这些部分：

1. 适合人群
2. 预备知识
3. 学习路线
4. 推荐先读
5. 常见误区
6. 下一步进阶

### 学习文章简单示例

```md
---
title: "机器人与 ROS 2 学习路线"
description: "整理机器人和 ROS 2 的学习顺序。"
kicker: "STUDY"
lead: "适合从零开始梳理机器人方向的人。"
---

## 适合人群

适合刚开始接触机器人和 ROS 2 的同学。

## 预备知识

- Linux 基础
- Python 基础
- 机器人基本概念

## 学习路线

1. 先认识 ROS 2 基本概念
2. 再做简单节点通信实验
3. 最后进入机器人视觉或导航项目
```

---

## 4. 插图怎么插

插图有两种推荐方式。

### 方式一：用全站共用图片目录

把图片放进：

- `assets/images/`

例如放到：

- `assets/images/projects/robot-demo.jpg`

然后在 Markdown 里写：

```md
![机器人项目截图](/images/projects/robot-demo.jpg)
```

### 方式二：给文章建独立目录

例如：

- `content/projects/robot-demo/index.md`
- `content/projects/robot-demo/demo.jpg`

然后在 `index.md` 里写：

```md
![机器人项目截图](demo.jpg)
```

这种方式最适合单篇文章自己管理素材。

### 插图建议

- 一张图只表达一个重点
- 截图文件名尽量有意义，比如 `system-overview.jpg`
- 优先用横图，页面更稳定

---

## 5. 视频怎么放

视频也有两种方式。

### 方式一：放本地视频文件

把视频放到：

- `assets/videos/`

或者文章目录里：

- `content/projects/robot-demo/demo.mp4`

然后在 Markdown 里直接写 HTML：

```html
<video controls width="100%">
  <source src="/videos/robot-demo.mp4" type="video/mp4">
</video>
```

如果视频和文章在同一个目录：

```html
<video controls width="100%">
  <source src="demo.mp4" type="video/mp4">
</video>
```

### 方式二：放外链视频

如果视频已经在 Bilibili 或别的平台，直接放链接最省事：

```md
[观看演示视频](https://www.bilibili.com/)
```

---

## 6. 附件怎么放

例如 PDF、ZIP、文档，可以放到：

- `assets/files/`

然后在 Markdown 里写：

```md
[下载项目文档](/files/robot-demo.pdf)
```

---

## 7. 日常更新流程

你以后日常更新就按这 5 步：

1. 改 `content/` 里的 Markdown
2. 把图片、视频、附件放到 `assets/` 或文章目录
3. 本地预览
4. 本地构建
5. 提交并推送

### 本地预览

```powershell
powershell -ExecutionPolicy Bypass -File .\serve-hugo.ps1
```

浏览器打开：

- `http://127.0.0.1:1313`

### 本地构建

```powershell
powershell -ExecutionPolicy Bypass -File .\build-hugo.ps1
```

构建结果会在：

- `public/`

### 一键发布到 GitHub Pages

如果你已经改完内容，想直接一键发布到 GitHub Pages，运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\publish-hugo.ps1
```

如果你想自己写提交说明：

```powershell
powershell -ExecutionPolicy Bypass -File .\publish-hugo.ps1 "新增机器人项目文章"
```

这个脚本会自动做三件事：

1. 先运行 Hugo 构建
2. 自动提交当前修改
3. 自动推送到当前分支

然后 GitHub Actions 会继续自动把站点发布到 GitHub Pages。

### GitHub Pages 需要怎样设置

你需要在 GitHub 仓库的 `Settings -> Pages` 里把发布源改成：

- `Source: GitHub Actions`

这样以后你每次运行 `publish-hugo.ps1`，推送到 `hugopage` 分支后，Pages 就会自动更新。

---

## 8. 什么时候需要改网页代码

正常更新内容时，不需要改网页代码。

只有这些情况才需要动模板或样式：

- 想改页面布局
- 想改卡片样式
- 想改导航结构
- 想改字体和主题
- 想加新的交互功能

也就是说：

- 改文章：改 Markdown
- 改站点长什么样：改模板 / CSS / JS

---

## 9. 最简单记法

以后你只记住这几句就够了：

1. 文章写在 `content/`
2. 图片视频放在 `assets/` 或文章目录
3. 用 `serve-hugo.ps1` 本地看
4. 用 `build-hugo.ps1` 生成网页
5. 确认无误后再提交发布

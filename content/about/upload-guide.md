---
title: "上传说明"
kicker: "WORKFLOW"
lead: "给后续维护时查看：如何高效上传 Markdown、图片、视频和附件。"
aliases:
  - "/about/upload-guide/"
---

## 先看哪份说明

如果你想看更完整的中文操作手册，可以直接查看：

- [`README-HUGO.md`](C:\Users\xiepm\Desktop\GITHUB\WEB\xiepm.github.io\README-HUGO.md)

这份页面更适合放在站内做快速提醒，完整版手册放在仓库根目录。

## 以后怎么新增内容

### 新增项目

```powershell
.\new-project.ps1 your-project
```

### 新增学习文章

```powershell
.\new-study.ps1 your-topic
```

## 图片、视频、附件放哪里

- 全站共用素材：
  - `assets/images/`
  - `assets/videos/`
  - `assets/files/`
- 页面强绑定素材：
  - 建议后续优先采用 page bundle，例如 `content/projects/face-recognition/index.md`

## 日常工作流

1. 修改 `content/` 里的 Markdown
2. 把素材放到 `assets/` 或页面目录
3. 本地预览：`powershell -ExecutionPolicy Bypass -File .\serve-hugo.ps1`
4. 本地生成：`powershell -ExecutionPolicy Bypass -File .\build-hugo.ps1`

## 图片、视频、附件的最简单规则

- 图片：优先放 `assets/images/`
- 视频：优先放 `assets/videos/`
- 附件：优先放 `assets/files/`
- 如果某篇文章素材很多，就给这篇文章建独立目录

## 什么时候不用改网页代码

正常新增或修改文章时，不需要改 HTML、CSS、JS。

只有这几类需求才要改网页代码：

- 改布局
- 改导航
- 改主题和样式
- 改交互功能

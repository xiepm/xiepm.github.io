# Hugo 工作流说明

这个分支用于把站点迁移到 `GitHub Pages + Hugo + Markdown`。

## 核心目录

- `content/`：Markdown 内容真源
- `layouts/`：三栏模板
- `data/`：导航与右栏数据
- `assets/`：样式、脚本和可处理素材
- `static/`：直接原样发布的资源
- `archetypes/`：新建内容模板

## 本地预览

```powershell
.\serve-hugo.ps1
```

## 本地生成

```powershell
.\build-hugo.ps1
```

## 快速新建内容

```powershell
.\new-project.ps1 my-new-project
.\new-study.ps1 ros-notes
```

## 内容维护入口

- 首页：`content/_index.md`
- 项目区：`content/projects/`
- 学习区：`content/study/`
- 交流页：`content/connect/`
- 关于页：`content/about/`

---
title: "上传说明"
kicker: "Workflow"
lead: "给后续维护时查看：如何高效上传 Markdown、图片、视频和附件。"
aliases:
  - "/about/upload-guide/"
---

## 以后怎么新增内容

### 新增项目

```powershell
hugo new projects/your-project.md
```

### 新增学习文章

```powershell
hugo new study/your-topic.md
```

## 图片、视频、附件放哪里

- 全站共用素材：
  - `assets/images/`
  - `assets/videos/`
  - `assets/files/`
- 页面强绑定素材：
  - 建议后续逐步改成 page bundle，例如 `content/projects/face-recognition/index.md`

## 日常工作流

1. 改 `content/` 里的 Markdown
2. 把素材放到 `assets/` 或页面目录
3. 本地预览：`.\serve-hugo.ps1`
4. 本地生成：`.\build-hugo.ps1`


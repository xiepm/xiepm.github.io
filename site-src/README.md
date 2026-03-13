# Site Source Workspace

这个目录是新的 Markdown 源工程。

以后日常维护只需要围绕这里：

- `mkdocs.yml`
- `docs/`
- `templates/`
- `build-site.ps1`
- `serve-site.ps1`

## 推荐日常流程

1. 在 `docs/` 中新增或修改 `.md`
2. 把图片、视频、附件放进 `docs/assets/`
3. 运行：

```powershell
.\serve-site.ps1
```

4. 本地检查没问题后，运行：

```powershell
.\build-site.ps1
```

5. 提交并推送当前仓库

## 常用提醒

- 上传说明：`docs/about/upload-guide.md`
- 插入示例：`docs/projects/media-demo.md`

## 目录说明

- `docs/index.md`：首页
- `docs/projects/`：项目
- `docs/study/`：学习
- `docs/message/`：留言
- `docs/about/`：关于
- `docs/assets/`：文字配图、视频、附件
- `templates/`：项目模板、学习模板

## 说明

当前仓库根目录仍然是发布目录。

`build-site.ps1` 会：

- 同步当前站点的 `extra.css / extra.js`
- 复制共享图片资源到 `docs/`
- 调用 MkDocs 构建
- 把生成结果覆盖拷贝回仓库根目录

这样可以尽量保留你当前网页效果。

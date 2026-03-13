# 上传说明

这页专门用来提醒以后怎么上传和编辑内容。

## 一句话规则

- 文字写在 `.md`
- 图片放在 `docs/assets/images/`
- 视频放在 `docs/assets/videos/`
- 附件放在 `docs/assets/files/`
- 在 Markdown 里用 **相对路径** 引用

## 目录放置规则

建议按内容类别继续细分：

- `docs/assets/images/home/`
- `docs/assets/images/projects/`
- `docs/assets/images/study/`
- `docs/assets/videos/projects/`
- `docs/assets/videos/study/`
- `docs/assets/files/projects/`
- `docs/assets/files/study/`

这样以后找素材会很方便。

## 图片怎么插入

如果你在首页 `docs/index.md`：

```md
![首页图片](assets/images/home/banner.png)
```

如果你在项目页 `docs/projects/...`：

```md
![项目截图](../assets/images/projects/face-recognition/demo.png)
```

如果你在学习页 `docs/study/...`：

```md
![学习配图](../assets/images/study/ros/rviz.png)
```

## 视频怎么插入

推荐直接写 HTML：

```html
<video controls width="100%">
  <source src="../assets/videos/projects/demo.mp4" type="video/mp4">
</video>
```

如果是外链视频，直接写链接更省事：

```md
[观看演示视频](https://www.bilibili.com/)
```

## 附件怎么插入

比如 PDF、zip、说明文档：

```md
[下载项目文档](../assets/files/projects/doc.pdf)
```

## 日常更新流程

1. 把文字写进对应的 `.md`
2. 把图片、视频、附件放进 `docs/assets/`
3. 运行：

```powershell
.\serve-site.ps1
```

4. 本地预览没问题后，运行：

```powershell
.\build-site.ps1
```

## 最重要的提醒

路径写错，页面最容易出问题。

记法很简单：

- 当前页面和素材在同一级，就直接写相对路径
- 如果当前页面在子目录里，通常要先写 `../`

## 参考示例

- [查看图片视频示例](../projects/media-demo.md)

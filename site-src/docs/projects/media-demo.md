# 图片与视频插入示例

这页是一个可直接参考的示例页面。

以后你新增项目页或者学习页时，可以直接照着这里写。

## 1. 图片实际效果示例

下面这张图是实际插入的图片：

![示例图片](../images/portrait.jpg)

对应写法：

```md
![示例图片](../images/portrait.jpg)
```

如果以后你自己的项目图片放在 `docs/assets/images/projects/` 里，写法通常会像这样：

```md
![项目截图](../assets/images/projects/your-project/demo.png)
```

## 2. 视频写法示例

如果你的视频文件放在 `docs/assets/videos/projects/demo.mp4`，推荐这样插入：

```html
<video controls width="100%">
  <source src="../assets/videos/projects/demo.mp4" type="video/mp4">
</video>
```

说明：

- `controls`：显示播放控件
- `width="100%"`：宽度跟随正文容器
- `src`：视频文件的相对路径

## 3. 外链视频示例

如果视频已经上传到外部平台，可以直接这样写：

```md
[观看项目演示视频](https://www.bilibili.com/)
```

示例效果：

[观看项目演示视频](https://www.bilibili.com/)

## 4. 附件示例

如果要给访客提供 PDF 或 zip 下载：

```md
[下载项目文档](../assets/files/projects/doc.pdf)
```

## 5. 推荐写法模板

你以后写项目页时，媒体部分可以直接复制：

```md
## 项目截图

![项目截图](../assets/images/projects/your-project/demo.png)

## 演示视频

<video controls width="100%">
  <source src="../assets/videos/projects/your-project/demo.mp4" type="video/mp4">
</video>

## 附件

[下载项目文档](../assets/files/projects/your-project/doc.pdf)
```

## 6. 什么时候用哪种方式

- 图片：优先用 Markdown 图片语法
- 本地视频：优先用 HTML `video`
- 外链视频：优先直接放链接
- PDF / zip：用 Markdown 链接

# 历史目录整理建议

当前站点历史内容很多，建议后续按“新增优先”原则慢慢整理，不要一次性强搬旧目录。

## 推荐迁移方向

- `develop/` -> `content/projects/`
- `Open-source/` -> `content/projects/`
- `Robotics/` -> `content/study/robotics/`
- `Robot Operating System/` -> `content/study/ros/`
- `AI/` -> `content/study/ai/`
- `Programming/` -> `content/study/programming/`
- `TOOLS/` -> `content/study/tools/`
- `about/geren/`、`about/xiepm/` -> `content/about/`
- 首页精选图文 -> `content/home/`

## 不建议现在直接搬动的目录

- `about/`
- `blog/`
- `develop/`
- `Robotics/`
- `Programming/`
- `AI/`
- `Open-source/`
- `waline/`

原因：

- 这些目录已经被现有网页直接引用
- 当前仓库没有 Markdown 源文件，主要是生成后的 HTML
- 一次性移动会造成旧链接、站内跳转、搜索索引同时失效

## 最稳妥的维护方式

以后新增内容时，先放进 `content/` 对应栏目里整理好，再决定是否同步改现有页面。

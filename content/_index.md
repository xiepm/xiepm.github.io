---
title: "首页"
description: "Xpm 的个人科技实验室首页"
hero:
  kicker: "HOME"
  title: "一个持续生长的个人科技实验室"
  lead: "这里把项目实践、知识沉淀、交流入口和关于信息收进统一门户，保留三栏阅读节奏，也让后续内容维护回到 Markdown。"
  primary:
    label: "进入项目区"
    url: "/projects/"
  secondary:
    label: "进入知识区"
    url: "/study/"
  metricsLayout: "feature"
  metrics:
    - title: "交流区"
      text: "留言交流与进一步了解"
      image: "/images/portrait.jpg"
      alt: "交流区封面"
      url: "/connect/"
sections:
  - kicker: "项目区"
    title: "从卡片入口快速看我的项目与产出"
    lead: "项目区更偏向建设、实现和产出，适合先看整体能力、代表项目和开源方向。"
    cards:
      - tag: "Projects"
        title: "项目总览"
        summary: "进入项目区首页，先看整体结构、方向和代表作品。"
        cta: "查看项目区"
        url: "/projects/"
      - tag: "Featured"
        title: "设计与项目总览"
        summary: "作为项目区主入口，适合先看页面设计、视觉尝试和项目表达。"
        cta: "查看详情"
        url: "/projects/design-overview/"
      - tag: "Open Source"
        title: "开源项目推荐"
        summary: "沉淀值得长期关注的开源方向，也保留我自己的推荐标准。"
        cta: "进入页面"
        url: "/projects/open-source/"
  - kicker: "精选内容"
    title: "从这里继续看我长期沉淀下来的重点页面"
    lead: "除了项目和专题入口，也保留一些代表性、实用性和建站过程记录。"
    cards:
      - tag: "学习专题"
        title: "机器人与 ROS 2 学习路线"
        summary: "把机器人基础、ROS 2、仿真与项目实践连成一条更适合长期推进的路线。"
        cta: "继续阅读"
        url: "/study/robotics-roadmap/"
      - tag: "实用内容"
        title: "如何注册 ChatGPT"
        summary: "从常用工具切入，记录更容易被实际用到的内容。"
        cta: "查看内容"
        url: "/projects/chatgpt/"
      - tag: "项目实践"
        title: "OpenCV 实践"
        summary: "把图像处理、视觉实验和应用小项目集中整理，方便继续扩展。"
        cta: "进入页面"
        url: "/projects/opencv/"
  - kicker: "知识区"
    title: "把学习路线、专题入口和笔记沉淀收进同一层结构"
    lead: "知识区不再把所有分类都挤进顶栏，而是通过专题卡片整理成清晰入口。"
    cards:
      - tag: "Robotics"
        title: "机器人"
        summary: "机器人学相关路线、主题和后续积累入口。"
        cta: "进入专题"
        url: "/study/robotics/"
      - tag: "ROS"
        title: "ROS"
        summary: "围绕 ROS / ROS 2 的系统学习、实践记录和路线整理。"
        cta: "进入专题"
        url: "/study/ros/"
      - tag: "Study"
        title: "知识区总览"
        summary: "如果想先看全部学习分类和推荐先读内容，可以从这里开始。"
        cta: "查看总览"
        url: "/study/"
  - kicker: "交流与关于"
    title: "给交流、站点说明和个人介绍留下稳定入口"
    lead: "交流页负责留言和友链入口，关于页负责个人定位、站点定位和维护方式。"
    cards:
      - tag: "Connect"
        title: "交流页"
        summary: "留言板入口、友链交流和互动说明都从这里进入。"
        cta: "进入交流"
        url: "/connect/"
      - tag: "About"
        title: "关于页"
        summary: "集中了解 Xpm、网站定位和维护方式。"
        cta: "进入关于"
        url: "/about/"
      - tag: "Workflow"
        title: "上传说明"
        summary: "后续新增文字、图片、视频和附件时，可以直接对照这份说明维护。"
        cta: "查看说明"
        url: "/about/upload-guide/"
---

## 首页现在承担什么

首页负责三件事：

1. 先说明这个站点的核心定位。
2. 用卡片把项目区、知识区和交流入口分流清楚。
3. 保留一些值得反复回看的重点页面。

## 后续怎么维护首页

以后如果你要更新首页，不需要去手改生成后的 HTML。你只需要修改这份 Markdown 里的：

- `hero`：首页顶部说明和主按钮
- `sections`：项目区、知识区、精选内容、交流与关于卡片
- 正文说明：放一些首页用途和维护提示

然后重新运行 Hugo 构建，首页内容就会同步变化。

---
title: "学习"
description: "知识区总览"
hero:
  kicker: "STUDY"
  title: "学习区"
  lead: "把技术知识、学习路线、工具总结和专题文章收进统一入口，让访问者先理解我在学什么、我会写什么、我推荐什么。"
  primary:
    label: "进入学习区总览"
    url: "/study/"
  secondary:
    label: "代表文章"
    url: "/study/robotics-roadmap/"
  metrics:
    - title: "知识"
      text: "学习整理"
    - title: "效率"
      text: "高效精力时间管理"
    - title: "唠唠嗑"
      text: "时代的痕迹"
sections:
  - kicker: "学习地图"
    title: "技术分类不再挤在顶栏里，而是收进这里"
    lead: "知识区首页负责整理主题、学习路线和推荐先读内容，让知识区入口更稳定。"
    cards:
      - tag: "Theory"
        title: "控制理论"
        summary: "偏基础与系统性学习的技术方向。"
        cta: "查看路线"
        url: "/study/control-theory/"
      - tag: "Robotics"
        title: "机器人"
        summary: "从机器人概念到应用方向的专题入口。"
        cta: "进入专题"
        url: "/study/robotics/"
      - tag: "ROS"
        title: "ROS"
        summary: "围绕 ROS / ROS 2 的系统学习和长期整理。"
        cta: "进入专题"
        url: "/study/ros/"
      - tag: "System"
        title: "Linux"
        summary: "开发环境、命令行和系统使用的长期积累。"
        cta: "进入专题"
        url: "/study/linux/"
      - tag: "Embedded"
        title: "嵌入式"
        summary: "贴近硬件与工程实践的学习方向。"
        cta: "进入专题"
        url: "/study/embedded/"
      - tag: "Programming"
        title: "编程"
        summary: "语言、工程能力和开发经验的持续积累。"
        cta: "进入专题"
        url: "/study/programming/"
      - tag: "AI"
        title: "AI"
        summary: "结合工具、应用和学习计划的人工智能内容。"
        cta: "进入专题"
        url: "/study/ai/"
      - tag: "Tools"
        title: "工具箱"
        summary: "开发软件、效率工具和环境配置的整理入口。"
        cta: "进入专题"
        url: "/study/tools/"
      - tag: "Resources"
        title: "资源推荐"
        summary: "把有用、好玩和值得收藏的内容集中推荐。"
        cta: "去阅读"
        url: "/study/resources/"
  - kicker: "学习建议"
    title: "如果第一次进入知识区，可以按这个顺序看"
    cards:
      - tag: "Start"
        title: "先看知识区总览"
        summary: "先了解这个站把学习内容分成了哪些方向，以及每一块分别放什么。"
        cta: "查看总览"
        url: "/study/"
      - tag: "Route"
        title: "再看机器人与 ROS 2 路线"
        summary: "这类内容最能体现学习路线、专题整理和后续项目实践之间的联系。"
        cta: "进入文章"
        url: "/study/robotics-roadmap/"
      - tag: "Support"
        title: "最后补编程与工具箱"
        summary: "编程和工具箱更像支撑层，适合放长期会反复用到的内容。"
        cta: "查看工具箱"
        url: "/study/tools/"
---

## 知识区的内容逻辑

知识区首页负责三类事情：

- 把分散的学习分类整理成统一入口
- 告诉访问者我在学什么、推荐先看什么
- 为后续专题页迁进 Hugo 提供稳定导航

## 后续迁移建议

后面可以继续把这些旧专题逐步迁进 Hugo：

- `/Control-Theory/learning-plan/`
- `/LINUX/learning-plan/`
- `/Embedded development/learning-plan/`
- `/blog/Webplay/`

这样知识区就能逐步从“主题地图”变成“真正可维护的学习内容集合”。

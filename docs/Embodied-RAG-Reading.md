论文：Embodied-RAG: General Non-parametric Embodied Memory for Retrieval and Generation
连接 https://arxiv.org/pdf/2409.18313?
1. Premapping阶段（环境预映射）
- 目的：构建环境的基础数据
- 具体操作：
  * 使用配备三个前置摄像头的机器人（根据Caption Prompt中提到的"You are a robot equipped with three front cameras"）
  * 收集环境中的自我中心视觉感知数据
  * 记录里程计数据（根据原文"egocentric visual perception and odometry"）
- 注意：上述流程是由人类操作机器人完成未知环境的扫描，见参考图片，有一个研究人员在操作机器狗，此事项在论文中没有提及

2. Memory Construction阶段（记忆构建）
- 构建拓扑图：
  * 创建包含以下信息的节点：
    - 外部坐标(allocentric coordinates)
    - 偏航角度(yaw)
    - 自我中心图像路径(ego-centric image paths)
    - 由视觉语言模型生成的描述(captions)
- 构建语义森林：
  * 对节点进行聚类
  * 使用LLM为非叶节点生成子节点摘要

3. Retrieval系统训练
- 实现基于BFS的森林遍历
- 训练LLM引导的选择机制
- 优化多尺度上下文路径的提取

4. Generation系统训练
- 训练处理三类查询的能力：
  * 显式查询(explicit)
  * 隐式查询(implicit)
  * 全局查询(global)
- 训练两种输出生成：
  * 导航动作
  * 语言描述

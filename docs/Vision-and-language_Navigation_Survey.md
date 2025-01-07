## VLN数据集

**Room-to-Room (R2R)** ：最早离散数据集
论文：Vision-and-Language Navigation: Interpreting visually-grounded navigation instructions in real environments

连接：https://github.com/peteanderson80/Matterport3DSimulator/tree/master/tasks/R2R

模拟器：MP3d

**Room-Across-Room (RxR) Dataset**

- 比 R2R 更详细的指令描述
- 包含密集的时空定位信息
- 指令更加细致和具体
- 路径长度约为 R2R 的2 倍
- 真实路径不限于最短路径
- 多语言指令

论文 [Room-Across-Room: Multilingual Vision-and-Language Navigation with Dense Spatiotemporal Grounding](https://arxiv.org/abs/2010.07954)

连接：https://github.com/google-research-datasets/RxR

模拟器：MP3d

**R4R**

- 通过连接 R2R 中的两条最短路径创建
- 提供更长、更复杂的导航任务
- 强调路径依赖性的重要性
- 更适合测试智能体的长程导航能力

论文：Stay on the Path: Instruction Fidelity in Vision-and-Language Navigation

连接：https://github.com/google-research/google-research/tree/master/r4r

模拟器：MP3D

**VLN-CE**

R2R数据集的连续导航环境版本。由于某些 R2R 路径在连续环境中无法准确重现，VLN-CE 包含的指令-路径对数量略少于 R2R 。VLN-CE 通常包含约 16,000 条指令-路径对，而原始 R2R 包含 21,567 条。

评估指标一致，无差别。

R2R （MP3D环境提供）提供 360 度全景图像，而 VLN-CE （Habitat环境提供）提供更接近真实机器人视角的有限视野图像。实际上个人认为无特别大的差别，机器人旋转就一条指令的事。

运行模拟器：Habitat

论文：Beyond the Nav-Graph: Vision-and-Language Navigation in Continuous Environments

连接：https://jacobkrantz.github.io/vlnce/

## 模拟器

### Matterport 3D simulator

提供了 90 个真实世界的建筑规模室内环境，包括 10,800 个密集采样的全景 RGB-D 图像。 Matterport3D 使用离散的导航图。Room-to-Room (R2R)任务/数据集提供提出的运行环境

论文：Vision-and-Language Navigation: Interpreting visually-grounded navigation instructions in real environments

连接：https://github.com/peteanderson80/Matterport3DSimulator/tree/master?tab=readme-ov-file

### Habitat

连续空间导航，允许代理执行基本动作如前进或旋转，

场景数据为：

```text
[MatterPort3D](https://github.com/facebookresearch/habitat-sim/blob/main/DATASETS.md#matterport3d-mp3d-dataset)（一般VLN任务使用）`data/scene_datasets/mp3d/{scene}/{scene}.glb`15 GB
```

任务数据为（路径标注）：
```text
Visual Language Navigation	MatterPort3D	vln_r2r_mp3d_v1.zip	data/datasets/vln/mp3d/r2r/v1
```

论文：Habitat: A Platform for Embodied AI Research

连接：https://aihabitat.org/

## 其他与VLN任务相近数据集

### SOON(数据集)

Scenario Oriented Object Navigation即场景导向导航任务，要求智能体从地图上的任意一点导航到指定的位置/物体前

数据集：SOON（这个任务提出的基准FAO数据集）数据集

模拟器：MP3D，环境贴图mp3d scan（与r2r一致）

连接：https://scenario-oriented-object-navigation.github.io/

### REVERIE(数据集)

REVERIE: Remote Embodied Visual Referring Expression in Real Indoor Environments

简洁指令，机器人需要先导航到指定位置再寻找物体，其中与r2r指令不一样的是r2r是详细指令，这个是简略指令，并且这个要求寻找某个物体，类似vqa任务加上导航任务。

连接：https://github.com/YuankaiQi/REVERIE

模拟器：同上

## VLN 方法

### 预训练模型 (Pretrained Models):

- **PREVALENT (Pretrained Vision and Language-based Navigator):** 使用图像-语言-动作三元组进行预训练，并在R2R任务上进行微调。[Towards Learning a Generic Agent for Vision-and-Language Navigation via Pre-training]

- **VLN-BERT:** 使用大规模网络抓取资源或多模态BERT模型进行预训练。[Improving Vision-and-Language Navigation with Image-Text Pairs from the Web]

- **ORIST (Object- and Room-Informed Sequential BERT):** 通过在相同的细粒度级别（即对象和单词）编码视觉和指令输入来提高模型的语言基础性能。[The Road to Know-Where: An Object-and-Room Informed Sequential BERT for Indoor Vision-Language Navigatio]

- **Airbert:** 用了爱彼迎的数据，直接使用其权重即可

  [Airbert: In-domain Pretraining for Vision-and-Language Navigation]

  

### 数据增强

- **Speaker-Follower:** 提出了一种用于执行数据增强和推理的说话者-跟随者框架。[Speaker-Follower Models for Vision-and-Language Navigation]
- **FGR2R (Fine-Grained R2R):** 通过将子指令与路径中相应的视点配对，为agent提供足够的语义信息。[Sub-Instruction Aware Vision-and-Language Navigation]
- **Counterfactual Instances:** 生成不依赖于手工规则的反事实实例，以提高模型的泛化能力。[Counterfactual Vision-and-Language Navigation: Unravelling the Unseen]
- **REM (Random Environmental Mixup):** 通过分解和重组环境和相应的路径来构建全新的环境作为训练数据。[Vision-Language Navigation with Random Environmental Mixup]
- 其他相关论文：[Multi-Modal Discriminative Model for Vision-and-Language Navigation], [Visual Landmark Selection for Generating Grounded and Interpretable Navigation Instructions], [Take the Scenic Route: Improving Generalization in Vision-and-Language Navigation], [Neighbor-view Enhanced Model for Vision and Language Navigation]

### 策略改进

- **Self-Monitoring:** 通过辅助进度估计进行自我监控导航。[Self-Monitoring Navigation Agent via Auxiliary Progress Estimation]

- **Regretful Agent:** 利用后悔机制和进度标记模块辅助agent判断下一步方向。[The Regretful Agent: Heuristic-Aided Navigation through Progress Estimation]

- **FAST (Frontier-Aware Search with Backtracking):** 使用异步搜索进行回溯，当agent迷路时可以明确地原路返回。[Tactical Rewind: Self-Correction via Backtracking in Vision-and-Language Navigation]

- **EGP (Evolving Graphical Planner):** 使用原始图像高效地生成全局导航计划，动态构建图形表示并泛化动作空间。[Evolving Graphical Planner: Contextual Global Planning for Vision-and-Language Navigation]

  **图结构**

- **Active Exploration:** 学习一个探索策略，使agent能够智能地与环境交互，并在面对模糊指令或不自信的导航决策时主动收集信息。[Active Visual Information Gathering for Vision-Language Navigation]

  **图结构** 注意会与下面的有些条目重复

- **SSM (Structured Scene Memory):** 提出结构化场景记忆，允许agent访问其过去的感知并探索环境布局，进行长期推理和全局决策。[Structured Scene Memory for Vision-Language Navigation]

​	**图结构 **注意会与下面的有些条目重复

- **DUET (Dual-scale Graph Transformer):** 使用图transformer对粗尺度地图表示进行长期动作规划，并对细尺度局部表示进行细粒度语言基础。[Think Global, Act Local: Dual-Scale Graph Transformer for Vision-and-Language Navigation]

  **图结构** 注意会与下面的有些条目重复

- 其他相关论文：[Look Before You Leap: Bridging Model-Free and Model-Based Reinforcement Learning for Planned-Ahead Vision-and-Language Navigation], [Transferable Representation Learning in Vision-and-Language Navigation], [Vision-Language Navigation with Self-Supervised Auxiliary Reasoning Tasks], [Depth-guided AdaIN and Shift Attention Network for Vision-and-Language Navigation], [History Aware Multimodal Transformer for Vision-and-Language Navigation]

### 基于图的方法 (Graph-based methods)

- **EGP (Evolving Graphical Planner):** 该方法动态地从原始图像构建图表示，用于全局导航规划。[Deng et al., 2020. Evolving Graphical Planner: Contextual Global Planning for Vision-and-Language Navigation.]
- **SOON (Scenario Oriented Object Navigation)中的模型:** 将导航过程建模为图，以便agent获得对观察信息的全面和结构化的理解。[Zhu et al., 2021. SOON: Scenario Oriented Object Navigation with Graph-Based Exploration.]
- **Visual Semantic Navigation using Scene Priors:** 使用图卷积网络 (GCN) 将先验知识融入到深度强化学习框架中，agent的知识被编码为图。[Yang et al., 2019. Visual Semantic Navigation using Scene Priors.]
- **DUET (Dual-scale Graph Transformer):** 该方法构建拓扑地图，并使用图transformer进行全局动作规划和细粒度语言定位。[Chen et al., 2022. Think Global, Act Local: Dual-Scale Graph Transformer for Vision-and-Language Navigation.]
- **Topological Planning with Transformers:** 使用拓扑地图和transformer进行规划和控制，将VLN-CE任务分解为规划和控制两个阶段。[Chen et al., 2021. Topological Planning with Transformers for Vision-and-Language Navigation.]

### 非基于图的方法 (Non-graph-based methods)

论文中提到的绝大多数方法都属于非基于图的方法，它们通常直接使用深度学习模型（例如Seq2Seq模型、Transformer模型）来处理视觉和语言输入，并预测导航动作。这些方法不显式地构建环境的图表示。以下列举一些代表性方法：

- **Seq2Seq Model (Speaker-Follower):** 这是R2R任务的提出者的baseline，使用编码器-解码器架构将指令转换为动作序列。[Anderson et al., 2018. Vision-and-Language Navigation: Interpreting Visually-Grounded Navigation Instructions in Real Environments.] [Fried et al., 2018. Speaker-Follower Models for Vision-and-Language Navigation.]
- **Reinforced Cross-Modal Matching (RCM):** 使用强化学习来训练agent，并通过跨模态匹配来对齐视觉和语言信息。[Wang et al., 2019. Reinforced Cross-Modal Matching and Self-Supervised Imitation Learning for Vision-Language Navigation.]
- **Self-Monitoring Agent:** 通过辅助进度估计进行自我监控。[Ma et al., 2019. Self-Monitoring Navigation Agent via Auxiliary Progress Estimation.]
- **Regretful Agent:** 结合了后悔机制来改进导航策略。[Ma et al., 2019. The Regretful Agent: Heuristic-Aided Navigation through Progress Estimation.]
- **FAST (Frontier-Aware Search with Backtracking):** 虽然使用了搜索，但并非基于预先构建的图，而是在导航过程中动态进行搜索。[Ke et al., 2019. Tactical Rewind: Self-Correction via Backtracking in Vision-and-Language Navigation.]
- **PTA (Perceive, Transform, and Act):** 使用多模态注意力机制来处理视觉和语言信息。[Landi et al., 2019. Perceive, Transform, and Act: Multi-Modal Attention Networks for Vision-and-Language Navigation.]
- **PREVALENT (Pretrained Vision and Language-based Navigator):** 使用预训练的视觉-语言模型来提高导航性能。[Hao et al., 2020. Towards Learning a Generic Agent for Vision-and-Language Navigation via Pre-training.]
- **VLN-BERT/VLN BERT:** 基于预训练的BERT模型进行视觉-语言导航。[Majumdar et al., 2020. Improving Vision-and-Language Navigation with Image-Text Pairs from the Web.] [Hong et al., 2021. VLN BERT: A Recurrent Vision-and-Language BERT for Navigation.]

### 关于VLN的三种设置

1. **单次运行 (Single Run):** 这是最普遍和最能反映agent真实性能的设置。Agent从起始点开始，根据给定的指令进行导航，只有一次机会到达目标位置。最终使用成功率 (Success Rate, SR)、路径长度 (Path Length, PL)、SPL (Success weighted by Path Length) 等指标来评估agent的性能。
2. **预探索 (Pre-Exploration):** 在这种设置下，允许agent在正式导航之前先探索测试环境。Agent可以自由移动并收集环境信息，然后更新其模型或内部表示。预探索结束后，agent从起始点开始，根据指令进行导航。这种设置可以帮助agent更好地理解环境布局，并提高导航性能，尤其是在未见过的环境中。主要评估指标也是 SPL。
3. **束搜索 (Beam Search):** Agent在环境中导航，并维护多个可能的路径（beam）。在每个步骤中，agent会根据当前状态和指令，扩展beam中的路径，并保留得分最高的几个路径。最终，agent选择得分最高的路径作为最终预测。这种设置通常可以提高agent的成功率 (SR)，但会增加计算成本。主要评估指标是 SR。

**其中三种设置对应方法表见附录**

## 附录

### 任务数据集对应表

| Task Type                 | Task Name                      | Simulator          | Scene Type |
| ------------------------- | ------------------------------ | ------------------ | ---------- |
| Single-Turn Goal-Oriented | LANI                           | ALFRED             | AI2-THOR M |
|                           | Talk to Car                    | -                  | Outdoor M  |
|                           | XWORLD                         | -                  | -          |
|                           | 3D Doom                        | VizDoom            | -          |
|                           | Visual Semantic Navigation     | AI2-THOR           | -          |
|                           | SOON                           | Matterport3D       | L          |
|                           | EQA                            | House3D            | Q          |
|                           | RoomNav                        | House3D            | -          |
|                           | REVERIE                        | Matterport3D       | L          |
|                           | Behavioral Robot Navigation    | -                  | -          |
|                           | Navigation Task Based on SUNCG | -                  | -          |
|                           | Route-Oriented Room-to-Room    | Matterport3D       | -          |
|                           | Room-for-Room                  | Matterport3D       | -          |
|                           | Room-Cross-Room                | Matterport3D       | -          |
|                           | R6R, R8R                       | Matterport3D       | -          |
|                           | Room-to-Room-CE                | Matterport3D       | -          |
|                           | Cross-Lingual Room-to-Room     | Matterport3D       | -          |
|                           | TouchDown                      | Google Street View | Outdoor L  |
|                           | RUN                            | -                  | Outdoor    |
|                           | Street Nav                     | Google Street View | Outdoor    |
|                           | StreetLearn                    | Google Street View | Outdoor    |
|                           | ARRAMON                        | -                  | Outdoor M  |
| Multiturn Passive         | CEREALBAR                      | -                  | -          |
|                           | VLNA                           | Matterport3D       | -          |
|                           | HANNA                          | Matterport3D       | -          |
| Multiturn Interactive     | CVDN                           | Matterport3D       | -          |
|                           | Just Ask                       | Matterport3D       | -          |
|                           | Talk The Walk                  | -                  | Outdoor    |
|                           | RobotSlang                     | Physical           | -          |

#### 方法附录表

| 方法                 | Single Run | Pre-exploration | Beam Search |
| -------------------- | ---------- | --------------- | ----------- |
| Random               | ✔          |                 |             |
| Seq-to-Seq           | ✔          |                 |             |
| Look Before You Leap | ✔          |                 |             |
| Speaker-Follower     | ✔          |                 | ✔           |
| Chasing Ghosts       | ✔          |                 |             |
| Self-Monitoring      | ✔          |                 | ✔           |
| PTA                  | ✔          |                 |             |
| RCM                  | ✔          | ✔               | ✔           |
| Regretful Agent      | ✔          |                 | ✔           |
| FAST                 | ✔          |                 | ✔           |
| EGP                  | ✔          |                 |             |
| ALTR                 | ✔          |                 |             |
| Env-Drop             | ✔          | ✔               | ✔           |
| SERL                 | ✔          |                 |             |
| OAAM                 | ✔          |                 |             |
| CMG-AAL              | ✔          |                 |             |
| AuxRN                | ✔          | ✔               | ✔           |
| DASA                 | ✔          |                 |             |
| RelGraph             | ✔          |                 |             |
| ORIST                | ✔          |                 |             |
| PRESS                | ✔          |                 |             |
| PREVALENT            | ✔          |                 |             |
| NvEM                 | ✔          |                 |             |
| SSM                  | ✔          |                 |             |
| VLN-BERT             | ✔          |                 |             |
| Active Exploration   | ✔          | ✔               | ✔           |
| REM                  | ✔          |                 |             |
| HAMT                 | ✔          |                 | ✔           |
| Airbert              |            |                 |             |
| DUET                 | ✔          |                 |             |
| Human                | ✔          |                 |             |

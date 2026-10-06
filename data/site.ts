export const publications = [
  {
    slug: "dga2d",
    number: "01",
    shortTitle: "DGA₂D",
    title:
      "DGA₂D: Directed Graph-Guided Automated Algorithm Design with Large Language Models",
    category: "Automated algorithm design",
    year: "2026",
    authors: "Jiale Zhao, Zimu Chen, Sirui Mao, Wentao Yang, Yuxiang Bai, Liyuanjun Lai",
    summary:
      "DGA₂D turns open-ended algorithm design into a directed graph search, allowing language models to evolve both solver structure and reusable code operators.",
    abstract:
      "The rapid development of large language models has opened new avenues for automated heuristic design for NP-hard combinatorial optimization problems. Existing methods, however, are largely confined to rigid solver templates and isolated module tuning. DGA₂D structures the open-ended program space as a directed graph: nodes represent functional operators with multiple candidate implementations, while directed walks form complete algorithmic pipelines. A path-dependent credit mechanism evaluates code variations in their topological context. Across twelve combinatorial optimization problems, the framework consistently improves over strong LLM-based baselines and enables reliable system-level algorithm design.",
    arxiv: "https://arxiv.org/abs/2608.00700",
    code: "https://github.com/BeihangAILab/DGA2D",
    art: "graph" as const,
    accent: "coral" as const,
    stats: [
      ["12", "optimization problems"],
      ["10.96", "gap points improved"],
      ["2", "co-evolved design levels"],
    ],
  },
  {
    slug: "just-initialize",
    number: "02",
    shortTitle: "Just Initialize",
    title:
      "Just Initialize: A Training-Free Initialization Component for Large-Scale Routing Optimization",
    category: "Large-scale routing",
    year: "2026",
    authors:
      "Jiale Zhao, Sirui Mao, Zimu Chen, Wentao Yang, Zihan Wang, Xuefeng Huang, Junji Cheng, Liyuanjun Lai",
    summary:
      "A training-free, solver-agnostic component that compresses large routing instances, finds their global structure, and returns refinement-friendly starting solutions.",
    abstract:
      "Large-scale routing problems become difficult as their search spaces grow rapidly with problem size. Instead of making the downstream optimizer increasingly expensive, Just Initialize focuses on producing a useful starting point. It compresses a large routing instance into a compact surrogate space, optimizes the global routing structure there, then recovers an optimization-friendly solution in the original space. The method is training-free and solver-agnostic, and works across TSP, CVRP, VRPTW, and PCTSP instances ranging from one thousand to one hundred thousand nodes.",
    arxiv: "https://arxiv.org/abs/2609.35443",
    art: "route" as const,
    accent: "lime" as const,
    stats: [
      ["70×", "average speedup"],
      ["100K", "nodes tested"],
      ["0", "training required"],
    ],
  },
] as const;

export type Publication = (typeof publications)[number];

export const coreMembers = {
  lead: { name: "Jiale Zhao", role: "Lead" },
  coauthors: [
    { name: "Sirui Mao", role: "Co-author" },
    { name: "Zimu Chen", role: "Co-author" },
    { name: "Wentao Yang", role: "Co-author" },
  ],
};

export const participants = [
  "Quanxi Zhou",
  "Chunjing Qi",
  "Zihan Wang",
  "Xuefeng Huang",
  "Junji Chen",
  "Shuotong Gao",
  "Zian Chen",
];

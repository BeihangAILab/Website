export const researchAreas = [
  {
    index: "01",
    title: "Reinforcement Learning",
    text: "Agents that learn efficiently, reason over long horizons, and improve through interaction with complex environments.",
    tags: ["RL", "Agents", "Decision Making"],
  },
  {
    index: "02",
    title: "Foundation Models & Alignment",
    text: "Post-training, alignment, reasoning, and reliable adaptation for increasingly capable foundation models.",
    tags: ["LLM", "Alignment", "Post-training"],
  },
  {
    index: "03",
    title: "Embodied Intelligence",
    text: "World models and embodied agents that connect perception, memory, planning, and action in the physical world.",
    tags: ["Embodied AI", "World Models", "Planning"],
  },
  {
    index: "04",
    title: "Combinatorial Optimization",
    text: "Learning-based and training-free methods for large-scale routing and other structured optimization problems.",
    tags: ["Routing", "Optimization", "Neural CO"],
  },
];

export const works = [
  {
    eyebrow: "AUTOMATED ALGORITHM DESIGN",
    title: "DG2AD",
    description:
      "Directed graph-guided automated algorithm design with large language models, targeting modular and evolvable optimization procedures.",
    href: "https://github.com/BeihangAILab/DG2AD",
    cta: "Code & project",
    code: "DG2AD",
    meta: "Open-source research project",
    status: "PUBLIC",
  },
  {
    eyebrow: "LARGE-SCALE ROUTING",
    title: "Just Initialize",
    description:
      "A training-free component for large-scale routing optimization that discovers refinement-friendly initializations before downstream solving.",
    href: "#contact",
    cta: "Project page soon",
    code: "JI",
    meta: "TSP · CVRP · VRPTW",
    status: "RESEARCH",
  },
];

export const news = [
  {
    date: "2026.10",
    text: "Beihang AI Lab launches a new public home for our research, code, and collaborations.",
  },
  {
    date: "2026.09",
    text: "Just Initialize is released as a training-free framework for large-scale routing optimization.",
  },
  {
    date: "2026.08",
    text: "DG2AD source code is released publicly through the BeihangAILab GitHub organization.",
  },
];

export const principles = [
  ["01", "Simple ideas", "We prefer clear mechanisms over unnecessary complexity."],
  ["02", "Strong evidence", "We value careful experiments, reproducibility, and honest analysis."],
  ["03", "Systems that scale", "We care about methods that remain useful as models, data, and problem sizes grow."],
];

export interface SlideMeta {
  id: number;
  title: string;
  subtitle?: string;
  section: string;
  part: string;
}

export const slidesMeta: SlideMeta[] = [
  {
    id: 1,
    title: "BlackVIP: Black-Box Visual Prompting for Robust Transfer Learning",
    subtitle: "CVPR 2023 Research Presentation",
    section: "Title",
    part: "Overview",
  },
  {
    id: 2,
    title: "Research Motivation & Transfer Learning",
    subtitle: "Adapting Foundation Vision Models to Downstream Tasks",
    section: "Background & Motivation",
    part: "Part 1",
  },
  {
    id: 3,
    title: "Adversarial Reprogramming vs Visual Prompting",
    subtitle: "Input-Side Repurposing vs Task In-Context Learning",
    section: "Background & Motivation",
    part: "Part 1",
  },
  {
    id: 4,
    title: "Black-Box Visual Prompting: Problem Formulation",
    subtitle: "Transfer Learning Under Parameter & Gradient Restrictions",
    section: "Problem Formulation",
    part: "Part 1",
  },
  {
    id: 5,
    title: "BlackVIP: Overall Architecture",
    subtitle: "End-to-End Pipeline for Gradient-Free Visual Prompting",
    section: "BlackVIP Architecture",
    part: "Part 2",
  },
  {
    id: 6,
    title: "Coordinator: Prompt Reparameterization",
    subtitle: "Overcoming High-Dimensional Pixel Space via Latent Decoding",
    section: "BlackVIP Architecture",
    part: "Part 2",
  },
  {
    id: 7,
    title: "Trigger Vector & Visual Prompt Generation",
    subtitle: "Combining Image Features with Task-Specific Prompts",
    section: "BlackVIP Architecture",
    part: "Part 2",
  },
  {
    id: 8,
    title: "Zeroth-Order Optimization (ZOO)",
    subtitle: "First-Order Backprop vs Zeroth-Order Loss Evaluations",
    section: "Zeroth-Order Optimization",
    part: "Part 3",
  },
  {
    id: 9,
    title: "SPSA: Basic Concept and Perturbation",
    subtitle: "Simultaneous Perturbation Stochastic Approximation",
    section: "SPSA Optimization",
    part: "Part 3",
  },
  {
    id: 10,
    title: "SPSA: Gradient Estimation & Parameter Update",
    subtitle: "Two Loss Queries for Arbitrary Parameter Dimension",
    section: "SPSA Optimization",
    part: "Part 3",
  },
  {
    id: 11,
    title: "Limitations of Standard SPSA",
    subtitle: "Stochastic Noise and Gradient Variance in High Dimensions",
    section: "Algorithm Analysis",
    part: "Part 4",
  },
  {
    id: 12,
    title: "Nesterov's Accelerated Gradient (NAG)",
    subtitle: "Look-Ahead Momentum and Vector Correction",
    section: "Gradient Correction",
    part: "Part 4",
  },
  {
    id: 13,
    title: "SPSA with Gradient Correction (SPSA-GC)",
    subtitle: "NAG-Inspired Look-Ahead & Momentum-Corrected Estimation",
    section: "SPSA-GC Algorithm",
    part: "Part 4",
  },
  {
    id: 14,
    title: "Experimental Setup",
    subtitle: "Datasets, Foundation Models, Baselines, and Protocol",
    section: "Experiments & Evaluation",
    part: "Part 5",
  },
  {
    id: 15,
    title: "Results on Synthetic Datasets",
    subtitle: "Biased-MNIST and Loc-MNIST: Invariance to Spurious Correlations",
    section: "Experiments & Evaluation",
    part: "Part 5",
  },
  {
    id: 16,
    title: "Optimization Algorithm Comparison",
    subtitle: "SPSA-GC Convergence vs SPSA, RDSA, and ZO-SGD",
    section: "Experiments & Evaluation",
    part: "Part 5",
  },
  {
    id: 17,
    title: "Robustness & Few-Shot Transfer Learning",
    subtitle: "Out-of-Distribution Generalization & Low-Resource Adaptation",
    section: "Experiments & Evaluation",
    part: "Part 5",
  },
  {
    id: 18,
    title: "Ablation Study",
    subtitle: "Coordinator Designs, Trigger Vector Sizing, and Component Roles",
    section: "Ablation Analysis",
    part: "Part 5",
  },
  {
    id: 19,
    title: "Conclusion & Key Takeaways",
    subtitle: "Summary of Contributions, Impact, and Future Outlook",
    section: "Conclusion",
    part: "Part 6",
  },
];


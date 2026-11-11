export interface PaperFigureConfig {
  id: string;
  title: string;
  src: string | null;
  caption: string;
  source: string;
  aspectRatio: string;
  keyTakeaway: string;
}

export const paperFigures: Record<string, PaperFigureConfig> = {
  architecture: {
    id: "fig-architecture",
    title: "BlackVIP Overall Architecture",
    src: null,
    caption: "Figure 1 from paper: Overall framework of BlackVIP showing the input image, Coordinator, Visual Prompt generation, frozen target vision model, and SPSA-GC gradient-free optimization loop.",
    source: "CVPR 2023 BlackVIP Paper — Figure 1",
    aspectRatio: "16 / 9",
    keyTakeaway: "Decouples task-specific trigger vector from frozen backbone using a lightweight learnable decoder.",
  },
  syntheticResults: {
    id: "fig-synthetic",
    title: "Performance on Biased-MNIST and Loc-MNIST",
    src: null,
    caption: "Figure 3 from paper: Accuracy and robustness curves across increasing spurious correlation bias and location perturbations.",
    source: "CVPR 2023 BlackVIP Paper — Figure 3 & Table 1",
    aspectRatio: "16 / 9",
    keyTakeaway: "BlackVIP retains high classification accuracy even under 99% biased training conditions.",
  },
  optimizationComparison: {
    id: "fig-optimization",
    title: "Loss Convergence of ZOO Algorithms",
    src: null,
    caption: "Figure 4 from paper: Training loss convergence curves comparing SPSA-GC against standard SPSA, RDSA, and ZO-SGD across downstream benchmarks.",
    source: "CVPR 2023 BlackVIP Paper — Figure 4",
    aspectRatio: "16 / 9",
    keyTakeaway: "SPSA-GC achieves significantly faster convergence and lower terminal loss variance.",
  },
  robustnessShift: {
    id: "fig-robustness",
    title: "Distribution Shift & Few-Shot Generalization",
    src: null,
    caption: "Table 2 & Figure 5 from paper: Clean vs corrupted/shifted test set performance and few-shot (1-shot, 5-shot, 10-shot) accuracy.",
    source: "CVPR 2023 BlackVIP Paper — Table 2 & Figure 5",
    aspectRatio: "16 / 9",
    keyTakeaway: "BlackVIP demonstrates superior OOD robustness compared to linear probing and full fine-tuning.",
  },
  ablationStudy: {
    id: "fig-ablation",
    title: "Ablation on Coordinator Components",
    src: null,
    caption: "Table 3 from paper: Impact of Coordinator depth, frozen SSL encoder choice (DINO vs MAE), and trigger vector dimensions.",
    source: "CVPR 2023 BlackVIP Paper — Table 3",
    aspectRatio: "16 / 9",
    keyTakeaway: "Both the image representation and the learnable trigger vector are crucial for optimal prompt generation.",
  },
};


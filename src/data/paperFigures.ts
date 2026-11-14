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
    caption: "Figure 2: Input-dependent Coordinator (frozen MAE encoder + lightweight decoder) and SPSA-GC optimization.",
    source: "CVPR 2023 BlackVIP — Figure 2",
    aspectRatio: "16 / 9",
    keyTakeaway: "Reparameterizes pixel prompts into 9K learnable parameters.",
  },
  syntheticResults: {
    id: "fig-synthetic",
    title: "Biased-MNIST & Loc-MNIST Results",
    src: null,
    caption: "Table 2, Figure 4 & Figure 5: Accuracy, prompt visualizations, and t-SNE embeddings under color bias and location shifts.",
    source: "CVPR 2023 BlackVIP — Table 2, Fig. 4 & Fig. 5",
    aspectRatio: "16 / 9",
    keyTakeaway: "BlackVIP outperforms even white-box VP under strong color bias (ρ = 0.9).",
  },
  optimizationComparison: {
    id: "fig-optimization",
    title: "100D Rosenbrock & Query Efficiency",
    src: null,
    caption: "Figure 3 & Figure 7: Loss convergence & Gaussian noise sensitivity on 100D Rosenbrock (Fig. 3), plus API query cost (Fig. 7).",
    source: "CVPR 2023 BlackVIP — Figure 3 & Figure 7",
    aspectRatio: "16 / 9",
    keyTakeaway: "SPSA-GC matches true-gradient SGD-NAG stability and doubles ZS accuracy in 10K queries (~$12).",
  },
  robustnessShift: {
    id: "fig-robustness",
    title: "14-Benchmark Transfer & Efficiency",
    src: null,
    caption: "Table 3, Table 4 & Figure 6: 16-shot accuracy across 14 datasets, peak memory/params, and Grad-CAM attention.",
    source: "CVPR 2023 BlackVIP — Table 3, Table 4 & Fig. 6",
    aspectRatio: "16 / 9",
    keyTakeaway: "64.0% avg accuracy (wins 13/14 vs ZS) using only 9K parameters.",
  },
  ablationStudy: {
    id: "fig-ablation",
    title: "Backbone & Coordinator Ablations",
    src: null,
    caption: "Table 5 & Table 6: EuroSAT accuracy across target backbones (RN50–ViT-B/16) and Coordinator pre-training × SPSA variants.",
    source: "CVPR 2023 BlackVIP — Table 5 & Table 6",
    aspectRatio: "16 / 9",
    keyTakeaway: "SSL MAE encoder + SPSA-GC reaches 73.1% (+3.7% over standard SPSA).",
  },
};

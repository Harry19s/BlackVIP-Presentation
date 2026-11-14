import fig3Rosenbrock from '../assets/figures/fig3_rosenbrock.png';
import fig4SyntheticPrompts from '../assets/figures/fig4_synthetic_prompts.png';
import fig5TsneNmi from '../assets/figures/fig5_tsne_nmi.png';
import fig6Gradcam from '../assets/figures/fig6_gradcam.png';
import fig7QueryEfficiency from '../assets/figures/fig7_query_efficiency.png';
import table5BackboneAblation from '../assets/figures/table5_backbone_ablation.png';
import table6CoordinatorAblation from '../assets/figures/table6_coordinator_ablation.png';

export interface PaperFigureItem {
  src: string;
  label: string;
}

export interface PaperFigureConfig {
  id: string;
  title: string;
  src: string | null;
  items?: PaperFigureItem[];
  layout?: 'stack' | 'tabs';
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
    src: fig4SyntheticPrompts,
    items: [
      { src: fig4SyntheticPrompts, label: "Fig. 4: Prompts" },
      { src: fig5TsneNmi, label: "Fig. 5: t-SNE & NMI" },
    ],
    layout: 'tabs',
    caption: "Figure 4 & Figure 5: Prompt visualizations, t-SNE embeddings, and NMI scores under color bias and location shifts.",
    source: "CVPR 2023 BlackVIP — Fig. 4 & Fig. 5",
    aspectRatio: "16 / 10",
    keyTakeaway: "BlackVIP outperforms even white-box VP under strong color bias (ρ = 0.9).",
  },
  optimizationComparison: {
    id: "fig-optimization",
    title: "100D Rosenbrock & Query Efficiency",
    src: fig3Rosenbrock,
    items: [
      { src: fig3Rosenbrock, label: "Fig. 3: 100D Rosenbrock" },
      { src: fig7QueryEfficiency, label: "Fig. 7: Query Efficiency" },
    ],
    layout: 'stack',
    caption: "Figure 3 & Figure 7: Loss convergence & Gaussian noise sensitivity on 100D Rosenbrock (top), plus API query cost (bottom).",
    source: "CVPR 2023 BlackVIP — Fig. 3 & Fig. 7",
    aspectRatio: "16 / 10",
    keyTakeaway: "SPSA-GC matches true-gradient SGD-NAG stability and doubles ZS accuracy in 10K queries (~$12).",
  },
  robustnessShift: {
    id: "fig-robustness",
    title: "Grad-CAM Attention Analysis",
    src: fig6Gradcam,
    caption: "Figure 6: Grad-CAM analysis on CLEVR, OxfordPets, and UCF101 comparing ZS, BAR, VP, and BlackVIP.",
    source: "CVPR 2023 BlackVIP — Fig. 6",
    aspectRatio: "16 / 10",
    keyTakeaway: "64.0% avg accuracy (wins 13/14 vs ZS) using only 9K parameters.",
  },
  ablationStudy: {
    id: "fig-ablation",
    title: "Backbone & Coordinator Ablations",
    src: table5BackboneAblation,
    items: [
      { src: table5BackboneAblation, label: "Table 5: Target Backbones" },
      { src: table6CoordinatorAblation, label: "Table 6: Coordinator × Optim." },
    ],
    layout: 'stack',
    caption: "Table 5 & Table 6: EuroSAT accuracy across target backbones (RN50–ViT-B/16) and Coordinator pre-training × SPSA variants.",
    source: "CVPR 2023 BlackVIP — Table 5 & Table 6",
    aspectRatio: "16 / 10",
    keyTakeaway: "SSL MAE encoder + SPSA-GC reaches 73.1% (+3.7% over standard SPSA).",
  },
};

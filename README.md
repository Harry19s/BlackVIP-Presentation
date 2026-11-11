# BlackVIP Presentation Website

**"BlackVIP: Black-Box Visual Prompting for Robust Transfer Learning" (CVPR 2023)**

An interactive, responsive, animated research presentation website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **KaTeX**. Designed for academic seminars, defenses, and research presentations (such as at IIIT Bangalore).

---

## 🚀 Key Features

- **Exactly 19 Modular Slides**: Every slide covers a dedicated topic from the CVPR 2023 paper, implemented as an independent component.
- **Direction-Aware Transitions**: Smooth slide entries and exits aware of navigation direction (next vs previous).
- **Centralized Design System**: Centrally defined themes (`Cool & Clean` and `Dark Academic`) exposed via CSS variables; no hardcoded colors in slide components.
- **Rendered Equations (KaTeX)**: Beautiful LaTeX equations for SPSA perturbation, component-wise gradient estimators, and SPSA-GC look-ahead momentum.
- **Interactive Technical Diagrams**: Clean SVG/HTML pipelines illustrating the Coordinator autoencoder, trigger vector fusion, and optimization feedback.
- **Comprehensive Speaker Notes**: Dedicated script drawer (press `N`) with spoken explanations, timer, diagram walkthroughs, and next-slide transitions.
- **Original Paper Figure Placeholders**: Modular configuration in `src/data/paperFigures.ts` allowing real paper screenshots to be slotted in effortlessly without altering layouts.
- **Slide Overview & Fullscreen**: Instant overview modal (press `Esc`) and HTML5 presentation fullscreen (press `F`).

---

## ⌨️ Keyboard Shortcuts & Controls

| Key | Action |
|---|---|
| `→` / `Space` / `PageDown` | Advance to Next Slide |
| `←` / `PageUp` | Return to Previous Slide |
| `Home` / `End` | Jump to First / Last Slide |
| `Esc` | Toggle Slide Overview Grid |
| `N` | Toggle Speaker Notes & Script Drawer |
| `R` | Replay Current Slide Animations |
| `T` | Toggle Color Theme (Cool & Clean / Dark Academic) |
| `F` | Toggle Fullscreen Presentation Mode |

---

## 🛠️ Project Structure

```text
blackvip/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── Presentation.tsx       # Main presentation container & orchestrator
│   ├── components/
│   │   ├── ComparisonCard.tsx     # Reusable side-by-side comparison cards
│   │   ├── Diagram.tsx            # Animated diagram nodes & directional connectors
│   │   ├── Equation.tsx           # KaTeX LaTeX renderer (inline & display block)
│   │   ├── ImagePlaceholder.tsx   # Configurable paper screenshot/figure container
│   │   ├── ProgressBar.tsx        # Top presentation progress bar
│   │   ├── SectionLabel.tsx       # Section badge & pill
│   │   ├── SlideContainer.tsx     # 16:9 presentation viewport with AnimatePresence
│   │   ├── SlideCounter.tsx       # Slide counter (e.g. 05 / 19)
│   │   ├── SlideNavigation.tsx    # Bottom navigation & control bar
│   │   ├── SlideOverview.tsx      # Slide overview grid modal
│   │   └── SpeakerNotes.tsx       # Speaker notes drawer with practice timer
│   ├── data/
│   │   ├── notes.ts               # Detailed speaker scripts for all 19 slides
│   │   ├── paperFigures.ts        # Figure metadata & image configurations
│   │   └── slides.ts              # Slide metadata, sections, and titles
│   ├── hooks/
│   │   ├── useKeyboardNavigation.ts # Global presentation hotkeys
│   │   └── useSlideNavigation.ts    # Slide state, direction & history
│   ├── slides/
│   │   ├── Slide01Title.tsx
│   │   ├── Slide02Motivation.tsx
│   │   ├── Slide03ARvsVP.tsx
│   │   ├── Slide04ProblemFormulation.tsx
│   │   ├── Slide05BlackVIPArchitecture.tsx
│   │   ├── Slide06Coordinator.tsx
│   │   ├── Slide07TriggerVector.tsx
│   │   ├── Slide08ZOO.tsx
│   │   ├── Slide09SPSAConcept.tsx
│   │   ├── Slide10SPSAGradient.tsx
│   │   ├── Slide11SPSALimitations.tsx
│   │   ├── Slide12NAG.tsx
│   │   ├── Slide13SPSAGC.tsx
│   │   ├── Slide14ExperimentalSetup.tsx
│   │   ├── Slide15SyntheticResults.tsx
│   │   ├── Slide16OptimizationComparison.tsx
│   │   ├── Slide17Robustness.tsx
│   │   ├── Slide18Ablation.tsx
│   │   └── Slide19Conclusion.tsx
│   ├── theme/
│   │   ├── global.css             # Tailwind base & custom scrollbar styles
│   │   ├── theme.ts               # Theme types & Tech & Innovation (Cool & Clean)
│   │   └── themes.ts              # Alternate themes & CSS variable applier
│   ├── utils/
│   │   └── animations.ts          # Directional transitions & staggered variants
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 💻 Installation & Execution

### Prerequisites
- Node.js (v18+)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📄 Presentation Contents Breakdown

- **Slide 1**: Title, Authors (CVPR 2023), Affiliations, Presenter info.
- **Slide 2**: Transfer Learning & Adaptation: Full Fine-Tuning vs PEFT vs Black-Box.
- **Slide 3**: Adversarial Reprogramming vs Visual Prompting.
- **Slide 4**: Black-Box Visual Prompting Problem Formulation.
- **Slide 5**: Complete BlackVIP Architecture Pipeline & SPSA-GC Feedback Loop.
- **Slide 6**: Coordinator: Prompt Reparameterization & Pixel-Space Curse of Dimensionality.
- **Slide 7**: Trigger Vector & Instance-Adaptive Visual Prompt Generation.
- **Slide 8**: Zeroth-Order Optimization (ZOO) vs First-Order Backpropagation.
- **Slide 9**: SPSA: Simultaneous Perturbation Concept & $\mathcal{O}(1)$ Query Efficiency.
- **Slide 10**: SPSA: Gradient Estimation & Parameter Update with Educational Walkthrough.
- **Slide 11**: Limitations of Standard SPSA: Gradient Variance & Minibatch Noise.
- **Slide 12**: Nesterov's Accelerated Gradient (NAG) & Look-Ahead Momentum Braking.
- **Slide 13**: SPSA with Gradient Correction (SPSA-GC): The 3 Core Equations & Update Rule.
- **Slide 14**: Experimental Protocol: Datasets, Vision Backbones, and Baselines.
- **Slide 15**: Synthetic Benchmarks: Biased-MNIST & Loc-MNIST Invariance to Shortcuts.
- **Slide 16**: Optimization Convergence: SPSA-GC vs Standard SPSA, RDSA, and ZO-SGD.
- **Slide 17**: Robustness & Few-Shot Generalization under Corruptions (ImageNet-C).
- **Slide 18**: Ablation Study: Validating Coordinator, DINO SSL Encoder, and Trigger Vectors.
- **Slide 19**: Conclusion, Final Pipeline Synthesis & Interactive Celebration.


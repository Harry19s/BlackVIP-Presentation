# Build an Interactive, Animated Research Presentation Website — BlackVIP

Act as a senior frontend engineer and UI/UX designer. Build a polished, modern, interactive web application that presents the research paper:

**"BlackVIP: Black-Box Visual Prompting for Robust Transfer Learning" (CVPR 2023)**

The application should look and behave like a professional PowerPoint presentation, but it must be implemented as a **web-based slide presentation using React**.

Do not create a traditional PowerPoint file. Build a complete, responsive, browser-based presentation with slide navigation, smooth animations, diagrams, mathematical equations, and speaker notes.

The presentation should be visually impressive, suitable for an academic research presentation at IIIT Bangalore, and easy to maintain or extend.

---

# 1. Recommended Technology Stack

Use the following stack:

- **React** — UI framework.
- **TypeScript** — type safety and maintainability.
- **Vite** — development server and build tooling.
- **Tailwind CSS** — utility-based styling.
- **Motion for React (`motion/react`)** — slide transitions, element animations, staggered reveals, and interactive motion.
- **Lucide React** — consistent icons.
- **KaTeX** — rendering mathematical equations.
- **React Markdown** (optional) — if needed for structured speaker notes.

Use current stable versions compatible with one another.

### Important animation recommendation

Use Motion for React as the primary animation library.

Use `AnimatePresence` and `motion` components for:
- Entering and exiting slides.
- Direction-aware transitions.
- Fade, slide, scale, and blur effects.
- Staggered animation of content within each slide.
- Animated arrows, diagrams, nodes, and connectors.
- Subtle emphasis animations for important equations or concepts.

Avoid excessive animation. The experience should feel like a premium research presentation, not a flashy marketing website.

---

# 2. Overall Presentation Experience

Create a full-screen, 16:9 slide-like presentation interface.

Each slide should occupy the available presentation viewport, with consistent margins and alignment.

The user should be able to navigate between slides using:

1. Left and right arrow keys.
2. On-screen previous and next buttons.
3. Optional clickable slide progress/navigation indicator.
4. Touch/swipe gestures where practical.

### Navigation requirements

- Left arrow: previous slide.
- Right arrow: next slide.
- Spacebar: next slide.
- Home: first slide.
- End: last slide.
- Escape: toggle presentation overview, if implemented.

Include:
- Current slide number / total slides.
- A minimal progress bar.
- Previous and next navigation controls.
- A small presentation title or section indicator.

Navigation must work reliably without requiring a mouse.

### Slide transitions

Implement direction-aware transitions:

- Next slide: subtle movement from right to left.
- Previous slide: subtle movement from left to right.
- Use a combination of opacity and horizontal translation.
- Duration approximately 350–550 ms.
- Use smooth easing.
- Prevent overlapping animations or accidental multiple navigation events.

The transitions should preserve the feeling of moving through a real presentation.

---

# 3. Theme and Design System

Create a dedicated theme configuration file.

**Do not hardcode colours throughout the components.**

The complete colour palette, typography, spacing, shadows, borders, and animation defaults should be centrally configurable.

Use this initial theme:

## Tech & Innovation — Cool & Clean

| Element | Colour |
|---|---|
| Background | `#FFFFFF` |
| Cards / Panels | `#F0F4F8` |
| Primary Text | `#0F172A` |
| Accent | `#2563EB` |

Additional suggested colours:

| Element | Colour |
|---|---|
| Secondary Text | `#475569` |
| Muted Text | `#64748B` |
| Borders | `#DCE5EF` |
| Secondary Accent | `#06B6D4` |
| Success / Positive | `#0D9488` |
| Highlight | `#DBEAFE` |
| Dark Panel | `#111827` |

### Theme design principles

- Crisp white backgrounds.
- Ice blue-gray cards and panels.
- Deep navy headings and body text.
- Electric cobalt for emphasis and key concepts.
- Cyan or teal for secondary highlights.
- Subtle shadows and rounded corners.
- Consistent typography and spacing.

Use a modern font such as **Inter** or **Geist**.

### Theme architecture

Create a dedicated file such as:

`src/theme/theme.ts`

It should contain all theme variables, for example:

- Colors.
- Typography.
- Font sizes.
- Border radii.
- Shadows.
- Spacing.
- Animation durations.
- Transition easing.

Also expose the theme through CSS variables so that changing the theme requires editing only the theme configuration.

Make it easy to add another theme later, such as Dark Academic or Minimal Black.

---

# 4. Code Architecture and Project Structure

Use a clean, modular, scalable structure.

Do not put the entire application in `App.tsx`.

Suggested structure:

```text
blackvip-presentation/
│
├── public/
│   ├── assets/
│   │   ├── paper-images/
│   │   ├── figures/
│   │   └── screenshots/
│   │
│   └── favicon.svg
│
├── src/
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   └── Presentation.tsx
│   │
│   ├── theme/
│   │   ├── theme.ts
│   │   ├── themes.ts
│   │   └── global.css
│   │
│   ├── components/
│   │   ├── SlideContainer.tsx
│   │   ├── SlideNavigation.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SlideCounter.tsx
│   │   ├── SpeakerNotes.tsx
│   │   ├── SlideOverview.tsx
│   │   ├── Equation.tsx
│   │   ├── Diagram.tsx
│   │   ├── ComparisonCard.tsx
│   │   ├── ImagePlaceholder.tsx
│   │   └── SectionLabel.tsx
│   │
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
│   │
│   ├── data/
│   │   ├── slides.ts
│   │   ├── notes.ts
│   │   └── paperFigures.ts
│   │
│   ├── hooks/
│   │   ├── useSlideNavigation.ts
│   │   └── useKeyboardNavigation.ts
│   │
│   ├── utils/
│   │   └── animations.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

You may adjust this structure if necessary, but maintain separation of responsibilities.

### Important maintainability requirements

1. Every slide must be a separate React component.
2. Theme variables must be centralized.
3. Speaker notes must be maintained separately from slide visuals.
4. Navigation logic must be reusable.
5. Animation variants must be reusable.
6. Paper figures and screenshots must be managed separately.
7. Reusable diagrams and cards should be components.
8. Avoid duplicating code across slides.

---

# 5. Presentation Content — Exactly 19 Slides

Follow the structure below. Do not add or remove slides.

## Slide 1 — Title

**BlackVIP: Black-Box Visual Prompting for Robust Transfer Learning**

Include:
- Paper title.
- CVPR 2023.
- Author names from the original paper.
- Presenter name and academic affiliation as configurable fields.

Visual:
- Elegant research-paper title layout.
- Small abstract illustration representing an image, visual prompt, and pretrained model.
- Subtle entrance animation.

## Part 1 + 2 — Introduction, Background and BlackVIP Framework

### Slide 2 — Research Motivation and Transfer Learning

Cover:
- Pretrained vision models.
- Transfer learning.
- Full fine-tuning.
- Parameter-efficient transfer learning.
- Challenges of adapting black-box models.

Visual:
- Pretrained model → downstream task.
- Compare full fine-tuning vs parameter-efficient tuning.
- Use animated arrows and model blocks.

### Slide 3 — Adversarial Reprogramming vs Visual Prompting

Cover:
- Adversarial Reprogramming (AR).
- Visual Prompting (VP).
- Input-side modification.
- Differences in objective and output mapping.

Visual:
- Side-by-side AR and VP pipelines.
- Show how an input image is modified.
- Clearly distinguish the two objectives.

### Slide 4 — Black-Box Visual Prompting: Problem Formulation

Cover:
- White-box vs black-box.
- No access to model parameters or gradients.
- Only model input/output and loss evaluations are available.
- Gradient-free optimization.

Visual:
- White-box: visible model internals and gradients.
- Black-box: sealed model with input/output access.
- Highlight the information restriction.

### Slide 5 — BlackVIP: Overall Architecture

Cover:
- Overall BlackVIP pipeline.
- Input image.
- Coordinator.
- Visual prompt generation.
- Frozen pretrained model.
- Prediction and loss feedback.
- Optimization of trainable parameters.

Visual:
- Make this one of the most important architecture slides.
- Build a clean, animated pipeline.
- Distinguish frozen and trainable components using consistent colours.
- Use a feedback arrow to show optimization.

### Slide 6 — Coordinator: Prompt Reparameterization

Cover:
- Why direct prompt optimization is challenging.
- Autoencoder-style Coordinator.
- Frozen self-supervised encoder \(f(\cdot)\).
- Lightweight learnable decoder \(g_{\phi_d}(\cdot)\).

Visual:
- Encoder → latent representation → decoder.
- Clearly mark the frozen encoder and trainable decoder.
- Show how the Coordinator helps generate prompts.

### Slide 7 — Trigger Vector and Prompt Generation

Cover:
- Task-specific trigger vector \(\phi_t\).
- Image-specific feature representation.
- Learnable parameters \(\phi=\{\phi_d,\phi_t\}\).
- Generation of visual prompts.

Visual:
- Show image features and trigger vector entering the Coordinator.
- Animate their combination.
- Show the generated visual prompt.

## Part 3 + 4 — ZOO, SPSA and SPSA-GC

### Slide 8 — Zeroth-Order Optimization (ZOO)

Cover:
- First-order vs zeroth-order optimization.
- Gradient access vs loss evaluations.
- Why ZOO is suitable for black-box models.

Visual:
- First-order: model → gradient → update.
- Zeroth-order: perturb → evaluate loss → estimate direction.
- Make the contrast immediately understandable.

### Slide 9 — SPSA: Basic Concept and Perturbation

Cover:
- Simultaneous Perturbation Stochastic Approximation.
- Random perturbation vector \(\Delta_i\).
- Positive perturbation.
- Negative perturbation.
- Two loss evaluations.

Equations:

\[
\phi^+=\phi_i+c_i\Delta_i
\]

\[
\phi^-=\phi_i-c_i\Delta_i
\]

Visual:
- Illustrate the original parameter point.
- Show two simultaneous perturbation directions.
- Display the two loss evaluations.
- Animate the perturbations.

### Slide 10 — SPSA: Gradient Estimation and Parameter Update

Cover:

\[
\hat g_i(\phi_i)=
\frac{L(\phi_i+c_i\Delta_i)-L(\phi_i-c_i\Delta_i)}
{2c_i\Delta_i}
\]

\[
\phi_{i+1}=\phi_i-a_i\hat g_i(\phi_i)
\]

Explain:
- Component-wise division.
- Learning rate.
- Perturbation magnitude.
- Only two loss evaluations regardless of parameter dimension.

Visual:
- Two loss values → gradient estimate → parameter update.
- Include a small illustrative numerical example.
- Do not confuse the educational example with experimental paper results.

### Slide 11 — Limitations of Standard SPSA

Cover:
- Noisy gradient estimates.
- Random perturbation directions.
- Intrinsic data noise.
- Slow convergence in high-dimensional optimization.
- Motivation for gradient correction.

Visual:
- Illustrative noisy optimization trajectory.
- Compare an idealized path with a noisy path.
- Label it as a conceptual illustration, not an experimental result.

### Slide 12 — Nesterov's Accelerated Gradient (NAG)

Cover:
- Momentum.
- Look-ahead position.
- Why the look-ahead gradient is useful.
- Motivation for applying NAG-style correction to SPSA.

Equation:

\[
\phi_i^{lookahead}=\phi_i+\beta m_i
\]

Visual:
- Current parameter position.
- Previous momentum direction.
- Look-ahead position.
- Gradient correction.
- Animate the look-ahead movement.

### Slide 13 — SPSA with Gradient Correction (SPSA-GC)

This is the most important technical slide.

Equations:

\[
\phi_i^{lookahead}=\phi_i+\beta m_i
\]

\[
m_{i+1}=\beta m_i-a_i\hat g_i(\phi_i+\beta m_i)
\]

\[
\phi_{i+1}=\phi_i+m_{i+1}
\]

Explain:
- Gradient estimation at the look-ahead position.
- Momentum update.
- Corrected parameter update.
- Role of \(\beta\), \(m_i\), and \(a_i\).
- Difference between standard SPSA and SPSA-GC.

Visual:
- Create a step-by-step animated algorithm.
- Show standard SPSA and SPSA-GC side by side.
- Emphasize that SPSA supplies the gradient estimate while the NAG-inspired update introduces look-ahead and momentum correction.
- Make equations readable and prominent.

Do not claim that SPSA-GC eliminates noise or guarantees faster convergence. Present its intended benefit accurately.

## Part 5 — Experiments and Results

### Slide 14 — Experimental Setup

Cover:
- Datasets.
- Pretrained model architectures.
- Baselines.
- Evaluation settings.

Visual:
- Compact experiment overview.
- Dataset/model/baseline cards.

### Slide 15 — Results on Synthetic Datasets

Cover:
- Biased MNIST.
- Loc-MNIST.
- Key experimental findings.

Visual:
- Use original paper figures, plots, or tables where available.
- Explain the key observation without fabricating numbers.

### Slide 16 — Optimization Algorithm Comparison

Cover:
- Standard SPSA.
- SPSA-GC.
- Other ZOO algorithms.
- Convergence behaviour.

Visual:
- Original paper convergence plots.
- Highlight the SPSA-GC comparison.
- Add concise annotations.

### Slide 17 — Robustness and Few-Shot Transfer Learning

Cover:
- Distribution shifts.
- Object location shifts.
- Few-shot transfer learning.
- Generalization.

Visual:
- Use relevant original paper plots, examples, or tables.
- Show the importance of robust transfer.

### Slide 18 — Ablation Study

Cover:
- Coordinator architectures.
- Coordinator weights.
- ZOO algorithm comparisons.
- Main observations.

Visual:
- Original ablation figures or compact tables.
- Highlight important findings.

## Part 6 — Conclusion

### Slide 19 — Conclusion and Key Takeaways

Cover:
- BlackVIP enables black-box visual prompting.
- Coordinator provides prompt reparameterization.
- SPSA enables gradient-free optimization.
- SPSA-GC adds NAG-inspired look-ahead and momentum correction.
- Overall significance for robust transfer learning.

Visual:
- Final simplified pipeline:

  **Image → Coordinator → Visual Prompt → Frozen Model**

  **SPSA → Gradient Estimation**

  **SPSA-GC → Look-ahead + Momentum Correction**

- Finish with a subtle Thank You / Questions footer.

---

# 6. Visual Design Requirements

This is a research presentation, not a documentation website.

**The slides must be visually driven, not text-heavy.**

Follow these rules:

- Maximum 3–5 short bullet points per slide.
- Avoid long paragraphs.
- Prefer diagrams, pipelines, comparisons, plots, equations, and illustrations.
- Keep headings prominent and content readable.
- Use whitespace effectively.
- Avoid overcrowding.
- Maintain consistent visual hierarchy.
- Use cards only when they improve clarity.
- Use subtle gradients only when necessary.
- Avoid unnecessary decorative icons.
- Make the technical equations prominent without making them dominate every slide.

### Diagram styling

Use consistent visual language:

- Frozen components: muted blue-gray.
- Trainable components: electric blue or teal.
- Input images: neutral gray.
- Optimization feedback: cobalt.
- Loss evaluation: cyan.
- Important mathematical variables: accent colour.

Diagrams should be built using editable HTML/CSS/SVG elements rather than static screenshots wherever practical.

---

# 7. Animations

Every slide should have its own meaningful entrance animation.

Do not apply the exact same animation to every element.

Use animation to explain the research concepts.

Examples:

| Slide | Suggested animation |
|---|---|
| 2 | Pretrained model branches into downstream tasks |
| 3 | AR and VP pipelines appear side by side |
| 4 | White-box internals disappear behind a black-box boundary |
| 5 | BlackVIP architecture builds step by step |
| 6 | Encoder, latent representation, and decoder appear sequentially |
| 7 | Image features and trigger vector combine into a prompt |
| 8 | First-order and zeroth-order optimization comparison |
| 9 | Positive and negative perturbations move from the original point |
| 10 | Two loss values combine into a gradient estimate |
| 11 | Noisy optimization trajectory develops over iterations |
| 12 | Momentum moves the parameter to a look-ahead position |
| 13 | SPSA-GC algorithm animates through its three equations |
| 14 | Experimental components appear in sequence |
| 15–18 | Charts and results reveal progressively |
| 19 | Final architecture and key contributions assemble |

### Animation interaction

- Animate content on slide entry.
- Use staggered reveals for diagrams.
- Use subtle highlighting for equations.
- Allow optional click-to-reveal steps for complex diagrams.
- Avoid making essential information dependent on animation.
- Respect `prefers-reduced-motion`.
- Provide a way to replay a slide's animations.

### Between-slide animation

Use `AnimatePresence` with directional transitions.

Make the next/previous navigation feel smooth and consistent.

---

# 8. Original Paper Screenshots and Figures — Important Future Requirement

I may later provide screenshots or extracted figures directly from the original BlackVIP paper.

The architecture must support inserting these images without modifying the overall slide layout or animation system.

Create an `ImagePlaceholder` component.

For now:
- Use clean placeholder containers on slides where original figures are important.
- Label them clearly, for example: `Original Paper Figure Placeholder`.
- Preserve the expected aspect ratio.
- Support both images and screenshots.
- Support captions and source references.
- Provide configurable image sizing and positioning.

Create a separate configuration file:

`src/data/paperFigures.ts`

Example structure:

```ts
export const paperFigures = {
  architecture: {
    src: null,
    caption: "BlackVIP overall architecture",
    source: "Original paper figure",
    aspectRatio: "16 / 9",
  },

  spsaComparison: {
    src: null,
    caption: "Optimization comparison",
    source: "Original paper figure",
    aspectRatio: "16 / 9",
  },
};
```

When an image is not available, render a polished placeholder rather than a broken image.

Do not fabricate original paper screenshots, experimental plots, or numerical results.

Use conceptual diagrams only when they are clearly identified as conceptual illustrations.

---

# 9. Speaker Notes — Separate from the Slide Content

Every slide must have detailed speaker notes.

The slide itself should remain visually clean.

Create a notes panel that can be opened or closed using a dedicated button or keyboard shortcut.

The notes should not be visible on the main slide by default.

### Speaker notes requirements

For each of the 19 slides, provide:

1. What the slide is explaining.
2. A simple explanation of the technical concept.
3. How to explain the diagram.
4. Important terminology.
5. Equations explained step by step, where applicable.
6. Why this concept matters to BlackVIP.
7. A natural transition to the next slide.

Use simple, natural spoken English.

Target:
- 60–90 seconds of speaking per normal slide.
- 90–120 seconds for important SPSA and SPSA-GC slides.

The notes should be sufficiently detailed that I can understand the slide and present it confidently without referring to the original paper repeatedly.

Maintain notes in a separate file:

`src/data/notes.ts`

Also make it possible to export or print the notes as a separate presenter script later.

---

# 10. Presentation Controls and Additional Features

Implement:

- Full-screen presentation mode.
- Previous / next controls.
- Keyboard navigation.
- Slide progress bar.
- Slide overview grid.
- Current slide / total slides.
- Speaker notes panel.
- Replay current slide animation.
- Optional animation skip.
- Responsive layout for laptop and desktop.
- A fallback layout for smaller screens.

The presentation should prioritize a desktop/laptop display at 16:9.

Do not make the UI resemble a conventional website with a header, sidebar, and scrolling sections. It must feel like a presentation.

---

# 11. Quality and Technical Requirements

- Use TypeScript throughout.
- Keep components reusable and modular.
- Avoid unnecessary dependencies.
- Use semantic React components.
- Avoid huge monolithic files.
- No hardcoded theme colours inside slide components.
- Keep slide data and notes separate.
- Ensure all 19 slides are implemented.
- Ensure all navigation controls work.
- Ensure keyboard shortcuts work.
- Ensure animations work in both directions.
- Avoid layout shifts between slides.
- Avoid horizontal or vertical scrolling within slides at standard presentation dimensions.
- Make mathematical equations readable.
- Test the presentation at 1920×1080 and 1366×768.
- Use local assets where possible.
- Do not rely on external image URLs that may break.

### Research accuracy

Use the original BlackVIP paper as the source of truth.

Do not invent:
- Experimental results.
- Dataset statistics.
- Model architectures.
- Hyperparameters.
- Paper figure numbers.
- Author names.

If a detail is unavailable, use a clearly labelled placeholder or omit it.

Pay particular attention to the SPSA-GC equations and their interpretation.

---

# 12. Execution Instructions

Do not stop after generating a design mockup or a few sample slides.

Actually implement the complete working application.

Follow this sequence:

1. Initialize the React + TypeScript + Vite project.
2. Install and configure the required libraries.
3. Create the theme system.
4. Implement the presentation shell and navigation.
5. Implement reusable diagram, equation, image, and notes components.
6. Build all 19 individual slides.
7. Add slide-specific animations.
8. Add speaker notes for all slides.
9. Add paper figure placeholders.
10. Test navigation, transitions, layout, and keyboard controls.
11. Run the application and resolve build/runtime errors.
12. Update README with installation and execution instructions.

### Final expected result

A complete, working, visually polished, 19-slide interactive research presentation website.

It should feel like a modern animated academic presentation, with:

- PowerPoint-like slide navigation.
- Smooth transitions between slides.
- Meaningful animations within every slide.
- Beautiful technical diagrams.
- Clear mathematical equations.
- Separate speaker notes.
- Centralized editable theme.
- Future support for original paper screenshots.

**Prioritize visual quality, research accuracy, readability, and maintainable code over unnecessary visual effects.**
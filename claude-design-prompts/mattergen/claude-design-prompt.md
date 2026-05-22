# Claude Design Prompt - MatterGen

Metadata from source inventory:
- Model: MatterGen
- Year: 2023-2025
- Lab: Microsoft Research AI for Science
- Architecture / modality note: diffusion model for inorganic crystal/material generation with property conditioning
- Source lead: https://github.com/microsoft/mattergen/blob/main/MODEL_CARD.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for MatterGen.

Primary source leads to use:
- MatterGen model card: https://github.com/microsoft/mattergen/blob/main/MODEL_CARD.md
- MatterGen repository: https://github.com/microsoft/mattergen
- MatterGen paper: https://arxiv.org/abs/2312.03687
- Microsoft Research blog: https://www.microsoft.com/en-us/research/blog/mattergen-property-guided-materials-design/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
MatterGen generates periodic crystal structures; use materials-science representations rather than molecule or image defaults. Verify all property heads, datasets, benchmark numbers, and released checkpoint names from the model card/repo.

Model identity:
- Model: MatterGen
- Family/vendor or lab: Microsoft Research AI for Science
- Release/report date: paper December 2023; open-source/model-card release later
- Parameter scale: verify from model card/config
- Target page title: "MatterGen Architecture"

Known architecture and training facts:
- MatterGen is a diffusion model for inorganic materials design across the periodic table.
- It jointly predicts/refines atomic fractional coordinates, element types, and unit-cell lattice vectors.
- The model supports unconditional generation and conditional/fine-tuned generation toward target properties such as bulk modulus, chemical system, or magnetic density.
- The paper introduces a diffusion process that gradually refines atom types, coordinates, and periodic lattice.

Required architecture content:
1. End-to-end crystal generation map: target conditions, noisy atoms/lattice, denoiser, refined fractional coordinates, elements, lattice vectors, generated material candidate.
2. Show separate channels for atom type, fractional coordinate, and lattice-vector diffusion/refinement.
3. Diagram periodic boundary conditions and crystal unit-cell representation.
4. Include property-conditioning modules and fine-tuning paths for bulk modulus, chemistry constraints, magnetic density, or other reported properties.
5. Include evaluation metrics from the paper/model card: stability, novelty, diversity, property success, or downstream validation only with exact values.
6. Add caveats for unreported parameter counts, training corpus details, inference sampler, and property predictor limitations.
7. Clearly label generated candidates as computational proposals, not experimentally validated materials unless source says otherwise.

Visual requirements:
- First viewport should show a crystal cell being denoised into atoms plus lattice.
- Use unit-cell diagrams, property-control panels, and metric cards.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

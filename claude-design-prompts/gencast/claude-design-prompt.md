# Claude Design Prompt - GenCast

Metadata from source inventory:
- Model: GenCast
- Year: 2023-2024
- Lab: Google DeepMind
- Architecture / modality note: diffusion-based ensemble weather forecasting model, built in the GraphCast ecosystem
- Source lead: https://github.com/google-deepmind/graphcast

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for GenCast.

Primary source leads to use:
- GraphCast/GenCast repository: https://github.com/google-deepmind/graphcast
- GenCast paper: https://arxiv.org/abs/2312.15796
- Google DeepMind publication page: https://deepmind.google/research/publications/68149/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
GenCast is a weather forecasting diffusion model, not a text/image generator. Confirm grid resolution, variables, pressure levels, mesh structure, rollout schedule, and ensemble size from the paper/repo. Label unavailable details as unknown.

Model identity:
- Model: GenCast
- Family/vendor or lab: Google DeepMind weather foundation models
- Release/report date: December 2023 paper; later open-source release
- Parameter scale: verify from paper/repo
- Target page title: "GenCast Architecture"

Known architecture and training facts:
- GenCast is a probabilistic generative model for medium-range ensemble weather forecasting.
- It is trained from reanalysis data.
- It models conditional probability distributions over future atmospheric states using diffusion.
- Source leads describe a denoising neural network with graph-transformer/mesh processing in the GraphCast codebase.
- The paper reports greater skill and speed than ECMWF's ENS medium-range ensemble forecast in its evaluation setting; exact metrics must be source-copied.

Required architecture content:
1. End-to-end forecast map: historical atmospheric state, conditioning, noisy future state, graph/mesh denoiser, ensemble forecast trajectories.
2. Show grid-to-mesh and mesh-to-grid processing if confirmed in GenCast code/paper.
3. Diagram diffusion over weather fields and autoregressive rollout over forecast lead times.
4. Show ensemble generation: multiple samples, uncertainty spread, probabilistic output.
5. Include variables, vertical levels, resolution, lead time, and time step only where verified.
6. Include benchmark panels comparing GenCast to ECMWF ENS with exact source-reported metrics.
7. Add caveats for regional limitations, stratosphere/rare-event caveats, and unreported architecture dimensions.

Visual requirements:
- First viewport should show GenCast as diffusion-based ensemble forecasting on weather fields.
- Use map/grid panels, mesh diagrams, ensemble plumes, and score cards.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

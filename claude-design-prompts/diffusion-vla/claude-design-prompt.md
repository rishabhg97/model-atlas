# Claude Design Prompt - Diffusion-VLA

Metadata from source inventory:
- Model: Diffusion-VLA / DiVLA lead
- Year: 2024
- Lab: paper authors; verify official project/repo from source
- Size / active size: DiffusionVLA-2B is reported as the smallest variant in source lead; verify variants
- Architecture / modality note: robot foundation model combining autoregressive reasoning with diffusion action generation
- Source lead: https://arxiv.org/html/2412.03293v1

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Diffusion-VLA.

Primary source leads to use:
- Diffusion-VLA HTML paper: https://arxiv.org/html/2412.03293v1
- arXiv abstract page fallback: https://arxiv.org/abs/2412.03293

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
The user shortlist mentions "DiffusionVLA / DiVLA"; verify whether DiVLA is a shorthand for this same paper or a distinct model. If sources disagree, label the naming ambiguity and do not merge unrelated systems.

Model identity:
- Model: Diffusion-VLA
- Family/vendor or lab: robotics VLA diffusion model
- Release/report date: December 2024
- Parameter scale: DiffusionVLA-2B smallest variant if source-confirmed
- Target page title: "Diffusion-VLA Architecture"

Known architecture and training facts:
- The source describes a robot foundation model using self-generated reasoning and a diffusion model attached for robust action outputs.
- The abstract reports data efficiency and fast inference, with the smallest DiffusionVLA-2B running at 82Hz on a single A6000 GPU and training from scratch on fewer than 50 demonstrations for a complex task.
- The model blends VLA perception/language reasoning with diffusion-based continuous action generation; exact backbone, action horizon, and conditioning details must be taken from the paper.

Required architecture content:
1. End-to-end VLA map: camera/image input, language instruction, VLM/VLA reasoning, self-generated reasoning tokens, diffusion action module, robot action output.
2. Show how autoregressive reasoning and diffusion action generation interact.
3. Diagram the diffusion action denoising loop, action horizon/chunking, and conditioning inputs where reported.
4. Include inference-speed and data-efficiency panels with the 82Hz/A6000 and <50 demonstration claims only if exact paper context is shown.
5. Include benchmark/task tables from the paper with source-reported labels.
6. Add a caveats section for unreported exact robot embodiments, action dimensions, context length, training mixture, and DiVLA naming ambiguity.
7. Do not generalize from pi0, OpenVLA, or other VLA systems unless the Diffusion-VLA paper explicitly compares to them.

Visual requirements:
- First viewport should identify Diffusion-VLA as a VLA model with diffusion action decoding.
- Use flow diagrams, action-trajectory denoising panels, and benchmark bars.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

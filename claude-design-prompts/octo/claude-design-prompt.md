# Claude Design Prompt - Octo

Metadata from source inventory:
- Model: Octo
- Year: 2024
- Lab: Octo Model Team / UC Berkeley collaborators
- Architecture / modality note: open-source transformer-based robot policy trained on broad robot trajectory data
- Source lead: https://octo-models.github.io/

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Octo.

Primary source leads to use:
- Octo project page: https://octo-models.github.io/
- Octo repository: https://github.com/octo-models/octo
- Octo paper PDF lead: https://octo-models.github.io/paper.pdf

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Octo is a robot policy, not only a generative media diffusion model. Verify exact parameter counts, action heads, observation encoders, and variants from the official paper/repo configs. Label missing facts as unknown rather than importing details from RT-1, OpenVLA, or pi0.

Model identity:
- Model: Octo
- Family/vendor or lab: Octo Model Team
- Release/report date: 2024
- Parameter scale: base/small variants must be source-verified
- Target page title: "Octo Architecture"

Known architecture and training facts:
- Octo is described by the official repo as a transformer-based robot policy.
- It is trained on a diverse mixture of robot trajectories; source leads commonly report 800k trajectories.
- The repo references a diffusion head, with implementation notes such as disabling dropout in the diffusion head due to incompatibility with layer norm; verify exact context.
- Octo is intended as an open-source generalist robot policy with fine-tuning support.

Required architecture content:
1. End-to-end robot policy map: observations, language/task input, tokenization/embedding, transformer policy, action head, robot action output.
2. Show the action head design, including diffusion action head only where verified.
3. Diagram multimodal inputs and how trajectories are represented during training.
4. Include dataset/training mixture visuals from the paper: robot embodiments, tasks, and trajectory scale.
5. Include model variants and parameter counts only from official configs/model cards.
6. Include benchmark/evaluation tables from the official paper/project page.
7. Add caveats for unreported hidden sizes, exact action dimensions, tokenizer details, and differences between checkpoints.

Visual requirements:
- First viewport should identify Octo as an open transformer robot policy and show the observation-to-action loop.
- Use flow diagrams, embodiment/data-mixture cards, and policy head diagrams.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

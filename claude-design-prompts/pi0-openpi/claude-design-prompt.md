# Claude Design Prompt - pi0, pi0.5, and OpenPI

Metadata from source inventory:
- Model: pi0 / pi0.5 / OpenPI
- Year: 2024-2025
- Lab: Physical Intelligence
- Architecture / modality note: vision-language-action flow model for robot control; OpenPI implementation and checkpoints
- Source leads: https://arxiv.org/abs/2410.24164 and https://github.com/Physical-Intelligence/openpi

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for pi0, pi0.5, and OpenPI.

Primary source leads to use:
- pi0 paper: https://arxiv.org/abs/2410.24164
- Physical Intelligence pi0 PDF lead: https://www.physicalintelligence.company/download/pi0.pdf
- OpenPI repository: https://github.com/Physical-Intelligence/openpi
- pi0.5 lead if needed: https://www.pi.website/download/pi05.pdf

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
pi0 is a flow-matching VLA, not a standard discrete diffusion language model. Treat pi0.5 and OpenPI as related but distinct artifacts: pi0.5 focuses on open-world generalization, while OpenPI is the open implementation/checkpoint ecosystem. Verify which checkpoints are open and which are paper-only.

Model identity:
- Model: pi0, pi0.5, OpenPI
- Family/vendor or lab: Physical Intelligence
- Release/report date: October 2024 for pi0; 2025 for pi0.5/OpenPI leads
- Parameter scale: verify from official sources
- Target page title: "pi0 and OpenPI Architecture"

Known architecture and training facts:
- pi0 is a vision-language-action model using flow matching for general robot control.
- It is built on top of a pretrained VLM to inherit semantic knowledge.
- The policy uses an action expert/action chunking architecture for continuous robot actions rather than tokenizing actions only as text.
- OpenPI provides code and training/deployment infrastructure for pi0-family VLA models and checkpoints.
- pi0.5 should be shown as an extension only where the pi0.5 paper/repo gives source-backed details.

Required architecture content:
1. End-to-end robot control map: images, language instruction, VLM backbone, action expert, flow-matching trajectory generation, robot execution.
2. Show flow matching over action chunks with time/noise conditioning and continuous action outputs.
3. Diagram the role of the pretrained VLM and the separate action expert.
4. Add pi0 vs pi0.5 vs OpenPI comparison cards: purpose, release type, known checkpoints, and caveats.
5. Show pretraining, fine-tuning, and new-skill adaptation only where reported.
6. Include benchmark/task panels for zero-shot control, language following, high-level VLM policy following, and fine-tuning if exact source values are available.
7. Label missing config details, exact action dimensions, data mixture, and hidden deployment details as "not reported."

Visual requirements:
- First viewport should identify pi0 as a VLA flow model and show the VLM plus action-expert split.
- Use trajectory denoising/flow diagrams, embodiment cards, and evaluation task strips.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

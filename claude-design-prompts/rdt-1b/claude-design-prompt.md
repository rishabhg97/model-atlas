# Claude Design Prompt - RDT-1B

Metadata from source inventory:
- Model: RDT-1B
- Year: 2024
- Lab: Robotics Diffusion Transformer authors
- Size / active size: 1.2B parameters reported in paper abstract
- Architecture / modality note: diffusion foundation model for bimanual robotic manipulation
- Source lead: https://arxiv.org/abs/2410.07864

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for RDT-1B.

Primary source leads to use:
- RDT-1B paper: https://arxiv.org/abs/2410.07864
- RDT project page: https://rdt-robotics.github.io/rdt-robotics/
- RDT-1B model card lead: https://huggingface.co/robotics-diffusion-transformer/rdt-1b

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Use the paper and official model card for exact dimensions, action horizon, sensor inputs, robot embodiments, and checkpoints. Do not infer bimanual action spaces from unrelated ALOHA models.

Model identity:
- Model: RDT-1B / Robotics Diffusion Transformer
- Family/vendor or lab: RDT Robotics
- Release/report date: October 2024
- Parameter scale: 1.2B if confirmed
- Target page title: "RDT-1B Architecture"

Known architecture and training facts:
- RDT is a diffusion foundation model for bimanual manipulation.
- It introduces a scalable transformer for heterogeneous multimodal inputs and high-frequency robotic data.
- It introduces a Physically Interpretable Unified Action Space to unify action representations across robots while preserving physical meaning.
- The paper reports pretraining on a large multi-robot dataset collection and fine-tuning on a self-created multi-task bimanual dataset with 6K+ episodes.
- Reported capabilities include zero-shot generalization, following language instructions, learning skills with 1-5 demonstrations, and dexterous tasks.

Required architecture content:
1. End-to-end bimanual manipulation map: language, visual/proprioceptive inputs, unified action representation, diffusion transformer, denoised action trajectory, dual-arm execution.
2. Diagram the Physically Interpretable Unified Action Space and how it maps different robots into a shared action schema.
3. Show the diffusion denoising process over action trajectories and time conditioning.
4. Show the scalable transformer input streams and fusion points from official sources.
5. Include pretraining/fine-tuning pipeline and dataset scale visuals.
6. Include benchmark/real-robot result cards from the paper; label as source-reported.
7. Mark unreported exact layer counts, hidden sizes, action horizons, sensor specs, and training mixture details as unknown.

Visual requirements:
- First viewport should identify RDT-1B as a 1.2B bimanual robotic diffusion transformer.
- Use robot embodiment cards, action-space diagrams, and denoising trajectory panels.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

# Claude Design Prompt - Mochi 1

Metadata from source inventory:
- Model: Mochi 1
- Year: 2024
- Lab: Genmo
- Size / active size: 10B parameters reported by official repository lead
- Architecture / modality note: open text-to-video diffusion model with Asymmetric Diffusion Transformer
- Source lead: https://github.com/genmoai/mochi

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Mochi 1.

Primary source leads to use:
- Mochi repository: https://github.com/genmoai/mochi
- Genmo website/project lead: https://www.genmo.ai/
- Mochi Hugging Face lead: https://huggingface.co/genmo/mochi-1-preview

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Mochi 1 is an open video generation model. Confirm all details from Genmo sources: preview/full naming, license, frame count, resolution, VAE, text encoder, model size, and inference requirements. Do not infer hidden architecture from other DiT video models.

Model identity:
- Model: Mochi 1 / Mochi 1 Preview where applicable
- Family/vendor or lab: Genmo
- Release/report date: October/November 2024 leads
- Parameter scale: 10B if confirmed by official repo
- Target page title: "Mochi 1 Architecture"

Known architecture and training facts:
- The official repository describes Mochi 1 as a 10B parameter diffusion model.
- It uses a novel Asymmetric Diffusion Transformer (AsymmDiT) architecture.
- It is an open-source text-to-video model aimed at high-fidelity motion and prompt adherence.
- The repository includes inference and LoRA/fine-tuning support notes; verify exact status.

Required architecture content:
1. End-to-end text-to-video map: text prompt, text encoder, video latent tokenizer/VAE if reported, AsymmDiT denoising, decoded frames.
2. Diagram AsymmDiT: what is asymmetric, how text/video tokens interact, temporal/spatial processing, and attention structure only where source-confirmed.
3. Show video latent shape, frame count, resolution, and sampling steps only from official sources.
4. Include open-source packaging, hardware/inference notes, and LoRA/fine-tuning support if source-confirmed.
5. Include evaluation claims for motion quality and prompt adherence only with source context.
6. Add caveats for missing training data details, exact tokenizer/autoencoder internals, and preview versus final naming.
7. Avoid generic text-to-video diagrams without Mochi-specific AsymmDiT content.

Visual requirements:
- First viewport should identify Mochi 1 as Genmo's 10B AsymmDiT text-to-video model.
- Use temporal frame strips, latent video grids, and transformer block diagrams.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

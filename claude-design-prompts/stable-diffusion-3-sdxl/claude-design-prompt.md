# Claude Design Prompt - Stable Diffusion 3 and SDXL

Metadata from source inventory:
- Model: Stable Diffusion 3 / SDXL
- Year: 2023-2024
- Lab: Stability AI
- Architecture / modality note: SDXL latent diffusion with enlarged U-Net and dual text encoders; SD3 rectified-flow MMDiT
- Source leads: https://arxiv.org/abs/2307.01952 and https://arxiv.org/abs/2403.03206

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page comparing SDXL and Stable Diffusion 3.

Primary source leads to use:
- SDXL paper: https://arxiv.org/abs/2307.01952
- Stable Diffusion 3 / Scaling Rectified Flow Transformers paper: https://arxiv.org/abs/2403.03206
- Stability AI SD3 research post: https://stability.ai/news-updates/stable-diffusion-3-research-paper
- Stability AI generative-models repository lead: https://github.com/Stability-AI/generative-models

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
The user source URL points to SDXL, while the shortlist also names Stable Diffusion 3. Keep SDXL and SD3 as distinct architectures. Do not mix SDXL U-Net/refiner details with SD3 MMDiT/rectified-flow details.

Model identity:
- Model: SDXL and Stable Diffusion 3
- Family/vendor or lab: Stability AI latent image generation models
- Release/report dates: SDXL July 2023; SD3 research March 2024
- Parameter scale: verify by variant/model card
- Target page title: "Stable Diffusion 3 and SDXL Architecture"

Known architecture and training facts:
- SDXL is a latent diffusion model for high-resolution text-to-image synthesis with a roughly three-times larger U-Net than earlier Stable Diffusion versions.
- SDXL uses additional text encoders/larger cross-attention context and a refinement model for post-hoc image-to-image fidelity improvement.
- SDXL trains on multiple aspect ratios and uses novel conditioning schemes.
- SD3 uses rectified flow and a Multimodal Diffusion Transformer (MMDiT) with separate weights for image and language representations and bidirectional information flow between modalities.

Required architecture content:
1. Split comparison: SDXL pipeline and SD3 pipeline.
2. SDXL: prompt encoders, latent VAE, enlarged U-Net, cross-attention, conditioning, base/refiner handoff, decoder.
3. SD3: prompt encoders, latent patches/tokens, MMDiT blocks, rectified-flow objective, image/text token interaction, decoder.
4. Add a clear "what changed" section: U-Net diffusion to transformer rectified flow; refiner vs MMDiT; dual/extra text encoding.
5. Include benchmark/human-preference tables only with exact values from papers/model cards.
6. Include caveats for variant-specific parameter counts, licenses, data mixture, safety filters, and model-card restrictions.
7. Label unavailable details as "not reported"; do not infer from community implementations.

Visual requirements:
- First viewport should show side-by-side SDXL and SD3 architecture cards.
- Use pipeline diagrams, block internals, and comparison tables.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

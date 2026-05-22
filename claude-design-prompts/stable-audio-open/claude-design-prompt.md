# Claude Design Prompt - Stable Audio Open

Metadata from source inventory:
- Model: Stable Audio Open 1.0
- Year: 2024
- Lab: Stability AI
- Architecture / modality note: open-weights text-to-audio latent diffusion model based on transformer architecture
- Source lead: https://arxiv.org/abs/2407.14358

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Stable Audio Open 1.0.

Primary source leads to use:
- Stable Audio Open paper: https://arxiv.org/abs/2407.14358
- Stable Audio Open model card: https://huggingface.co/stabilityai/stable-audio-open-1.0
- Stable Audio Open demo/project lead: https://stability-ai.github.io/stable-audio-open-demo/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Use the open model card and paper for exact duration limits, sample rate, autoencoder, text encoder, diffusion transformer, license, and training data. Do not conflate Stable Audio Open with later Stable Audio 3 or mobile Small variants.

Model identity:
- Model: Stable Audio Open 1.0
- Family/vendor or lab: Stability AI
- Release/report date: July 2024
- Parameter scale: verify from model card/config
- Target page title: "Stable Audio Open Architecture"

Known architecture and training facts:
- Stable Audio Open is an open-weights text-to-audio model trained with Creative Commons data.
- The paper reports competitive performance and FDopenl3 results for high-quality stereo audio synthesis at 44.1kHz.
- The model card identifies it as a latent diffusion model based on a transformer architecture.
- It is designed for text-to-audio generation, especially samples and sound effects; exact maximum duration must be source-confirmed.

Required architecture content:
1. End-to-end audio generation map: text prompt, text encoder, latent audio space, diffusion transformer denoising, audio decoder/vocoder, waveform output.
2. Show latent audio compression and reconstruction path if reported.
3. Diagram text conditioning and timing/duration conditioning if source-confirmed.
4. Include sample rate, stereo/mono behavior, duration, license/training-data caveats, and model size from official sources.
5. Include evaluation metrics such as FDopenl3 and any human/preference metrics with exact source values.
6. Add caveats for Creative Commons data scope, content limitations, unavailable training details, and differences from closed Stable Audio models.
7. Label every unknown architecture field as "not reported."

Visual requirements:
- First viewport should show text-to-stereo-audio latent diffusion at 44.1kHz.
- Use waveform/spectrogram diagrams, denoising timelines, and metric cards.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

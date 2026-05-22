# Claude Design Prompt - NVIDIA Cosmos Diffusion

Metadata from source inventory:
- Model: NVIDIA Cosmos Diffusion / Cosmos World Foundation Models
- Year: 2025
- Lab: NVIDIA
- Architecture / modality note: world foundation model platform with diffusion models for Text2World and Video2World generation
- Source lead: https://arxiv.org/abs/2501.03575

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for NVIDIA Cosmos Diffusion.

Primary source leads to use:
- Cosmos World Foundation Model Platform for Physical AI: https://arxiv.org/abs/2501.03575
- NVIDIA Cosmos repository: https://github.com/NVIDIA/Cosmos
- Cosmos model-card leads: https://huggingface.co/nvidia/Cosmos-1.0-Diffusion-7B-Text2World and https://huggingface.co/nvidia/Cosmos-1.0-Diffusion-14B-Text2World
- Cosmos Tokenizer lead: https://research.nvidia.com/labs/cosmos-lab/cosmos-tokenizer/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
This prompt is for the Cosmos diffusion models, not a generic Cosmos WFM overview. Keep Text2World, Video2World, tokenizers, guardrails, and other Cosmos platform components distinct. Verify exact model sizes, licenses, tokenizers, context windows, and variants from NVIDIA sources.

Model identity:
- Model: Cosmos-1.0 Diffusion Text2World / Video2World family
- Family/vendor or lab: NVIDIA Cosmos
- Release/report date: January 2025 paper; model cards may have later dates
- Parameter scale: 7B and 14B diffusion variants if confirmed
- Target page title: "NVIDIA Cosmos Diffusion Architecture"

Known architecture and training facts:
- Cosmos is an open-source/open-weight platform for physical AI world foundation models with permissive licenses according to the paper abstract.
- The model-card leads include Cosmos-1.0-Diffusion-7B-Text2World, 14B-Text2World, and 14B-Video2World variants.
- The system includes image/video neural tokenizers and world generation/understanding components.
- Exact diffusion transformer structure, tokenizer compression, guardrail flow, and training data details must be verified from NVIDIA sources.

Required architecture content:
1. End-to-end Text2World map: text prompt, tokenizer/conditioning, diffusion world model, video/world latent, decoded video.
2. End-to-end Video2World map: conditioning video, tokenizer, diffusion continuation/transformation, decoded world video.
3. Diagram Cosmos tokenizer role: image/video encoding, latent tokens, reconstruction; include exact compression if reported.
4. Show variant cards for 7B/14B Text2World and Video2World with source-verified configs.
5. Include platform components only where relevant: guardrails, datasets, transfer models, physical AI workflows.
6. Include benchmark/evaluation cards from NVIDIA sources, labeled source-reported.
7. Add caveats for unreported architecture internals, safety constraints, licensing, and differences between paper platform and released checkpoints.

Visual requirements:
- First viewport should identify Cosmos Diffusion as NVIDIA world generation for physical AI, with Text2World and Video2World lanes.
- Use video latent grids, tokenizer diagrams, and variant comparison tables.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

# Claude Design Prompt - Nemotron-Labs-Diffusion

Metadata from source inventory:
- Model: Nemotron-Labs-Diffusion
- Year: 2026
- Lab: NVIDIA
- Size / active size: family reported at 3B, 8B, and 14B parameters
- Architecture / modality note: tri-mode language model unifying autoregressive, diffusion, and self-speculation decoding
- Source lead: https://research.nvidia.com/publication/2026-05_nemotron-labs-diffusion-tri-mode-language-model-unifying-autoregressive

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Nemotron-Labs-Diffusion.

Primary source leads to use:
- NVIDIA Research publication page: https://research.nvidia.com/publication/2026-05_nemotron-labs-diffusion-tri-mode-language-model-unifying-autoregressive
- NVIDIA model card lead for 3B variant: https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-3B

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
This is a very recent NVIDIA Research model family. Confirm exact variant names, configs, benchmark values, and VLM details from the official publication and model cards. Do not infer dimensions from other Nemotron models.

Model identity:
- Model: Nemotron-Labs-Diffusion
- Family/vendor or lab: NVIDIA
- Release/report date: May 2026
- Parameter scale: 3B, 8B, and 14B family if confirmed
- Target page title: "Nemotron-Labs-Diffusion Architecture"

Known architecture and training facts:
- The model unifies three decoding modes in one architecture: autoregressive decoding, diffusion decoding, and self-speculation.
- It is trained with a joint AR-diffusion objective.
- The publication states diffusion improves lookahead planning while AR provides left-to-right linguistic priors.
- In self-speculation, diffusion drafts while AR verifies.
- NVIDIA reports base, instruct, and vision-language models in the family.
- NVIDIA reports speed/efficiency analysis including diffusion's long-term potential of up to 76.5% more tokens per forward pass than self-speculation under an optimal sampler; include only with exact source wording.

Required architecture content:
1. Three-mode overview: AR path, diffusion path, and self-speculation path sharing one backbone.
2. Show the joint objective: AR next-token loss plus diffusion denoising/masked-token loss, with training schedule if reported.
3. Diagram self-speculation: diffusion draft tokens, AR verifier, acceptance/rejection, and throughput/acceptance metrics.
4. Show how attention masks or inference controls switch the same model between modes if source-confirmed.
5. Include variant cards for 3B, 8B, 14B, base/instruct/VLM, with exact configs only where verified.
6. Include benchmark and speed tables from NVIDIA; label values as source-reported and not independently verified.
7. Include an explicit unknowns panel for missing tokenizer, context length, layer dimensions, vision encoder details, and deployment settings.

Visual requirements:
- First viewport should make the tri-mode mechanism impossible to miss.
- Use side-by-side flow diagrams and a mode switcher/tab control.
- Keep the design professional and technical, closer to an NVIDIA research briefing than a marketing page.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

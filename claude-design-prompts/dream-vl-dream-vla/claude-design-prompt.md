# Claude Design Prompt - Dream-VL and Dream-VLA

Metadata from source inventory:
- Model: Dream-VL / Dream-VLA
- Year: 2025
- Lab: HKU NLP collaborators
- Size / active size: Dream-VLA 7B variant appears in model-card leads; verify exact variants
- Architecture / modality note: diffusion-language-model backbone for vision-language and vision-language-action
- Source lead: https://arxiv.org/abs/2512.22615

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Dream-VL and Dream-VLA.

Primary source leads to use:
- Dream-VL & Dream-VLA paper: https://arxiv.org/abs/2512.22615
- Dream-VLA model card lead: https://huggingface.co/Dream-org/Dream-VLA-7B

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
This paper covers both a diffusion VLM and a VLA extension. Keep the two paths distinct. Do not invent vision encoder, projector, tokenizer, action tokenizer, context length, or robot action dimensions when the sources do not report them.

Model identity:
- Model: Dream-VL and Dream-VLA
- Family/vendor or lab: Dream family / HKU NLP
- Release/report date: December 2025
- Parameter scale: 7B-class if confirmed by model card
- Target page title: "Dream-VL and Dream-VLA Architecture"

Known architecture and training facts:
- Dream-VL builds a vision-language model on a diffusion-based language model backbone.
- Dream-VLA extends Dream-VL through continual pretraining on open robotic datasets.
- The paper emphasizes diffusion's natively bidirectional behavior for visual planning, action chunking, and parallel generation.
- Reported Dream-VLA results include 97.2% average success on LIBERO, 71.4% overall on SimplerEnv-Bridge, and 60.5% overall on SimplerEnv-Fractal; use exact source labels.
- The paper states Dream-VLA surpasses leading models such as pi0 and GR00T-N1 in reported comparisons; include exact benchmark context only from the paper.

Required architecture content:
1. Two-lane map: Dream-VL image/text understanding path and Dream-VLA image/text/action path.
2. Show visual encoder, multimodal projector, diffusion language backbone, and text/action heads only where source-confirmed.
3. Diagram continuous pretraining from Dream-VL to Dream-VLA on robotic datasets.
4. Visualize action chunking and parallel generation under a bidirectional diffusion backbone.
5. Include benchmark cards for LIBERO, SimplerEnv-Bridge, SimplerEnv-Fractal, and VLM benchmarks where exact values are reported.
6. Include caveats for unreported dimensions, action spaces, robot embodiments, context length, and simulator/real-robot transfer.
7. Clearly separate source-reported claims from designer interpretation.

Visual requirements:
- First viewport should show Dream-VL to Dream-VLA progression and the diffusion backbone.
- Use diagrams for multimodal fusion, action chunk refinement, and robot policy evaluation.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

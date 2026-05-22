# Claude Design Prompt - Discrete Diffusion VLA

Metadata from source inventory:
- Model: Discrete Diffusion VLA
- Year: 2025
- Architecture / modality note: single-transformer VLA policy using discrete diffusion for action chunks
- Source lead: https://arxiv.org/abs/2508.20072

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Discrete Diffusion VLA.

Primary source leads to use:
- Discrete Diffusion VLA paper: https://arxiv.org/abs/2508.20072

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
The paper frames the method as a unified discrete-token action decoder. Verify the exact representative backbone, visual encoders, action discretization, and configs from the paper. If the source uses OpenVLA/Prismatic components, label those components precisely and do not imply they are novel to this work.

Model identity:
- Model: Discrete Diffusion VLA
- Family/vendor or lab: VLA action decoding with discrete diffusion
- Release/report date: August 2025
- Parameter scale: verify from paper/config
- Target page title: "Discrete Diffusion VLA Architecture"

Known architecture and training facts:
- The method models discretized action chunks with discrete diffusion in a single-transformer policy.
- It is trained with the same cross-entropy objective as the VLM backbone.
- It preserves diffusion's progressive refinement while matching the discrete token interface of VLMs.
- It uses adaptive decoding order and secondary remasking to revisit uncertain predictions.
- Reported results include 96.3% average success rate on LIBERO, 71.2% visual matching on SimplerEnv Fractal, and 49.3% overall on SimplerEnv Bridge.

Required architecture content:
1. End-to-end VLA map: image encoders, language tokens, VLM backbone, discretized action tokens, diffusion refinement, robot actions.
2. Diagram discrete action tokenization and action chunk structure.
3. Show adaptive decoding order: easy action tokens resolved before harder tokens.
4. Show secondary remasking and uncertainty revisiting across refinement rounds.
5. Compare to AR action decoders and continuous diffusion/flow heads using source-reported distinctions.
6. Include LIBERO and SimplerEnv benchmark cards with exact source-reported metrics.
7. Add caveats for unreported parameter count, context length, tokenizer, action bins, and robot embodiment specifics.

Visual requirements:
- First viewport should show "single transformer + discrete diffusion action chunks."
- Use token-grid refinement diagrams, remasking heatmaps, and action-chunk timelines.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

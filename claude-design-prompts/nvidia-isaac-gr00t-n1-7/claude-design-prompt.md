# Claude Design Prompt - NVIDIA Isaac GR00T N1.7

Metadata from source inventory:
- Model: NVIDIA Isaac GR00T N1.7
- Year: 2026
- Release date: 2026-04-17
- Lab: NVIDIA
- Type / modality: Humanoid robotics reasoning VLA
- Size / active size: Not reported in backlog row
- License / openness: NVIDIA Open Model License / commercially licensed per HF blog
- Architecture / modality note: Open reasoning VLA update for generalized humanoids with HF model collection and deployment artifacts.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for NVIDIA Isaac GR00T N1.7.

Primary sources to use:
- NVIDIA GR00T N1.7 Hugging Face blog: https://huggingface.co/blog/nvidia/gr00t-n1-7
- NVIDIA Hugging Face organization: https://huggingface.co/nvidia
- NVIDIA Isaac GR00T N1 research page for lineage: https://research.nvidia.com/publication/2025-03_nvidia-isaac-gr00t-n1-open-foundation-model-humanoid-robots
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: NVIDIA Isaac GR00T N1.7
- Family/vendor or lab: NVIDIA
- Release/report date: 2026-04-17
- Type/modality: Humanoid robotics reasoning VLA
- Parameter scale: Not reported in backlog row
- License/openness: NVIDIA Open Model License / commercially licensed per HF blog
- Target page title: "NVIDIA Isaac GR00T N1.7 Reasoning VLA Architecture"

Variants or scope to cover:
- GR00T N1.7 reasoning VLA checkpoints and deployment artifacts where official sources list them

Known source-backed facts from the backlog row:
- Open reasoning VLA update for generalized humanoids with HF model collection and deployment artifacts.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains NVIDIA Isaac GR00T N1.7 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show how N1.7 extends the N1 dual-system humanoid VLA with reasoning, deployment artifacts, and model collection components.
- Map perception, language reasoning, action policy, robot embodiment adapters, and deployment/runtime path.
- Include license, model collection, benchmark, and deployment details from the HF blog/cards.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact parameter count, architecture deltas from N1, context limits, and evaluation values are not reported in the backlog row.
   - Do not infer hidden implementation details unless a listed source explicitly supports the inference.
   - If sources disagree, show the disagreement in a caveats panel and avoid choosing an unsupported value.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and saving as `index.html`.
- Use a high-information interface with a left navigation rail or clear section navigation.
- Use dense, readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, and benchmark bars as appropriate.
- Keep the design professional and technical, closer to a research briefing than a marketing landing page.
- The first viewport should immediately identify the model, type/modality, vendor, variants, and high-level source-backed specs.
- Use separate sections for the model's own mechanisms rather than forcing reusable generic components.
- Make the page responsive for desktop and tablet widths.

Asset and packaging constraints:
- Return one HTML file that can be saved as `index.html`.
- Prefer embedded CSS and JavaScript. If local assets are referenced, use relative paths and make the dependencies obvious.
- Do not rely on external runtime frameworks, Observable, remote CDNs, or network-only assets.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through the architecture.
- Include exact source-backed numbers in diagram labels where possible.
- Label missing facts as "not reported" or "unknown in listed sources".
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by NVIDIA Isaac GR00T N1.7.
```

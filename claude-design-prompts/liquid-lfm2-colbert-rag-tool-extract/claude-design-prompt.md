# Claude Design Prompt - Liquid LFM2 ColBERT, RAG, Tool, And Extract Nano Models

Metadata from source inventory:
- Model: Liquid LFM2-ColBERT / RAG / Tool / Extract nano models
- Year: 2025-2026
- Release date: 2025-11 / 2026 leads from backlog
- Lab: Liquid AI
- Type / modality: Retrieval, tool-use, extraction, and task-specialist nano models
- Size / active size: 350M ColBERT lead plus task-specific small variants; exact sizes vary by card
- License / openness: LFM Open License / open weights noted; review commercial-use limits
- Architecture / modality note: Type-specific small models for retrieval, RAG, tool use, extraction, math, transcript, PII extraction, and translation.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Liquid LFM2-ColBERT / RAG / Tool / Extract nano models.

Primary sources to use:
- LFM2-ColBERT-350M model card: https://huggingface.co/LiquidAI/LFM2-ColBERT-350M
- Liquid AI Hugging Face organization: https://huggingface.co/LiquidAI
- Liquid AI models page: https://www.liquid.ai/models
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Liquid LFM2-ColBERT / RAG / Tool / Extract nano models
- Family/vendor or lab: Liquid AI
- Release/report date: 2025-11 / 2026 leads from backlog
- Type/modality: Retrieval, tool-use, extraction, and task-specialist nano models
- Parameter scale: 350M ColBERT lead plus task-specific small variants; exact sizes vary by card
- License/openness: LFM Open License / open weights noted; review commercial-use limits
- Target page title: "Liquid LFM2 Specialist Nano Models Architecture"

Variants or scope to cover:
- LFM2-ColBERT-350M
- LFM2 RAG variants
- LFM2 Tool variants
- LFM2 Extract variants
- Math, transcript, PII extraction, and EN-JP translation variants

Known source-backed facts from the backlog row:
- Type-specific small models for retrieval, RAG, tool use, extraction, math, transcript, PII extraction, and translation.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains Liquid LFM2-ColBERT / RAG / Tool / Extract nano models from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Build a task-family atlas rather than a single model card: retrieval late-interaction, RAG query/doc path, tool-call parsing, extraction labeling, and translation flows.
- For ColBERT, show token-level embeddings and late interaction only where the official card confirms it.
- Use variant cards with source-backed input/output contracts and unknown details marked clearly.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Most specialist variant configs, training objectives, context lengths, and benchmark numbers are not reported in the backlog row.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Liquid LFM2-ColBERT / RAG / Tool / Extract nano models.
```

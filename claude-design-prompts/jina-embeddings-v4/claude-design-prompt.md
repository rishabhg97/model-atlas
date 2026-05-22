# Claude Design Prompt - Jina Embeddings v4

Metadata from source inventory:
- Model: Jina Embeddings v4
- Year: 2025
- Release date: 2025-06-24
- Lab: Jina AI
- Type / modality: Multimodal embedding model
- Size / active size: 3.8B reported in backlog
- License / openness: Qwen Research License per model page; verify reuse constraints
- Architecture / modality note: 3.8B universal embedding model for text, images, PDFs, and screenshots; single-vector and late-interaction outputs.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Jina Embeddings v4.

Primary sources to use:
- Jina Embeddings v4 official model page: https://jina.ai/models/jina-embeddings-v4/
- Jina AI Hugging Face organization: https://huggingface.co/jinaai
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Jina Embeddings v4
- Family/vendor or lab: Jina AI
- Release/report date: 2025-06-24
- Type/modality: Multimodal embedding model
- Parameter scale: 3.8B reported in backlog
- License/openness: Qwen Research License per model page; verify reuse constraints
- Target page title: "Jina Embeddings v4 Architecture"

Variants or scope to cover:
- Jina Embeddings v4 text mode
- Jina Embeddings v4 image/PDF/screenshot mode
- Single-vector output
- Late-interaction output

Known source-backed facts from the backlog row:
- 3.8B universal embedding model for text, images, PDFs, and screenshots; single-vector and late-interaction outputs.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains Jina Embeddings v4 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show document ingestion paths for text, image, PDF, and screenshot inputs.
- Diagram single-vector embeddings versus late-interaction token/patch embeddings and when each is used.
- Include retrieval, reranking, and multimodal search examples only with source-backed metrics.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Backbone architecture, visual encoder, pooling/late-interaction dimensions, and training data details must be verified from official sources.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Jina Embeddings v4.
```

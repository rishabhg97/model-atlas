# Claude Design Prompt - HunyuanVideo And HunyuanVideo 1.5

Metadata from source inventory:
- Model: HunyuanVideo / HunyuanVideo 1.5
- Year: 2025
- Release date: 2025-03 I2V / 2025-11 1.5 lead
- Lab: Tencent Hunyuan
- Type / modality: Video generation
- Size / active size: 1.5 report describes an 8.3B efficient T2V/I2V model per backlog row
- License / openness: Open-source/open-weight claim; verify license per repo/card
- Architecture / modality note: Open video foundation model family; 1.5 is reported as an 8.3B efficient T2V/I2V model.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for HunyuanVideo / HunyuanVideo 1.5.

Primary sources to use:
- HunyuanVideo official repository: https://github.com/Tencent-Hunyuan/HunyuanVideo
- Tencent Hunyuan GitHub organization: https://github.com/Tencent-Hunyuan
- Hugging Face lookup for HunyuanVideo: https://huggingface.co/models?search=HunyuanVideo
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: HunyuanVideo / HunyuanVideo 1.5
- Family/vendor or lab: Tencent Hunyuan
- Release/report date: 2025-03 I2V / 2025-11 1.5 lead
- Type/modality: Video generation
- Parameter scale: 1.5 report describes an 8.3B efficient T2V/I2V model per backlog row
- License/openness: Open-source/open-weight claim; verify license per repo/card
- Target page title: "HunyuanVideo 1.5 Architecture"

Variants or scope to cover:
- HunyuanVideo base/open family
- HunyuanVideo I2V
- HunyuanVideo 1.5 T2V/I2V

Known source-backed facts from the backlog row:
- Open video foundation model family; 1.5 is reported as an 8.3B efficient T2V/I2V model.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains HunyuanVideo / HunyuanVideo 1.5 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Map text/image conditioning, video latent diffusion/DiT path, temporal modeling, decoder, and sampling controls.
- Compare base, I2V, and 1.5 variants with source-backed sizes and capabilities.
- Include motion/quality and efficiency claims only from official repo/report.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact 1.5 report URL, architecture dimensions, training data, and per-benchmark scores are not reported in the backlog row.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by HunyuanVideo / HunyuanVideo 1.5.
```

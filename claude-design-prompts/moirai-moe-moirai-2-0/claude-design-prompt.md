# Claude Design Prompt - Moirai-MoE And Moirai 2.0

Metadata from source inventory:
- Model: Moirai-MoE / Moirai 2.0
- Year: 2025
- Release date: 2025-05 / 2025-11 report leads
- Lab: Salesforce Research / academic collaborators
- Type / modality: Time-series forecasting
- Size / active size: Sparse MoE family; exact parameter counts not reported in backlog row
- License / openness: Paper/code availability needs verification
- Architecture / modality note: Sparse MoE time-series foundation model family; Moirai 2.0 introduces a decoder-only forecasting model trained on 36M series.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Moirai-MoE / Moirai 2.0.

Primary sources to use:
- Moirai-MoE OpenReview lead: https://openreview.net/forum?id=SrEOUSyJcR
- Salesforce AI Research Uni2TS repository lead: https://github.com/SalesforceAIResearch/uni2ts
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Moirai-MoE / Moirai 2.0
- Family/vendor or lab: Salesforce Research / academic collaborators
- Release/report date: 2025-05 / 2025-11 report leads
- Type/modality: Time-series forecasting
- Parameter scale: Sparse MoE family; exact parameter counts not reported in backlog row
- License/openness: Paper/code availability needs verification
- Target page title: "Moirai-MoE And Moirai 2.0 Architecture"

Variants or scope to cover:
- Moirai-MoE
- Moirai 2.0 decoder-only forecasting model

Known source-backed facts from the backlog row:
- Sparse MoE time-series foundation model family; Moirai 2.0 introduces a decoder-only forecasting model trained on 36M series.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains Moirai-MoE / Moirai 2.0 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show time-series tokenization/patching, MoE routing for forecasting, decoder-only Moirai 2.0 path, distribution/quantile output heads, and horizon generation.
- Compare Moirai-MoE with Moirai 2.0 rather than merging them into one architecture.
- Include the 36M-series training scale only with source citation.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact expert counts, router top-k, dimensions, context length, and code/checkpoint license must be verified.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Moirai-MoE / Moirai 2.0.
```

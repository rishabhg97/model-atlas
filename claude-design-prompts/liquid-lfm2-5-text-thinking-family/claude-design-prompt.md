# Claude Design Prompt - Liquid LFM2.5 Text And Thinking Family

Metadata from source inventory:
- Model: Liquid LFM2.5 text + thinking family
- Year: 2026
- Release date: 2026-01 family lead; 2026-03-31 350M lead from backlog
- Lab: Liquid AI
- Type / modality: Efficient on-device agent/reasoning language models
- Size / active size: Base, Instruct, Thinking, JP, 350M, and 1.2B variants reported in backlog
- License / openness: LFM Open License / open weights noted; review commercial-use limits
- Architecture / modality note: LFM2.5 extends LFM2 with 28T-token pretraining and scaled RL per backlog row.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Liquid LFM2.5 text + thinking family.

Primary sources to use:
- Liquid AI LFM2.5 announcement: https://www.liquid.ai/blog/introducing-lfm2-5-the-next-generation-of-on-device-ai
- Liquid AI models page: https://www.liquid.ai/models
- Liquid AI Hugging Face organization: https://huggingface.co/LiquidAI
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Liquid LFM2.5 text + thinking family
- Family/vendor or lab: Liquid AI
- Release/report date: 2026-01 family lead; 2026-03-31 350M lead from backlog
- Type/modality: Efficient on-device agent/reasoning language models
- Parameter scale: Base, Instruct, Thinking, JP, 350M, and 1.2B variants reported in backlog
- License/openness: LFM Open License / open weights noted; review commercial-use limits
- Target page title: "Liquid LFM2.5 Text And Thinking Architecture"

Variants or scope to cover:
- LFM2.5 Base
- LFM2.5 Instruct
- LFM2.5 Thinking
- LFM2.5 JP
- LFM2.5-350M
- LFM2.5-1.2B

Known source-backed facts from the backlog row:
- LFM2.5 extends LFM2 with 28T-token pretraining and scaled RL per backlog row.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains Liquid LFM2.5 text + thinking family from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show the LFM2 to LFM2.5 lineage: base pretraining, instruct tuning, thinking/reasoning adaptation, and Japanese-specialized branch where official sources support it.
- Visualize the on-device agent loop separately from normal next-token decoding if the sources describe tool/agent behavior.
- Use a variant matrix rather than one fictional monolithic architecture.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact layer/block dimensions, context length, tokenizer, RL algorithm details, and benchmark values are not reported in the backlog row.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Liquid LFM2.5 text + thinking family.
```

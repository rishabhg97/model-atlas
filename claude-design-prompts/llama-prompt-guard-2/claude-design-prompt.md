# Claude Design Prompt - Llama Prompt Guard 2

Metadata from source inventory:
- Model: Llama Prompt Guard 2
- Year: 2025
- Release date: 2025-04-29
- Lab: Meta Llama
- Type / modality: Prompt-injection and jailbreak classifier
- Size / active size: 22M and 86M classifiers reported in backlog row
- License / openness: Llama license / open weights per backlog row
- Architecture / modality note: Lightweight text classifiers for prompt-injection and jailbreak detection.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Llama Prompt Guard 2.

Primary sources to use:
- Llama-Prompt-Guard-2-86M model card: https://huggingface.co/meta-llama/Llama-Prompt-Guard-2-86M
- Meta Llama Hugging Face organization: https://huggingface.co/meta-llama
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Llama Prompt Guard 2
- Family/vendor or lab: Meta Llama
- Release/report date: 2025-04-29
- Type/modality: Prompt-injection and jailbreak classifier
- Parameter scale: 22M and 86M classifiers reported in backlog row
- License/openness: Llama license / open weights per backlog row
- Target page title: "Llama Prompt Guard 2 Architecture"

Variants or scope to cover:
- Llama-Prompt-Guard-2-22M
- Llama-Prompt-Guard-2-86M

Known source-backed facts from the backlog row:
- Lightweight text classifiers for prompt-injection and jailbreak detection.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains Llama Prompt Guard 2 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show user/developer/tool prompt input, tokenizer, lightweight Llama classifier backbone, classification head, score thresholds, and security decision output.
- Compare 22M and 86M models by intended latency/accuracy tradeoff where official cards report it.
- Include attack categories and calibration caveats from the model card.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact 22M model card URL, thresholds, tokenizer details, and benchmark scores are not reported in the backlog row.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Llama Prompt Guard 2.
```

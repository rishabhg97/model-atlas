# Claude Design Prompt - NVIDIA Parakeet-TDT-0.6B v2 And v3

Metadata from source inventory:
- Model: NVIDIA Parakeet-TDT-0.6B v2 / v3
- Year: 2025
- Release date: 2025-05 / 2025-09
- Lab: NVIDIA NeMo
- Type / modality: ASR / speech-to-text
- Size / active size: 0.6B class reported in model name/backlog
- License / openness: Public HF checkpoints; verify NVIDIA license per card
- Architecture / modality note: FastConformer + TDT automatic speech recognition family; v3 extends multilingual ASR coverage.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for NVIDIA Parakeet-TDT-0.6B v2 / v3.

Primary sources to use:
- Parakeet-TDT-0.6B-v2 model card: https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2
- NVIDIA NeMo ASR model docs: https://docs.nvidia.com/nemo-framework/user-guide/25.09/nemotoolkit/asr/models.html
- NVIDIA Hugging Face organization: https://huggingface.co/nvidia
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: NVIDIA Parakeet-TDT-0.6B v2 / v3
- Family/vendor or lab: NVIDIA NeMo
- Release/report date: 2025-05 / 2025-09
- Type/modality: ASR / speech-to-text
- Parameter scale: 0.6B class reported in model name/backlog
- License/openness: Public HF checkpoints; verify NVIDIA license per card
- Target page title: "NVIDIA Parakeet-TDT-0.6B v2 And v3 Architecture"

Variants or scope to cover:
- Parakeet-TDT-0.6B-v2
- Parakeet-TDT-0.6B-v3

Known source-backed facts from the backlog row:
- FastConformer + TDT automatic speech recognition family; v3 extends multilingual ASR coverage.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains NVIDIA Parakeet-TDT-0.6B v2 / v3 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show audio feature extraction, FastConformer encoder, TDT prediction/joint network, decoding, timestamps, and transcript output.
- Compare v2 and v3 language coverage and supported tasks only where cards/docs report them.
- Include throughput/accuracy panels for official WER or speed metrics if available.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact encoder layer count, subsampling, vocabulary, supported languages, and v3 card URL must be verified from official sources.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by NVIDIA Parakeet-TDT-0.6B v2 / v3.
```

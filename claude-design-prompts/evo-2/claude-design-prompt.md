# Claude Design Prompt - Evo 2

Metadata from source inventory:
- Model: Evo 2
- Year: 2025
- Release date: 2025-02-19
- Lab: Arc Institute / NVIDIA / Stanford / UC Berkeley / UCSF
- Type / modality: Genomic foundation model
- Size / active size: Not reported in backlog row; trained on 9.3T nucleotide tokens with up to 1M-token context per backlog row
- License / openness: Code, data, and weights shared as fully open-source per announcement
- Architecture / modality note: StripedHyena 2 architecture trained on 9.3T nucleotide tokens across 128K+ genomes; up to 1M-token genetic context.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Evo 2.

Primary sources to use:
- Arc Institute Evo 2 announcement: https://arcinstitute.org/news/evo2
- Evo 2 GitHub repository lead: https://github.com/ArcInstitute/evo2
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Evo 2
- Family/vendor or lab: Arc Institute / NVIDIA / Stanford / UC Berkeley / UCSF
- Release/report date: 2025-02-19
- Type/modality: Genomic foundation model
- Parameter scale: Not reported in backlog row; trained on 9.3T nucleotide tokens with up to 1M-token context per backlog row
- License/openness: Code, data, and weights shared as fully open-source per announcement
- Target page title: "Evo 2 Genomic Foundation Model Architecture"

Variants or scope to cover:
- Evo 2 model checkpoints where official sources list them

Known source-backed facts from the backlog row:
- StripedHyena 2 architecture trained on 9.3T nucleotide tokens across 128K+ genomes; up to 1M-token genetic context.
- Treat the backlog row as a source lead and verify exact dimensions, benchmark numbers, license terms, and release artifacts against the official URLs above.

Goal:
Build a visual architecture atlas page that explains Evo 2 from its native inputs to its outputs. The page should be accurate to the listed sources, visually rich, and specific to this model type. Do not make a generic transformer, diffusion, embedding, speech, robotics, or safety-model explainer.

Required architecture content:
1. End-to-end model map:
   - Show the native input path, preprocessing/tokenization/feature extraction, backbone or generative core, task heads or decoders, post-processing, and final outputs.
   - Label exact dimensions and counts only where official sources report them.
   - If a dimension or mechanism is unavailable, label it as "not reported" rather than guessing.

2. Model-specific mechanisms:
- Show nucleotide tokenization, long-context sequence processing, StripedHyena 2 blocks, genomic prediction/generation heads, and variant-effect workflows.
- Make 1M-token context and long-range genomic dependencies visible.
- Include data scale, genome coverage, and official benchmarks only with source-backed values.

3. Training, data, and post-training:
   - Show pretraining, supervised tuning, RL, distillation, diffusion/flow training, retrieval training, or task-specific fine-tuning only where the sources report them.
   - Include data scale, modality mix, safety filtering, simulator/robot data, or domain data only with source-backed labels.

4. Benchmarks and reported numbers:
   - Include official benchmark tables, score cards, WER/BLEU/FID/retrieval/forecast/safety/robotics metrics, task success rates, or ablations only when they appear in the listed sources.
   - Clearly label all benchmark values as source-reported, not independently verified.

5. Unknowns and caveats:
- Exact parameter counts, layer dimensions, tokenizer alphabet, and per-task head details are not reported in the backlog row.
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
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Evo 2.
```

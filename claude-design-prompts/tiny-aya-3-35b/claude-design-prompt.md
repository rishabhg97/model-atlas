# Claude Design Prompt - Tiny Aya 3.35B

Metadata from source inventory:
- Model: Tiny Aya 3.35B
- Year: 2026
- Release date: 2026-02-13
- Lab: Cohere
- Size / active size: 3.35B
- License / openness: CC-BY-NC-4.0
- Architecture / modality note: Dense Transformer; parallel block; sliding-window attention.
- Source strength: Raschka table
- Source lead: https://huggingface.co/models?search=Tiny+Aya+3.35B
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md
- Local report provenance: /Users/rigarg/Downloads/raschka_gallery_2024plus_augmentation.md and /Users/rigarg/Downloads/deep-research-report (1).md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Tiny Aya 3.35B.

Primary source leads to use:
- Hugging Face lookup for Tiny Aya 3.35B: https://huggingface.co/models?search=Tiny+Aya+3.35B
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md
- Local report provenance named by the inventory: /Users/rigarg/Downloads/raschka_gallery_2024plus_augmentation.md and /Users/rigarg/Downloads/deep-research-report (1).md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.

Suggested primary-source search queries:
- "Tiny Aya 3.35B" "model card"
- "Tiny Aya 3.35B" "technical report"
- "Tiny Aya 3.35B" "architecture" "config"
- "Tiny Aya 3.35B" "benchmark" "Cohere"

Primary-source checklist for this model:
- Official model card or repository from Cohere.
- Official technical report, paper, release blog, or documentation page for Tiny Aya 3.35B.
- Official configuration file or architecture table, if available.
- Official benchmark table, evaluation report, or model-card metrics, if available.
- License or acceptable-use terms from the releasing lab.

Important source caveat:
The local inventory is a starting lead, not a fully verified primary-source dossier. Do not invent official URLs, model-card facts, dimensions, benchmark scores, tokenizer details, or training details. First use the Hugging Face lookup lead to find official model cards, repositories, technical reports, release posts, or benchmark tables. If a fact is not confirmed by primary sources, label it as "unknown in source inventory" or "not reported" in the visualization.

Model identity from the inventory:
- Model: Tiny Aya 3.35B
- Family/vendor or lab: Cohere
- Release/report date: 2026-02-13
- Release year: 2026
- Parameter scale: 3.35B
- Active parameter scale: unknown in source inventory
- License or openness: CC-BY-NC-4.0
- Inventory source strength: Raschka table
- Target page title: "Tiny Aya 3.35B Architecture"

Known architecture and modality facts from the inventory:
- Architecture / modality note: Dense Transformer; parallel block; sliding-window attention.
- Attention mechanism lead: unknown in source inventory
- Positional encoding lead: unknown in source inventory
- Context length: unknown in source inventory
- Layer count: unknown in source inventory
- Hidden size: unknown in source inventory
- Attention heads: unknown in source inventory
- KV heads: unknown in source inventory
- MLP width: unknown in source inventory
- Vocabulary size: unknown in source inventory
- Tokenizer: unknown in source inventory
- Benchmark numbers: unknown in source inventory

Goal:
Build a visual architecture atlas page that explains Tiny Aya 3.35B from input tokens or modality inputs to output behavior. The page should be accurate to verified sources, visually rich, and specific to Tiny Aya 3.35B. Do not make a generic transformer explainer.

Required architecture content:
1. End-to-end model map:
   - Show tokenizer or input preparation, embeddings, repeated blocks, prediction heads, post-processing, and auxiliary heads only where verified.
   - Label exact dimensions and counts only after primary-source confirmation.
   - If a dimension is unavailable, show it as "unknown in source inventory" rather than guessing.

2. Block internals:
   - Draw the block structure implied by verified sources and the inventory note: Dense Transformer; parallel block; sliding-window attention.
   - Include normalization order, residual paths, attention module, feed-forward or MoE module, activation, output projection, routing or gating, and recurrent or hybrid components where source-backed.
   - Include equations or compact math labels for important source-backed operations.

3. Attention and sequence handling:
   - Explain the verified attention variant. Inventory lead: unknown in source inventory.
   - Explain positional encoding. Inventory lead: unknown in source inventory.
   - Include KV-cache behavior, grouped or multi-query details, sliding window/global attention, sparse attention, recurrence, state-space behavior, or long-context extensions only if confirmed.

4. Feed-forward, MoE, hybrid, or modality internals:
   - If dense MLP: show activation, gate/up/down projections, intermediate size, and normalization details where reported.
   - If MoE: show shared or routed experts, number of experts, top-k, router scoring, load balancing, expert parallelism, and active parameter count where reported.
   - If hybrid, multimodal, speech, video, medical, code, or reasoning-specific: create dedicated diagrams for those mechanisms where confirmed.

5. Model-specific sections to create from the inventory leads:
   - Dense Transformer
   - parallel block
   - sliding-window attention
   - Source verification level: Raschka table
   - For any additional mechanisms found in primary sources, add separate visual sections or tabs with diagrams rather than plain bullet lists.

6. Training and post-training:
   - Show pretraining data, curriculum, sequence schedule, SFT, RL, distillation, alignment, or reasoning-mode pipeline only where reported.
   - If the model is a reasoning, multimodal, medical, speech, video, code, or world model, include the relevant input/output and post-training pipeline after source confirmation.

7. Benchmarks and reported numbers:
   - Include benchmark tables or score cards from primary sources when available.
   - Clearly label all benchmark values as source-reported and not independently verified.
   - If no benchmark numbers are confirmed, include a compact "Benchmarks not reported in source inventory" note.

8. Unknowns and caveats:
   - Use a visible caveats section for unknown details.
   - Label missing facts as "unknown in source inventory" unless primary sources confirm them.
   - Do not infer implementation details solely from similar model families.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and adding to a static atlas.
- Use a high-information interface with a left navigation rail or clear section navigation.
- Use dense, readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, and benchmark bars as appropriate.
- Keep the design professional and technical, closer to a research briefing than a marketing landing page.
- The first viewport should immediately identify Tiny Aya 3.35B and show the high-level specs from the inventory.
- Use separate sections for model-specific mechanisms rather than forcing reusable generic components.
- Make the page responsive for desktop and tablet widths.

Asset and packaging constraints:
- Return one HTML file that can be saved as index.html.
- Prefer embedded CSS and JavaScript. If you reference local assets, use relative paths and make dependencies obvious.
- Do not rely on external runtime frameworks, Observable, remote CDNs, or network-only assets.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through the architecture.
- Include exact source-backed numbers in diagram labels where possible.
- Mirror the verified report or model-card structure for Tiny Aya 3.35B when available.
- Avoid generic statements like "uses transformer blocks" unless paired with the concrete mechanism and dimensions verified for Tiny Aya 3.35B.
```

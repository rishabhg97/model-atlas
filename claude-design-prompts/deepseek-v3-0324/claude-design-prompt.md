# Claude Design Prompt - DeepSeek-V3-0324

Metadata from source inventory:
- Model: DeepSeek-V3-0324
- Year: 2025
- Release date: 2025-03
- Lab: DeepSeek
- Size / active size: 685B
- License / openness: MIT
- Architecture / modality note: DeepSeek-V3 update; large open-weight MoE text model.
- Source strength: Deep table
- Source lead: https://huggingface.co/models?search=DeepSeek-V3-0324
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md
- Local report provenance: /Users/rigarg/Downloads/raschka_gallery_2024plus_augmentation.md and /Users/rigarg/Downloads/deep-research-report (1).md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for DeepSeek-V3-0324.

Primary source leads to use:
- Hugging Face lookup for DeepSeek-V3-0324: https://huggingface.co/models?search=DeepSeek-V3-0324
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md
- Local report provenance named by the inventory: /Users/rigarg/Downloads/raschka_gallery_2024plus_augmentation.md and /Users/rigarg/Downloads/deep-research-report (1).md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.

Suggested primary-source search queries:
- "DeepSeek-V3-0324" "model card"
- "DeepSeek-V3-0324" "technical report"
- "DeepSeek-V3-0324" "architecture" "config"
- "DeepSeek-V3-0324" "benchmark" "DeepSeek"

Primary-source checklist for this model:
- Official model card or repository from DeepSeek.
- Official technical report, paper, release blog, or documentation page for DeepSeek-V3-0324.
- Official configuration file or architecture table, if available.
- Official benchmark table, evaluation report, or model-card metrics, if available.
- License or acceptable-use terms from the releasing lab.

Important source caveat:
The local inventory is a starting lead, not a fully verified primary-source dossier. Do not invent official URLs, model-card facts, dimensions, benchmark scores, tokenizer details, or training details. First use the Hugging Face lookup lead to find official model cards, repositories, technical reports, release posts, or benchmark tables. If a fact is not confirmed by primary sources, label it as "unknown in source inventory" or "not reported" in the visualization.

Model identity from the inventory:
- Model: DeepSeek-V3-0324
- Family/vendor or lab: DeepSeek
- Release/report date: 2025-03
- Release year: 2025
- Parameter scale: 685B
- Active parameter scale: unknown in source inventory
- License or openness: MIT
- Inventory source strength: Deep table
- Target page title: "DeepSeek-V3-0324 Architecture"

Known architecture and modality facts from the inventory:
- Architecture / modality note: DeepSeek-V3 update; large open-weight MoE text model.
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
Build a visual architecture atlas page that explains DeepSeek-V3-0324 from input tokens or modality inputs to output behavior. The page should be accurate to verified sources, visually rich, and specific to DeepSeek-V3-0324. Do not make a generic transformer explainer.

Required architecture content:
1. End-to-end model map:
   - Show tokenizer or input preparation, embeddings, repeated blocks, prediction heads, post-processing, and auxiliary heads only where verified.
   - Label exact dimensions and counts only after primary-source confirmation.
   - If a dimension is unavailable, show it as "unknown in source inventory" rather than guessing.

2. Block internals:
   - Draw the block structure implied by verified sources and the inventory note: DeepSeek-V3 update; large open-weight MoE text model.
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
   - DeepSeek-V3 update
   - large open-weight MoE text model
   - Source verification level: Deep table
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
- The first viewport should immediately identify DeepSeek-V3-0324 and show the high-level specs from the inventory.
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
- Mirror the verified report or model-card structure for DeepSeek-V3-0324 when available.
- Avoid generic statements like "uses transformer blocks" unless paired with the concrete mechanism and dimensions verified for DeepSeek-V3-0324.
```

# Claude Design Prompt Template For A New Atlas Model

Use this template when the user asks to add a model that does not yet have a downloaded HTML artifact. Fill in every bracketed field with model-specific facts from primary sources before giving the prompt to the user.

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for [MODEL_NAME].

Primary sources to use:
- [SOURCE_1_TITLE]: [SOURCE_1_URL]
- [SOURCE_2_TITLE]: [SOURCE_2_URL]
- [SOURCE_3_TITLE]: [SOURCE_3_URL]

Model identity:
- Model: [EXACT_MODEL_NAME]
- Family/vendor: [FAMILY_OR_VENDOR]
- Release/report date: [DATE_IF_KNOWN]
- Parameter scale: [TOTAL_PARAMS], [ACTIVE_PARAMS_IF_MOE]
- Context length: [CONTEXT_LENGTH]
- Target page title: "[MODEL_NAME] Architecture"

Goal:
Build a visual architecture atlas page that explains [MODEL_NAME] from input tokens to output behavior. The page should be accurate to the sources, visually rich, and model-specific. Do not make a generic transformer explainer.

Required architecture content:
1. End-to-end model map:
   - Show tokenizer / input preparation, embedding, repeated blocks, prediction heads, post-processing, and any auxiliary heads.
   - Label exact dimensions and counts where known: [LAYERS], [HIDDEN_SIZE], [ATTENTION_HEADS], [KV_HEADS], [MLP_WIDTH], [VOCAB_SIZE], [CONTEXT_LENGTH].

2. Transformer/block internals:
   - Draw the block structure used by this model: normalization order, residual paths, attention module, MLP/MoE module, activation, output projection, and any special routing or gating.
   - Include equations or compact math labels for the important operations.

3. Attention mechanism:
   - Explain the exact attention variant: [ATTENTION_TYPE].
   - Include positional encoding: [POSITIONAL_ENCODING].
   - Include KV-cache behavior, grouped/multi-query details, sliding window/global attention/sparse attention if present, and any long-context extensions.

4. Feed-forward or MoE internals:
   - If dense MLP: show activation, gate/up/down projections, intermediate size, and any clamp/normalization details.
   - If MoE: show shared/routed experts, number of experts, top-k, router scoring function, load balancing, expert parallelism, and active parameter count.

5. Model-specific innovations:
   - Create separate sections/tabs for each named innovation in the report:
     - [INNOVATION_1]
     - [INNOVATION_2]
     - [INNOVATION_3]
   - Each innovation should have a dedicated diagram, flow, or math card. Avoid just listing bullets.

6. Training and post-training:
   - Show pretraining data/sequence schedule if reported.
   - Show SFT/RL/distillation/alignment pipeline if reported.
   - Include inference modes or reasoning modes if the model exposes them.

7. Benchmarks and reported numbers:
   - Include benchmark tables or score cards from the sources when available.
   - Reproduce the model's reported scores for [BENCHMARKS_TO_INCLUDE].
   - Clearly label all benchmark values as source-reported, not independently verified.

8. Unknowns and caveats:
   - If a fact is missing from the sources, label it as "not reported" or "unknown".
   - Do not infer hidden implementation details unless the source explicitly supports the inference.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and adding to a static atlas.
- Use a high-information interface with a left navigation rail or clear section navigation.
- Use dense, readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, and benchmark bars as appropriate.
- Keep the design professional and technical, closer to a research briefing than a marketing landing page.
- The first viewport should immediately identify the model and show high-level specs.
- Use separate sections for model-specific mechanisms rather than forcing reusable generic components.
- Make the page responsive for desktop and tablet widths.

Asset and packaging constraints:
- Return one HTML file that can be saved as `index.html`.
- Prefer embedded CSS and JavaScript. If you reference local assets, use relative paths and make the dependencies obvious.
- Do not rely on external runtime frameworks, Observable, remote CDNs, or network-only assets.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through the architecture.
- Include exact source-backed numbers in diagram labels where possible.
- Use the model's own report structure as inspiration for sections. For example, if the report has special sections on [REPORT_SPECIFIC_SECTION_NAMES], mirror those as dedicated visual sections.
- Avoid generic statements like "uses transformer blocks" unless paired with the concrete mechanism and dimensions used by [MODEL_NAME].
```

## Agent Checklist Before Giving The Prompt To The User

- Replace every bracketed placeholder.
- Include only source URLs that actually apply to the target model.
- Add report-specific section names and benchmark names.
- Mention any source/version caveats directly in the prompt.
- Keep the output as one copyable prompt block for the user to paste into Claude Design.

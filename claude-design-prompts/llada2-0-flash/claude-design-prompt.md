# Claude Design Prompt - LLaDA2.0 Flash

Metadata from source inventory:
- Model: LLaDA2.0-flash / LLaDA2.0 family
- Year: 2025
- Lab: inclusionAI / Ant Group
- Size / active size: 100B-class MoE; source leads report about 103B total and 6B active for flash
- Architecture / modality note: discrete diffusion language model converted from autoregressive models; block diffusion with WSD-style training; MoE variants
- Source lead: https://arxiv.org/abs/2512.15745

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for LLaDA2.0-flash.

Primary source leads to use:
- LLaDA2.0: Scaling Up Diffusion Language Models to 100B: https://arxiv.org/abs/2512.15745
- LLaDA2.0-flash model card lead: https://huggingface.co/inclusionAI/LLaDA2.0-flash

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
The source leads identify the model family and training strategy, but some low-level config fields may only appear in model cards or config files. Do not invent layer count, hidden size, exact expert count, tokenizer, context length, benchmark values, or sampling defaults. If a fact is unavailable, label it as "not reported" or "unknown in the listed sources."

Model identity:
- Model: LLaDA2.0-flash
- Family/vendor or lab: inclusionAI / Ant Group
- Release/report date: December 2025
- Parameter scale: 100B-class / about 103B total if confirmed by model card
- Active parameter scale: about 6B active if confirmed by model card
- Target page title: "LLaDA2.0-flash Architecture"

Known architecture and training facts:
- LLaDA2.0 scales discrete diffusion language models to frontier MoE sizes through conversion from pretrained autoregressive models rather than full training from scratch.
- The paper describes a 3-phase block-level WSD training scheme: warm-up with progressively increasing block size, stable full-sequence diffusion, and decay back to compact block diffusion.
- Post-training includes SFT and DPO alignment.
- The family includes LLaDA2.0-mini and LLaDA2.0-flash, both instruction-tuned MoE diffusion language models designed for practical deployment.
- The model preserves parallel decoding advantages of diffusion language models; exact sampler settings and remasking policy must be source-verified.

Required architecture content:
1. End-to-end map from prompt tokens to masked/noisy sequence, diffusion denoising rounds, MoE transformer blocks, final token sequence, and optional AR-compatible behavior if reported.
2. Diagram the block-diffusion schedule: warm-up block growth, full-sequence stable diffusion, and decay/compact block diffusion.
3. Show MoE internals only where verified: router, active experts, total experts, shared experts, top-k, load balancing, and active parameter count.
4. Show conversion from AR checkpoint to dLLM as a first-class visual pipeline: inherited AR knowledge, progressive adaptation, diffusion objective, SFT, DPO.
5. Include diffusion decoding controls: number of denoising steps, confidence-based remasking, block size, parallel token updates, and speed/quality tradeoffs where reported.
6. Include benchmark cards from the paper/model card if available; label all values as source-reported.
7. Include a visible caveats panel for unknown context length, tokenizer, layer dimensions, attention type, routing details, and deployment constraints unless verified.

Visual requirements:
- Make a dense technical research-briefing page, not a generic transformer explainer.
- First viewport must identify LLaDA2.0-flash as a 100B-class MoE discrete diffusion language model and show the WSD block-diffusion idea.
- Use diagrams, tables, timelines, and compact math labels for masking, denoising, and MoE routing.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

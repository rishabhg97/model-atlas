# Claude Design Prompt - Dream 7B

Metadata from source inventory:
- Model: Dream 7B
- Year: 2025
- Lab: HKU NLP / Huawei Noah's Ark Lab
- Size / active size: 7B
- Architecture / modality note: open diffusion large language model for reasoning and flexible inference
- Source leads: https://hkunlp.github.io/blog/2025/dream/ and https://arxiv.org/abs/2508.15487

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Dream 7B.

Primary source leads to use:
- Dream 7B blog/project page: https://hkunlp.github.io/blog/2025/dream/
- Dream 7B paper lead: https://arxiv.org/abs/2508.15487
- Dream model card lead: https://huggingface.co/Dream-org/Dream-v0-Instruct-7B

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
The project page and model cards should be treated as the source of truth for open weights, inference controls, benchmarks, and exact variants. If the paper or card does not report a config field, label it "not reported." Do not infer Dream's dimensions from other 7B LLMs.

Model identity:
- Model: Dream 7B / Dream-v0-Instruct-7B where applicable
- Family/vendor or lab: HKU NLP and Huawei Noah's Ark Lab
- Release/report date: 2025
- Parameter scale: 7B
- Target page title: "Dream 7B Architecture"

Known architecture and training facts:
- Dream 7B is presented as an open diffusion large language model with strong reasoning and planning behavior.
- It uses iterative diffusion-style text generation instead of strict left-to-right decoding.
- The project highlights flexible inference: adjusting diffusion timesteps can trade speed for output quality.
- It has base and instruct variants; exact pretraining, SFT, RL, or distillation details must be checked in the paper/model card.

Required architecture content:
1. End-to-end map from tokenized prompt to noisy/masked latent sequence, denoising rounds, model blocks, confidence/remasking, and final answer.
2. Show flexible inference controls: denoising steps, parallel refinement, speed-quality dial, and any source-reported sampler settings.
3. Diagram the language diffusion backbone and block internals only where verified: attention mask, normalization order, MLP, embedding/output head, positional encoding, and context length.
4. Include a reasoning/planning section: how diffusion's bidirectional or any-order refinement is claimed to support planning; avoid unsupported claims.
5. Show training/post-training pipeline from source: pretraining, instruction tuning, alignment, and datasets only where reported.
6. Add benchmark panels for reported reasoning, dialogue, and general-language evaluations; label as source-reported.
7. Include an "Unknowns and caveats" section for missing exact dimensions, tokenizer, data mixture, and unavailable benchmark numbers.

Visual requirements:
- Make this a single technical atlas page with a left rail or section navigation.
- First viewport should identify Dream 7B as an open 7B diffusion LLM and show the timestep speed/quality control.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

# Claude Design Prompt - LLaDA 8B

Metadata from source inventory:
- Model: LLaDA 8B
- Year: 2025
- Lab: ML-GSAI and collaborators
- Size / active size: 8B dense language diffusion model
- Architecture / modality note: masked discrete diffusion language model trained from scratch with pretraining and SFT
- Source lead: https://arxiv.org/abs/2502.09992

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for LLaDA 8B.

Primary source leads to use:
- Large Language Diffusion Models: https://arxiv.org/abs/2502.09992
- LLaDA project/repository lead: https://github.com/ML-GSAI/LLaDA

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
LLaDA is often summarized as an 8B masked diffusion language model competitive with LLaMA3 8B, but exact implementation details must come from the paper, official repository, model card, or config. Label unavailable layer counts, hidden dimensions, tokenizer details, and benchmark values as "not reported" rather than filling them in from similar LLaMA-family models.

Model identity:
- Model: LLaDA 8B
- Family/vendor or lab: Large Language Diffusion with mAsking
- Release/report date: February 2025
- Parameter scale: 8B
- Target page title: "LLaDA 8B Architecture"

Known architecture and training facts:
- LLaDA challenges left-to-right autoregressive modeling by using a masked diffusion model for language.
- The forward process masks data; the model learns a reverse process/mask predictor to reconstruct tokens.
- The reported training paradigm includes pretraining and supervised fine-tuning under the diffusion objective.
- Source leads report competitive in-context learning versus strong 8B autoregressive models and instruction-following after SFT.
- Generation is non-autoregressive/iterative, with parallel token updates and remasking or confidence-based refinement where source-confirmed.

Required architecture content:
1. End-to-end map: tokenizer, clean sequence, masking/noising schedule, transformer mask predictor, iterative denoising, final text.
2. Show the difference between AR next-token prediction and LLaDA masked diffusion using side-by-side flows.
3. Draw the LLaDA block internals from source/config: normalization, attention, MLP, residual paths, embeddings, output head, and any bidirectional attention mask.
4. Visualize pretraining and SFT as diffusion training, including objective labels and masked-token prediction target.
5. Include sampling controls: denoising steps, remasking policy, confidence scores, block/full-sequence behavior, and speed/quality tradeoff where reported.
6. Include source-reported benchmark cards for in-context learning and instruction following where exact numbers are present.
7. Add an "Unknowns" section for missing architecture dimensions, tokenizer/context length, and inference defaults.

Visual requirements:
- Keep the page technical, compact, and model-specific.
- The first viewport should immediately show "LLaDA 8B" plus the masked diffusion language-model loop.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

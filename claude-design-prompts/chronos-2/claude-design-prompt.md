# Claude Design Prompt - Chronos-2

Metadata from source inventory:
- Model: Chronos-2
- Year: 2025 paper / 2026 public inventory row
- Release date: 2025-10-20 public release noted by official GitHub; arXiv v1 submitted 2025-10-17
- Lab: Amazon / AWS
- Type / modality: Time-series foundation model for zero-shot forecasting
- Size / active size: 120M parameters, dense encoder-only model
- License / openness: Apache-2.0 on Hugging Face model card; public weights and code
- Architecture / modality note: T5-inspired encoder-only transformer with time attention, group attention, patch embeddings, robust scaling with arcsinh, REG token, and direct multi-step quantile forecasting.
- Local inventory provenance: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Chronos-2.

Primary sources to use:
- Chronos-2 Hugging Face model card: https://huggingface.co/amazon/chronos-2
- Chronos-2 technical report: https://arxiv.org/abs/2510.15821
- Chronos-2 arXiv HTML technical report: https://arxiv.org/html/2510.15821
- Amazon Science launch blog: https://www.amazon.science/blog/introducing-chronos-2-from-univariate-to-universal-forecasting
- Official Chronos forecasting repository: https://github.com/amazon-science/chronos-forecasting
- Chronos-2 implementation source: https://github.com/amazon-science/chronos-forecasting/blob/main/src/chronos/chronos2/model.py
- Chronos-2 layer source: https://github.com/amazon-science/chronos-forecasting/blob/main/src/chronos/chronos2/layers.py
- Chronos-2 HF config: https://huggingface.co/amazon/chronos-2/raw/main/config.json
- Local backlog row: /Users/rigarg/Desktop/agents/model-atlas/oss-model-releases-2025-plus.md

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in this workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.
- This is a prompt for a future downloaded HTML artifact, not a request to edit the atlas index or existing model pages.

Model identity:
- Model: Chronos-2
- Family/vendor or lab: Amazon / AWS, Chronos time-series foundation model family
- Release/report date: arXiv v1 2025-10-17; official GitHub release note 2025-10-20; SageMaker deployment update 2025-12-30
- Type/modality: Time-series forecasting foundation model
- Parameter scale: 120M parameters
- Active parameters: 120M dense; not MoE
- Context length: 8192 time steps
- Max prediction length: 1024 time steps
- Patch size / stride: input patch size 16, input patch stride 16, output patch size 16
- Max output patches: 64
- Target page title: "Chronos-2 Forecasting Architecture"

Goal:
Build a visual architecture atlas page that explains Chronos-2 from raw tabular/time-series input to probabilistic forecast output. The page should be accurate to the listed sources, visually rich, and deeply specific to Chronos-2. Do not make a generic transformer, language-model, diffusion, embedding, robotics, or weather-model explainer.

First viewport requirements:
- Immediately identify "Chronos-2" as Amazon's 120M-parameter universal time-series forecasting model.
- Show a compact spec strip with:
  - 120M params
  - encoder-only / T5-inspired
  - 12 layers
  - d_model 768
  - d_ff 3072
  - 12 attention heads
  - d_kv 64
  - 8192 context length
  - 1024 max prediction length
  - 16-step input/output patches
  - 21 quantiles
  - Apache-2.0
- Include a clear "source-reported, not independently verified" note.

Required architecture content:
1. End-to-end inference pipeline:
   - Draw the full path:
     1. pandas-style input table or tensors: item_id / timestamp / target, optional past covariates, optional known future covariates.
     2. Group assignment with group_ids: independent univariate, cross-learning group, multivariate variates, or target plus covariates.
     3. Robust scaling / instance normalization using historical mean and standard deviation, followed by arcsinh-style variance stabilization when enabled.
     4. Missing-value handling and binary masks.
     5. Time index feature construction.
     6. Non-overlapping 16-step patching of context and future sections.
     7. Patch embedding residual network from [time encoding, values, mask] to d_model=768.
     8. REG separator / attention-sink token between context and future patches.
     9. 12 repeated Chronos-2 encoder blocks.
     10. Slice future-patch hidden states.
     11. Quantile output residual block.
     12. De-normalization / inverse transform.
     13. Output multi-step probabilistic forecasts.
   - Use the exact known dimensions:
     - context patches: ceil(context_length / 16), max 8192 / 16 = 512 context patches
     - future patches: up to 64
     - future horizon: up to 64 * 16 = 1024 steps
     - patch input vector: 3 * 16 = 48 features per patch because time encoding, value patch, and mask patch are concatenated.
     - output head: 21 quantiles * 16 output steps per future patch.
   - Show that the page is about time-series values, not language tokens. The HF config has vocab_size=2 only for PAD and REG special tokens.

2. Chronos-2 encoder block internals:
   - Draw each of the 12 blocks as:
     - TimeSelfAttention
     - GroupSelfAttention
     - FeedForward
   - Use labels from the implementation:
     - Chronos2EncoderBlock.layer[0] = TimeSelfAttention
     - Chronos2EncoderBlock.layer[1] = GroupSelfAttention
     - Chronos2EncoderBlock.layer[2] = FeedForward
   - Show final layer norm and dropout after the stack.
   - Include config values:
     - num_layers=12
     - num_heads=12
     - d_model=768
     - d_ff=3072
     - d_kv=64
     - dropout_rate=0.1
     - layer_norm_epsilon=1e-6
     - dense_act_fn=relu
     - rope_theta=10000
     - torch_dtype=float32 in the HF config.
   - If drawing residual paths and pre/post-norm order, check the layer source and label exactly; if unsure, mark the norm placement as implementation-detail to verify rather than inventing.

3. Time attention versus group attention:
   - Create a dedicated "Two attention axes" section with a matrix or small interactive tabs:
     - Time attention: self-attention along the temporal patch axis within a single input dimension, using RoPE for positions.
     - Group attention: attention across series that share the same group_id at a given patch index; no positional embedding in the group axis because series within a group have no natural ordering.
   - Visualize the attention masks:
     - time attention mask shape concept: batch x sequence, expanded/inverted for attention scores.
     - group attention mask concept: group_ids build a same-group mask so only series with matching group_id share information.
   - Show four group semantics from the report:
     - one series per group for independent univariate forecasting.
     - related items with shared metadata/source for cross-learning or cold-start support.
     - variates of one multivariate system.
     - target(s), past-only covariates, and known future covariates in one forecasting task.
   - Make this the centerpiece of the design. Chronos-2's differentiator is not "it is a transformer"; it is group attention enabling universal in-context forecasting.

4. Input construction and covariate handling:
   - Show historical context and future inputs separately:
     - Historical x_hist includes target and covariates observed in context.
     - Future x_future includes known future covariates when available, while future targets and past-only covariates are masked/missing.
   - Show categorical covariate handling from the report:
     - univariate target: target encoding for categories.
     - multivariate target: ordinal encoding fallback.
   - Show mask semantics:
     - context mask indicates observed versus missing historical values.
     - future covariate mask indicates known future values.
     - predictions for covariate dimensions are ignored downstream; loss is computed only for target dimensions.

5. Patch embedding and REG token:
   - Draw context patch construction:
     - values are truncated to last 8192 steps if longer.
     - normalization happens before patching.
     - patch size = stride = 16, non-overlapping patches.
     - each patch concatenates time encoding, normalized values, and observed mask.
   - Draw future patch construction:
     - future covariates are normalized with the same context loc/scale.
     - missing target future values are zeros plus masks.
     - future time encoding runs from 0 forward, scaled by context length.
   - Draw the REG token:
     - A learned REG special token is inserted between context patch embeddings and future patch embeddings.
     - It acts as a separator token and attention sink according to the report.
   - Use a compact formula label:
     - patch_embed = ResidualBlock(concat(time_patch, value_patch, mask_patch)) -> R^768

6. Quantile forecasting head and output:
   - Show that Chronos-2 does direct multi-step forecasting rather than autoregressive token sampling.
   - Output path:
     - take hidden states for future patches only.
     - ResidualBlock maps d_model=768 to 21 * 16 values per future patch.
     - rearrange to batch x 21 quantiles x horizon.
     - inverse instance normalization returns forecasts to original scale.
   - List all 21 quantiles from the HF config:
     - 0.01, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 0.99.
   - Explain why this matters: extreme quantiles improve rare-event coverage and risk-aware forecasting, according to the report.
   - Include an example visual forecast band with median, 80% interval, and 98% interval, but label it illustrative unless using a source figure.

7. Training and data:
   - Show the training objective:
     - quantile regression loss over target dimensions only.
     - known covariate future values and missing target values are excluded from the objective.
   - Show the two-stage context schedule:
     - Stage 1: max context length 2048 with low number of max output patches.
     - Stage 2: context length extended to 8192 and max sampled output patches increased.
   - Show training task mix:
     - univariate forecasting.
     - multivariate forecasting, including tasks with past-only covariates.
     - multivariate forecasting with known future covariates.
   - Show data sources:
     - subset of Chronos Datasets, excluding test portions overlapping with GIFT-Eval.
     - subset of GIFT-Eval Pretrain.
     - synthetic univariate and multivariate data.
   - Show synthetic data generators:
     - TSI: Trend, Seasonality, and Irregularity.
     - TCM: Temporal Causal Model.
     - multivariatizers over AR, ETS, TSI, and KernelSynth-style base generators.
     - cotemporaneous multivariatizers for same-time dependencies.
     - sequential multivariatizers for lead-lag and cointegration-like dependencies.
   - If exact corpus size, number of series, total tokens/patches, compute budget, optimizer, LR schedule, batch size, or training duration are not available in the listed sources, label them "not reported".

8. Capabilities table:
   - Include a table comparing Chronos-2, Chronos-Bolt, and original Chronos exactly where source-backed:
     - univariate forecasting: all yes.
     - cross-learning across items: Chronos-2 yes; Chronos-Bolt no; Chronos no.
     - multivariate forecasting: Chronos-2 yes; Chronos-Bolt no; Chronos no.
     - past-only real/categorical covariates: Chronos-2 yes; others no.
     - known future real/categorical covariates: Chronos-2 yes; Chronos and Chronos-Bolt only via external covariate regressors, not native.
     - max context length: Chronos-2 8192, Chronos-Bolt 2048, original Chronos 512.
     - max prediction length: Chronos-2 1024, Chronos-Bolt 64, original Chronos 64.

9. Benchmarks and reported numbers:
   - Include source-reported benchmark panels. Do not imply independent verification.
   - fev-bench table:
     - Chronos-2: average win rate 90.7%, skill score 47.3%, median runtime 3.6s, leakage 0%, failures 0.
     - Include top competitors if space allows: TiRex 80.8/42.6/1.4s, TimesFM-2.5 75.9/42.3/16.9s, Toto-1.0 66.6/40.7/90.7s, COSMIC 65.6/39.0/34.4s, Moirai-2.0 61.1/39.3/2.5s, Chronos-Bolt 60.3/38.9/1.0s.
   - GIFT-Eval table:
     - WQL: Chronos-2 average win rate 81.9%, skill score 51.4%.
     - MASE: Chronos-2 average win rate 83.8%, skill score 30.2%.
   - Chronos Benchmark II table:
     - WQL: Chronos-2 average win rate 79.8%, skill score 46.6%.
     - MASE: Chronos-2 average win rate 81.5%, skill score 26.5%.
   - Efficiency panel:
     - Over 300 time-series forecasts per second on one NVIDIA A10G GPU.
     - Footnote context from the report: batch of 1024 series, context length 2048, prediction length 64.
   - Domain case-study panel:
     - Energy price forecasting with load and renewable covariates.
     - Rossmann retail sales with footfall, store operation, promotion, and holiday covariates.
     - Use qualitative description unless exact source chart values are available.

10. Ablations:
   - Include a compact ablation section:
     - 28M smaller Chronos-2 variant: strong but slightly lower performance; GIFT-Eval skill score lags by about 1 percentage point and inference is nearly 2x faster, per report.
     - Synthetic-only Chronos-2: slightly below real+synthetic version on Chronos Benchmark II and GIFT-Eval, larger gap on fev-bench.
     - Chronos-2-2K before long-context post-training: 8192 context extension improves especially on GIFT-Eval high-frequency long-seasonality tasks.
   - If the report figure has no exact values for the ablation bars, label the ablation as qualitative/source-figure summary rather than making up numbers.

11. Usage and deployment:
   - Include a small implementation panel showing:
     - Python package: chronos-forecasting >= 2.0.
     - Pipeline class: Chronos2Pipeline.
     - HF model id: amazon/chronos-2.
     - pandas API accepts context_df, optional future_df, prediction_length, quantile_levels, id_column, timestamp_column, target.
     - SageMaker JumpStart model id: pytorch-forecasting-chronos-2.
   - Keep code examples short and visual; the page should be an architecture visualization, not a notebook.

12. Unknowns and caveats:
   - Explicitly label the following as not reported or not in the listed public sources unless you find source-backed facts:
     - exact total pretraining corpus size.
     - number of training patches/steps.
     - compute budget and hardware.
     - optimizer and learning-rate schedule.
     - batch size.
     - detailed training duration.
     - full hidden implementation details beyond the public code/config.
   - Clarify that the model is encoder-only and direct multi-step; it is not the original Chronos discrete-token autoregressive T5 setup.
   - Clarify that original Chronos/Chronos-Bolt can use external regressors for covariates, but Chronos-2 supports covariates natively.
   - If any source disagrees, put the disagreement in a caveats panel rather than silently choosing one value.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and saving as `index.html`.
- Use a high-information interface with a left navigation rail or clear sticky section navigation.
- Use dense, readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, benchmark bars, attention masks, and forecast-band mini charts.
- Keep the design professional and technical, closer to a research briefing than a marketing landing page.
- The first viewport should immediately identify the model, type/modality, vendor, variants, license, and high-level source-backed specs.
- Use separate sections for the model's own mechanisms rather than forcing reusable generic transformer components.
- Make the page responsive for desktop and tablet widths.
- Prefer neutral technical styling with one or two accent colors. Avoid generic AI gradients and decorative blobs.

Asset and packaging constraints:
- Return one HTML file that can be saved as `index.html`.
- Prefer embedded CSS and JavaScript. If local assets are referenced, use relative paths and make the dependencies obvious.
- Do not rely on external runtime frameworks, Observable, remote CDNs, remote fonts, or network-only assets.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through the architecture.
- Include exact source-backed numbers in diagram labels where possible.
- Label missing facts as "not reported" or "unknown in listed sources".
- Avoid generic statements unless paired with the concrete mechanism, modality path, and dimensions used by Chronos-2.
- The most important visual story is: raw grouped time-series and covariates -> robust scaling/masks/time features -> 16-step patches -> REG token -> 12 encoder blocks alternating time and group attention -> 21-quantile direct multi-step forecast -> inverse scaling and forecast bands.
```

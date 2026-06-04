You are Claude Design. Create a standalone, downloadable HTML visualization page for MAI-Thinking-1 and its base model MAI-Base-1.

Primary sources to use:
- MAI-Thinking-1 technical report, "MAI-Thinking-1: Building a Hill-Climbing Machine": https://microsoft.ai/wp-content/uploads/2026/06/main_20260602_2.pdf
- Microsoft AI model page: https://microsoft.ai/models/mai-thinking-1/
- Microsoft AI announcement/blog, "Introducing MAI-Thinking-1": https://microsoft.ai/news/introducing-mai-thinking-1/
- MAI-Thinking-1 model card PDF: https://microsoft.ai/pdf/MAI-Thinking-1-Model-Card.PDF
- Microsoft AI MAI models / Build context page: https://microsoft.ai/?post_type=new
- Axios context article on Microsoft debuting a homegrown reasoning model: https://www.axios.com/2026/06/02/microsoft-debuts-scout-agent-homegrown-reasoning-model
- Windows Central context article on the seven in-house MAI models: https://www.windowscentral.com/software-apps/microsoft-launches-seven-in-house-ai-models-to-cut-developer-costs-and-reduce-reliance-on-openai

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in the workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.

Source-confidence rules:
- Treat the Microsoft technical report, Microsoft model page, Microsoft announcement, and Microsoft model card as primary sources.
- Treat Axios and Windows Central only as contextual sources about strategic positioning, availability, and relationship to Microsoft's in-house model push.
- MAI-Thinking-1 is closed/proprietary. No public weights, code, config file, tokenizer file, or training dataset release is listed in the sources. The visualization must clearly label the page as a "closed technical-report atlas entry", not as OSS/open-weight.
- If a source disagrees with another source, show the disagreement as a caveat instead of silently choosing one. Important example: the model card states a training cutoff date of July 2025, while the technical report lists per-source knowledge cutoff dates of Web HTML September 2025, Web PDFs December 2025, Public GitHub Code June 2025, and Books/Journals March 2026.
- Do not invent missing implementation details. Use "not reported" for unavailable facts.
- Do not invent Artificial Analysis scores. As of the API check for this prompt, Artificial Analysis listed Microsoft Phi-family models but no exact MAI-Thinking-1 record.

Model identity:
- Model: MAI-Thinking-1
- Base model: MAI-Base-1
- Lab/vendor: Microsoft AI / MAI
- Report date / announcement date: June 2, 2026
- Model type: proprietary reasoning LLM; sparse Mixture-of-Experts decoder-only Transformer
- Parameter scale: about 35B active / about 1T total. In Table 1 the base is 34.7B active / 962B total.
- Context length: 256K tokens after mid-training; model card and Microsoft page also state a 256K context window.
- Input format: text. Model card does not supply output formats or supported language list.
- Availability: Microsoft Foundry private preview; Microsoft page says public preview on MAI Playground soon. Model card says Azure Foundry private preview and early access form.
- Training philosophy: trained from scratch, no third-party model distillation, no LM-generated synthetic data during pretraining, built as part of Microsoft's "hill-climbing machine."
- Target page title: "MAI-Thinking-1 / MAI-Base-1 Architecture"

Goal:
Build a visual architecture atlas page that explains MAI-Thinking-1 from MAI-Base-1 pretraining through mid-training, reinforcement-learning climbs, specialist consolidation, final RL, safety/helpfulness tuning, evaluation, and deployment caveats. The page should be accurate to the sparse but unusually detailed Microsoft report. It should feel like a technical research briefing for a closed model, not a generic Transformer explainer and not an OSS model card.

Required first viewport:
- Immediately show "MAI-Thinking-1" and "Microsoft AI's first in-house reasoning model."
- Include a subtitle: "35B-active / ~1T-total sparse MoE reasoning model trained from scratch without third-party distillation."
- Include clear chips for:
  - 35B active / ~1T total
  - MAI-Base-1: 34.7B active / 962B total
  - 78 layers
  - hidden size 6656
  - top-8 / 512 experts
  - 256K context
  - 30T pretraining tokens
  - 3.55T mid-training tokens
  - 8,192 GB200 GPUs
  - o200k_base tokenizer, vocab 200,019
  - private preview / closed model
- Include a visual "closed technical report" badge so users do not mistake it for an open-weight entry.

Required page structure:
1. Overview / identity
2. Architecture map
3. Attention mechanism
4. Dense FFN and LatentMoE
5. Scaling ladder and architecture evolution
6. Pretraining data and data governance
7. Training recipe and precision
8. Mid-training and long-context extension
9. YOLO distributed training infrastructure
10. Reinforcement-learning hill-climb
11. Specialist climbs and consolidation
12. Rocket RL infrastructure
13. Evaluation results
14. Human preference and safety
15. Availability, caveats, and source conflicts

1. Architecture map:
- Draw MAI-Base-1 as a decoder-only Transformer body with repeated blocks.
- Show the high-level structure from Figure 2:
  - local/global attention
  - dense FFN
  - local/global attention
  - Sparse MoE
  - repeated as a pattern across L/2 pairs
  - RMSNorm before module inputs and before residual additions
  - residual additions around attention/FFN/MoE modules
- Show that the architecture interleaves high-sparsity MoE layers with small dense FFNs, and interleaves local and global attention.
- Add a note that the report gives a high-level block diagram, but not a complete serialized per-layer config file.

2. Architecture dimensions:
- Include a detailed architecture table and a diagram with exact source-backed values:
  - MAI-Base-1 active params: 34.7B
  - MAI-Base-1 total params: 962B
  - layers: 78
  - hidden size: 6656
  - dense FFN first-linear output size: 13312
  - LatentMoE down-projection dimension: 3072
  - expert FFN first-linear output size: 10240
  - top-k / total experts: 8 / 512
  - KV/Q: 8 / 80
  - tokenizer: o200k_base
  - vocabulary size: 200,019
  - input/output embedding weights: tied
  - model biases: none
- Include the report's note that Table 1's MAI-Base-1 configuration differs slightly from the L78 ladder to facilitate training and inference efficiency.

3. Attention mechanism:
- Show the periodic attention schedule:
  - 5 local attention layers paired with 1 global attention layer.
  - L must be a multiple of 6 so the final attention layer is global.
  - Local attention uses RoPE.
  - Local attention sliding window size: 512.
  - Local RoPE base frequency: 10,000.
  - Global attention uses no positional encoding; source says this performed comparably to RoPE while being more efficient.
  - Grouped-query attention with 8 KV heads and 80 query heads for MAI-Base-1.
  - Per-head dimension: 128.
  - RMSNorm applied to queries and keys.
  - FlashAttention-4 and Ulysses-style context parallelism support long-context training.
- Visualize local attention as a sliding-window band and global attention as periodic full-sequence anchors.
- Add a caveat: do not infer exact deployment KV-cache precision from the architecture section unless supported by later infrastructure/deployment text.

4. Dense FFN and LatentMoE internals:
- Draw a dense FFN block:
  - first feedforward layer is dense.
  - SwiGLU activation for dense and MoE feed-forward layers.
  - dense FFN first-linear output size 13312.
- Draw a LatentMoE block:
  - Router decision uses the original representation.
  - Shared down-projection compresses before all-to-all dispatch.
  - Compressed latent dimension 3072.
  - Each compressed representation is routed to 8 of 512 experts with softmax gating.
  - Expert FFN first-linear output size 10240.
  - Latent representations are projected back after all-to-all combine.
  - No shared experts in final interleaved layout; report says adding shared experts to this interleaved layout had little or no benefit.
- Include load balancing:
  - global-batch load balancing loss
  - empirical expert frequencies aggregated across data-parallel workers and micro-batches
  - GShard-style loss performed similarly to loss-free variant when global aggregation was ensured
  - final implementation converged to fully dropless MoE with variable-size all-to-all and bounded memory under high imbalance.

5. Scaling ladder and architecture evolution:
- Make a visual "ladder" section with model configurations from Table 1:
  - L12: 365M active / 3.9B total, 12 layers, hidden 1024, FFN 2048, down-proj 512, expert FFN 1536, top-8/512, KV/Q 8/16.
  - L18: 760M active / 13B total, 18 layers, hidden 1536.
  - L24: 1.5B active / 30B total, 24 layers, hidden 2048.
  - L30: 2.6B active / 58B total, 30 layers, hidden 2560.
  - L36: 4.0B active / 100B total, 36 layers, hidden 3072.
  - L42: 6.1B active / 159B total, 42 layers, hidden 3584.
  - L66: 21.7B active / 615B total, 66 layers, hidden 5632.
  - L78: 35.6B active / 1015B total, 78 layers, hidden 6656.
  - MAI-Base-1: 34.7B active / 962B total, 78 layers, hidden 6656.
- Explain the scaling rule:
  - Architecture family specified primarily by layer count L.
  - Hidden size D = L * 256 / 3 according to the report's printed formula/context. Since the extracted text may omit math formatting, label this carefully and avoid overemphasizing the formula if the PDF rendering is ambiguous.
  - Query heads set to L, rounded up to nearest multiple of 16 for serving with tensor parallelism.
  - Dense FFN expands hidden by 2x.
  - LatentMoE uses 2x compression and 3x expansion inside each expert.
- Include efficiency gain concept:
  - EG measures how much higher training cost the baseline would need to match a candidate model's evaluation loss.
  - EGFLOPs and EGTime are separate; Microsoft uses EGTime when hardware efficiency matters.
- Include Table 2 message:
  - The interleaved high-sparsity MoE + dense FFN layout beat MoE-every-layer variants once wall-clock training efficiency was included.
  - MoE-every-layer 8/384 weighted average: EGFLOPs 0.94, EGTime 0.73.
  - MoE-every-layer 7+1 shared/384 weighted average: EGFLOPs 1.03, EGTime 0.82.
- Include sparsity scaling:
  - top-8/512 selected to balance quality with training and inference efficiency.

6. Architecture and infrastructure evolution:
- Create a timeline from Table 7:
  - v2: 23B/600B, 54 layers, hidden 4352, FFN 34816, down-proj 4352, expert FFN 17408, capacity factor 2, top-4/192.
  - v3: 23B/600B, same major dimensions, dropless MoE, top-4/192, capacity factor infinity.
  - v4: 23B/611B, 66 layers, hidden 5632, FFN 11264, down-proj 4096, expert FFN 9216, top-8/512, LatentMoE.
  - v5 / MAI-Base-1: 35B/1T, 78 layers, hidden 6656, FFN 13312, down-proj 3072, expert FFN 10240, top-8/512.
- Show major infrastructure co-design changes:
  - v2: first GB200 baseline, 4,096 GPUs, 18% MFU -> 22% after optimizations.
  - v3: dropless MoE, EG about 1.40x over v2, MFU sustained around 22%.
  - v4: 512 experts, top-8 routing, LatentMoE, 8,192 GPUs, EG about 1.69x, MFU restored from 16% to 20%.
  - v5: larger active/total params, activation offloading allowed return from ZeRO-3 to ZeRO-2, final MFU around 20%.
- Include the report's "20+ optimizations" message.

7. Pretraining data and governance:
- Show that MAI-Base-1 pretraining data was built in-house from publicly available and licensed human-generated data.
- Show "no LM-generated synthetic data for pretraining" and "effort to avoid/remove AI-generated content."
- Show that Microsoft says it did not use open-source training datasets and removed common machine-learning repositories such as huggingface.co from web data.
- Show source families:
  - web HTML
  - web PDFs
  - public GitHub code
  - books and journals
  - academic papers
  - news
  - multilingual text
  - domain-specific materials
- Include knowledge cutoff conflict panel:
  - Model card: training cutoff July 2025.
  - Technical report Table 4: Web HTML September 2025, Web PDFs December 2025, Public GitHub Code June 2025, Books and Journals March 2026.
  - Label this as a source conflict / differing definitions of cutoff.
- Include governance details:
  - proprietary crawler respects robots.txt and related meta/HTML controls.
  - excludes USTR Notorious Markets sources and policy-violating sources.
  - third-party data governed by commercial agreements.
  - no private customer data or Microsoft product/service data except explicit opt-in or applicable agreements respecting opt-outs.
  - PII-risk and safety filtering before training.
  - full provider list not disclosed for privacy/legal/safety/competitive reasons.
- Include data processing pipeline:
  - HTML extraction
  - source-specific structured parsers
  - hand-crafted BeautifulSoup extractors
  - LLM/agent-based keep/remove processing only; no additional synthetic content
  - raw content when processing risks dropping valuable information, e.g., Wikipedia wikitext
  - boilerplate removal
  - exact duplicate removal
  - MinHash LSH fuzzy dedup at similarity threshold 0.8
  - templated page dedup
  - semantic dedup using Qwen3-Embedding-0.6B
  - cross-dataset dedup with global drop-order.

8. Pretraining data composition:
- Recreate Table 5 as a data mixture chart:
  - Code: 7.4T unique, 16.4T training tokens, 54.6%, 2.22x avg epochs.
  - STEM: 2.2T unique, 4.7T training tokens, 15.8%, 2.17x.
  - Math: 0.3T unique, 1.6T training tokens, 5.4%, 5.28x.
  - Books and journals: 0.6T unique, 0.9T training tokens, 3.1%, 1.65x.
  - PDFs: 2.7T unique, 1.4T training tokens, 4.7%, 0.53x.
  - Web text: 8.1T unique, 4.5T training tokens, 14.9%, 0.55x.
  - Multilingual other: 8.1T unique, 0.5T training tokens, 1.6%, 0.06x.
  - Total: 29.2T unique, 30.0T training tokens, 100.0%, 1.03x.
- Add a visual showing that code dominates the pretraining mix, but high-quality math is repeated more heavily.
- Include data mixture selection methodology:
  - nearly 40 internal NLL benchmarks grouped into Coding, STEM, Math, General Knowledge, Multilingual.
  - aggregate target = 0.5 Coding + 0.175 STEM + 0.175 Math + 0.1 General + 0.05 Multilingual.
  - Microsoft trained thousands of small models, 760M to 4B active, to search mixtures.
  - example frontier: 183 models from scratch, equal TPP, 3 scales, 61 mixtures.
  - max dataset repetition cap of 8.

9. Training recipe:
- Show the three training phases from Table 6:
  - Pre-training: 30T tokens, context length 16,384, 8,192 GB200 GPUs.
  - Mid-training 1: 3.4T tokens, context length 65,536, 8,192 GB200 GPUs.
  - Mid-training 2: 150B tokens, context length 262,144, 4,096 GB200 GPUs.
- Show parallelism:
  - expert parallelism 64 with ZeRO-2 for pretraining and mid-training 1.
  - ZeRO-3 / FSDP for mid-training phase 2.
  - context parallelism used for mid-training phases.
  - in-house training framework YOLO.
- Show optimization:
  - AdamW
  - beta1 = 0.95, beta2 = 0.925, epsilon = 1e-8
  - weight decay 0.1
  - attention weight decay 0.01
  - embedding weight decay 0.005
  - global gradient norm clipped to 1.0
  - LR warmup about 12B tokens
  - peak LR 2e-4
  - cosine decay to minimum 2e-5
  - dropout 0.15 at each layer output before residual add
  - weights initialized normal mean 0, std 0.02
  - output projection weights preceding residual additions scaled by inverse sqrt of residual connection count.
- Show mid-training hyperparameters:
  - all phases global batch size 134M tokens
  - mid-training phase 1: cosine decay, peak LR 2e-5, minimum 1e-5, no warmup
  - mid-training phase 2: constant LR 1e-6, no warmup
- Include attention initialization:
  - attention output initialized to zero by setting output RMSNorm gains to zero.
  - initial model behaves like a stack of tokenwise feedforward layers; cross-token interactions gradually kick in.
  - motivation: random attention initially acts like causal mean pooling, reduces token diversity, and can imbalance MoE routing.

10. Numerical precision:
- Create a precision map:
  - default weights/activations: BF16.
  - FP8 E4M3 for forward GEMMs.
  - FP8 E5M2 for data-gradient.
  - BF16 for weight-gradient compute with FP32 gradient accumulation.
  - FP8 operations use delayed scaling with 1024-step history of absolute max.
  - FP32 for pre-softmax activations: attention scores, MoE router logits, final output logits.
  - FP32 for MoE combine and full residual stream from embeddings to output.
  - FP32 parameters: embedding weights, RMSNorm weights, router weights.
  - FP32 optimizer main params, momentum buffers, AdamW compute.
  - FP32 data-parallel all-reduce and micro-batch gradient accumulation buffers.
  - FP32 MoE routing and final vocabulary GEMMs.
  - stochastic rounding when gradients flow from higher to lower precision.
- Show training loss:
  - Figure 9: 30T token loss curve without smoothing.
  - early spikes recovered quickly; no batches skipped and no manual interventions made mid-run.
  - spikes predominantly affected coding datasets and correlated with high expert imbalance under dropless routing.

11. Mid-training and long context:
- Show mid-training data:
  - drawn entirely from pretraining corpus, no new/synthetic sources.
  - biases mixture toward STEM, math, and code.
  - STEM/math 35%, code 55%, remaining 10% background.
  - local tuning via single-source microanneals and long-context NLL tasks.
  - STEM reasoning data filtered from PDF corpus with Bloom Analyze heuristic.
  - code data gets file extension filtering by quality bin and file-level document formatting.
  - memorization-aware epoch caps based on near-certain validation predictions.
- Show context extension:
  - 16K pretraining -> 64K mid-training 1 -> 256K mid-training 2.
  - data repacked at longer sequence lengths without changing mixture weights to minimize distribution shift.
  - Appendix B includes progressive context length scaling, speed of adaptation, final recipe; use those if available in the PDF extraction but do not invent missing numerical subdetails.

12. YOLO distributed training infrastructure:
- Create a "You Only Launch Once" system diagram:
  - built on PyTorch and integrated with Microsoft's scheduling/runtime stack.
  - supports pretraining, mid-training, SFT, and RL learner-side training.
  - includes model definition, sharding, optimizer, dataloading, checkpointing.
  - custom kernels in Triton, CUDA, CuteDSL, and CUTLASS.
  - FP8 GEMM kernels for forward/data-gradient.
  - grouped GEMMs for MoE when each GPU hosts multiple experts, typically 8 in pretraining runs.
  - fused quantization kernels.
  - Cluster Launch Control support for Blackwell non-grouped quantization kernels.
  - custom sharding annotations similar to JAX/PyTorch DTensor.
  - data, tensor, context, expert, and pipeline parallelism.
  - ZeRO stages 1-3 built from scratch.
  - Ulysses-style context parallelism.
  - dropless MoE variable-size all-to-all.
  - activation checkpointing and host offloading.
  - deterministic training, bitwise reproducibility for fixed topology/config/software.
  - distributed checkpointing, async checkpointing, hot standbys, fast-failover.
- Show cluster facts:
  - MAI-Base-1 pretraining on 8K GB200 GPUs on a Microsoft-operated Azure cluster.
  - v2/v3/v4/v5 training on GB200 NVL72 clusters.
  - expert parallelism within NVLink domain, data parallelism across racks.

13. RL hill-climbing machine:
- Create a "hill-climbing machine" section as the conceptual spine of the page.
- Show three design principles from report/blog:
  - capabilities should be learned, not inherited.
  - simplicity is sustainable.
  - scientific rigor avoids shortcuts.
- Show the RL high-level process from Figure 12:
  - Mid-trained model
  - SWE/Agentic climb -> SWE/Agentic teacher
  - STEM climb -> STEM teacher
  - Helpfulness & Safety climb -> Helpfulness & Safety teacher
  - Trace Distillation SFT -> consolidated model
  - Final climb -> MAI-Thinking-1
- Emphasize that RL starts from a checkpoint with no prior exposure to reasoning traces.
- Show model learns CoTs, tool/environment interaction, and human preference/safety behavior during RL.

14. RL objective and stability recipe:
- Include a compact math card for GRPO-style objective:
  - For prompt q, rollout policy samples group of G responses y1:G.
  - Each response gets scalar reward Ri = R(q, yi).
  - Token-level policy gradient objective derived from GRPO.
  - Advantage Ai = (Ri - mean(R1:G)) / std(R1:G).
  - Token-level importance ratio r_i,t = pi_theta(token) / pi_old(token).
- Include two modifications:
  - adaptive entropy control: dynamically adjusts upper clip bound k to target policy entropy H*.
  - outer ratio clip: hard clip all branches with rmax to avoid catastrophic gradient-norm spikes.
- Include reward decomposition:
  - R(q, yi) = Rtask(q, yi) + w_lang * R_lang(yi) - w_len * R_len(yi)
  - language consistency reward penalizes non-English words in CoT.
  - length penalty depends on response length and problem pass rate.
- Include sampling:
  - early-exit problem sampling with G_early < G.
  - final group pass-rate filter.
  - top-p sampling p = 0.97 with top-p truncation mask replay to reduce off-policy mismatch.
  - rollout length curriculum: 8K -> 16K -> 32K -> 64K -> 128K max generation length.
- Include RL hyperparameters:
  - AdamW beta1 = beta2 = 0.95, epsilon = 1e-15, no weight decay.
  - constant LR 1e-6, lowered to 9e-7 at higher lengths.
  - global batch size 7040 after packing; max unpacked sequences 12000.
  - max generation length 128K.
  - GRPO epsilon 0.6, kmax 2.5, step size delta 0.25, target entropy H* = 0.3.
  - outer rmax = 50, rmin unconstrained.
  - w_lang = 0.5, alpha = 0.005.
  - w_len = 0.25 up to 64K, removed at 128K.
  - G = 128 rollouts, G_early = 16.
  - pass-rate filters: early [0.05, 0.8], full [0.1, 0.8].
  - 5 gradient steps between inference updates.
  - discard rollouts more than 8 inference updates / 40 gradient steps stale.
  - dropless MoE training and global MoE load balancing coefficient 1e-5.

15. Self-distillation:
- Visualize self-distillation as "checkpoint rescue / format migration / base-policy upgrade."
- Include findings:
  - O(1M) reasoning traces sufficient to match teacher performance while retaining SFT stability.
  - successful traces only were used in the final approach.
  - later-stage traces are important; early traces degrade performance, only final checkpoint traces weaker than diverse strong-checkpoint traces.
  - prompt diversity beats more traces per prompt at fixed token budget.
  - mix mid-training data with reasoning traces to avoid forgetting long-context behavior.
- Include SFT hyperparameters:
  - packed sequences
  - global batch size 2048
  - sequence length 128K
  - AdamW weight decay 0.001
  - cosine LR schedule
  - max LR 1.7e-5
  - min LR 5.2e-6
  - warmup ratio 2%.

16. Specialist climbs:
- STEM climb:
  - Uses STEM Mix and competitive coding/math/science data.
  - Show Figure 15 idea: AIME 2025 and hard LiveCodeBench v6 improve across long climb; self-distillation markers reset/continue progress.
  - Use data taxonomy visuals from Figure 16 if source values are legible; if not, show only high-level categories.
- Agentic climb:
  - Trains tasks requiring interaction with external environments.
  - Show ReAct-style loop: policy emits tool calls, SEE executes tools/environments, observations appended to context, model continues.
  - For SWE/agentic evaluations: bash and string-replace tools for SWE; bash-only for Terminal-Bench 2.0.
  - Include the model card claim: trained using 8M+ RLE environments. Label as model-card claim.
- Helpfulness and safety climb:
  - Optimizes general helpfulness judged by human/AI feedback plus safety compliance.
  - Include reward model based on post-trained MAI-Base-1.
  - Include style guide and target behavior descriptions.
  - Treat unsafe compliance and unnecessary refusal as defects in same reward construction.
- Consolidation:
  - three specialist teachers distilled into a consolidated model using simple SFT.
  - final lightweight RL climb produces MAI-Thinking-1.

17. Rocket RL infrastructure:
- Create an infrastructure diagram for Rocket:
  - YOLO learner
  - SGLang inference engine
  - asynchronous RL system
  - rollout workers, training workers, weight transfer.
  - BF16 for learner and inference engine in RL to reduce numerical mismatch.
  - MoE routing replay and top-p mask replay.
  - Transfer plan handles resharing between learner and inference shards.
  - 36-server fleet split into four groups of 9-server transfers as an example.
- Include why it matters:
  - thousands of inference GPUs
  - long rollouts
  - stale-policy control
  - KV-cache memory as bottleneck
  - lower-precision alternatives increased numerics gaps; BF16 stabilized RL.

18. Evaluation results:
- Create benchmark dashboards from Table 11:
  - AIME 2025: 97.0
  - AIME 2026: 94.5
  - HMMT Feb 2026: 84.9
  - GPQA Diamond: 84.2
  - LiveCodeBench v6: 87.7
  - Terminal-Bench 2.0: 46.0
  - SWE-Bench Verified: 73.5
  - SWE-Bench Pro: 52.8
- Include comparison models only as source-reported from Table 11:
  - Sonnet 4.6, Opus 4.6, GPT 5.4, Kimi K2.6, DeepSeek V3.2, DeepSeek V4, GLM-5.1.
- Include Table 12 dashboard:
  - MMLU-Pro 85
  - SimpleQA Verified 31
  - IFBench 69
  - Advanced IF 85
  - Multi-Challenge 53
  - GraphWalks <=128K 90
  - BFCL v3 72
  - AIR-Bench 88
  - CyberSec Instruct 63
  - CyberSec Auto 63
  - LongFact 98
  - TruthfulQA 88
  - HealthBench Professional 35
  - MedXpert QA 43
- Label all benchmark values as Microsoft/source-reported and not independently verified.
- Include eval settings:
  - MAI-Thinking-1 benchmark results average across 4 runs.
  - uniform inference settings with temperature 1 and top-p 0.97 unless otherwise stated.
  - STEM/agentic coding Table 11 compares against model-card/release-announcement numbers from other labs.
  - agentic coding uses 256K total context; other Table 11 evals use max output tokens 256K.
  - Terminal-Bench 2.0 predefined timeouts ignored to remove inference-speed confound.

19. Base-model evaluation:
- Include Figure 10 summary:
  - MAI-Base-1 compared by bits-per-byte across held-out Code, QA, STEM, Math NLL tasks.
  - Lower BPB is better.
  - Compared to Gemma4-31B, DeepSeek-V3.2-Exp-Base, MAI L66 prior run, Kimi-K2-Base, DeepSeek-V4-Pro.
  - MAI-Base-1 shows advantage over models with similar active parameter counts across all four tasks.
  - DeepSeek-V4-Pro had best results but with 1.4x active and 1.6x total parameters relative to MAI-Base-1.
- Add a caveat that NLL comparisons are internal held-out tasks, not public benchmark leaderboards.

20. Human side-by-side evaluations:
- Include Table 13 task distribution:
  - open QA, brainstorming/advising, content authoring: 13-14% each.
  - structured problem solving, information extraction, academic help, insight generation, content summarization: 6-7% each.
  - task planning, context-based QA, other text analysis: 5% each.
  - personal support, entertainment, chit-chat, role-play: 3-4% each.
- Include evaluation setup:
  - 1,276 tasks, English, 30% multi-turn.
  - prompts from expert-authored tasks and filtered Microsoft consumer Copilot logs.
  - raters managed by Surge AI.
  - 7-point Likert preference from -1.5 to +1.5.
- Include Table 14:
  - Overall vs Sonnet 4.6: +0.07 +/- 0.06.
  - Overall vs Opus 4.6: -0.07 +/- 0.06.
  - vs Sonnet: win 49%, tie 6%, lose 45%.
  - vs Opus: win 43%, tie 5%, lose 52%.
  - Conciseness/relevance positive vs both; style/tone positive vs both; instruction/factuality/completeness roughly within noise.

21. Safety and responsible deployment:
- Include Microsoft's "Humanist Superintelligence" framing:
  - unsafe compliance and unnecessary refusal are both defects.
  - safety trained with same RL infrastructure as capability.
  - safety rewards part of same hill-climbing loop.
- Include safety benchmark categories from Table 8 / safety sections where useful:
  - harmful and borderline prompts
  - over-refusal on low-risk prompts
  - internal red teaming
  - independent red teaming
  - safety by harm category visualization if grounded in the Microsoft page image/caption.
- Avoid turning this into marketing copy; keep it a technical safety/post-training panel.

22. Availability and release caveats:
- Clearly state:
  - Not open source.
  - No public weights.
  - No public training code.
  - No public full dataset.
  - No official full model config file beyond report tables.
  - Microsoft Foundry private preview.
  - Public preview on MAI Playground "soon" according to Microsoft announcement.
  - Compatible with Chat Completions API according to Microsoft announcement/model card.
  - Function calling and developer instructions supported according to Microsoft announcement/model card.
  - Distribution later through Microsoft Foundry; some secondary coverage mentions future availability on Fireworks AI, Baseten, and OpenRouter, but treat that as secondary-context unless Microsoft primary source confirms in the page being read.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and adding to a static atlas.
- Use a high-information interface with a left navigation rail or sticky section navigation.
- Use dense readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, ladder charts, bar charts, and benchmark panels.
- The page should feel like a Microsoft AI technical memo: clean, confident, restrained, with subtle Microsoft color cues. Avoid overusing Microsoft four-color branding; keep it professional and research-forward.
- First viewport should immediately identify the model and closed-report status.
- Include a "source conflict / unknowns" panel that is visible and candid.
- Include source links inline or in a final sources section.
- Make all diagrams work offline.
- Prefer embedded CSS and JavaScript.
- Do not rely on external runtime frameworks, remote CDNs, Observable, or network-only assets.
- If local assets are referenced, use obvious relative paths and keep the page self-contained.

Quality bar:
- The diagrams must be model-specific enough that an engineer can trace MAI-Base-1's architecture and MAI-Thinking-1's training path.
- Use exact source-backed numbers in labels wherever possible.
- Mirror the report's real structure: Pre-training, RL Climb, Evaluations, Safety Red Teaming, Cluster Environment, Appendices/caveats.
- Avoid generic phrases like "uses MoE" unless paired with exact source-backed mechanics: top-8/512 experts, latent down-proj 3072, dropless routing, global-batch load balancing, local/global attention 5:1, KV/Q 8/80, 78 layers, hidden 6656.
- Because the report is closed-model and some knowledge is sparse, prefer transparent uncertainty markers over filling gaps.

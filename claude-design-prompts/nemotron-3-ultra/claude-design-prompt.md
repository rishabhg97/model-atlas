You are Claude Design. Create a standalone, downloadable HTML visualization page for NVIDIA Nemotron 3 Ultra 550B-A55B.

Primary sources to use:
- NVIDIA Nemotron 3 Ultra Technical Report: https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf
- NVIDIA Nemotron 3 Ultra Base docs: https://docs.nvidia.com/nemotron/nightly/usage-cookbook/Nemotron-3-Ultra-Base/README.html
- NVIDIA Nemotron project / training recipes: https://github.com/NVIDIA-NeMo/Nemotron
- NVIDIA Nemotron 3 family page: https://research.nvidia.com/labs/nemotron/Nemotron-3/
- Hugging Face BF16 post-trained checkpoint: https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16
- Hugging Face NVFP4 post-trained checkpoint: https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4
- Hugging Face Base BF16 checkpoint: https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-Base-BF16

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in the workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.

Model identity:
- Model: NVIDIA Nemotron 3 Ultra 550B-A55B
- Family/vendor: NVIDIA Nemotron 3 / NVIDIA
- Report date: 2026-06-04
- Parameter scale: 550B total parameters, 55B active parameters per token
- Context length: 1,048,576 tokens / 1M tokens
- Checkpoints: post-trained BF16, post-trained NVFP4, Base BF16, GenRM used for RLHF
- Target page title: "Nemotron 3 Ultra 550B-A55B Architecture"

Goal:
Build a visual architecture atlas page that explains Nemotron 3 Ultra from token input through hybrid Mamba-Attention MoE inference, post-training, quantization, and agentic benchmark behavior. The page should be accurate to the NVIDIA report, visually rich, and specific to Nemotron 3 Ultra. Do not make a generic transformer explainer.

Required first viewport:
- Immediately show: "NVIDIA Nemotron 3 Ultra 550B-A55B" and "Open, efficient Mixture-of-Experts Hybrid Mamba-Transformer model for agentic reasoning."
- Include metric chips for 550B total params, 55B active params, 108 total layers, 1M context, 20T pretraining tokens, 512 experts/layer, top-22 activated experts, NVFP4 checkpoint, BF16 checkpoint, and MTP speculative decoding.
- Include NVIDIA visual identity cues, but keep the page a technical research briefing rather than a marketing hero.

Required architecture content:

1. End-to-end model map:
- Show tokenization/input preparation -> embeddings -> 108-layer hybrid stack -> LM head/output classification -> MTP drafter heads -> autoregressive output.
- Label this as a hybrid Mamba-Attention Mixture-of-Experts architecture with LatentMoE layers and sparse global attention anchors.
- Show that Nemotron 3 Ultra uses the same hybrid Mamba-Attention MoE architecture as Nemotron 3 Super, scaled to 550B total / 55B active.
- Include a callout that the report does not disclose tokenizer vocabulary size, tokenizer family, exact positional encoding details, or exact attention-anchor schedule beyond the layer pattern diagram and Table 1.

2. Layer pattern / macro-stack diagram:
- Recreate a source-backed visual inspired by Figure 2:
  - Repeating cells of Mamba-2, Attention, and Latent MoE.
  - Emphasize the alternation between many Mamba-2 layers and sparse Attention anchors.
  - Show LatentMoE after Mamba or Attention blocks where the Figure 2 pattern indicates it.
  - Show groups marked x3, x2, x3, x3, x4 from the report's layer-pattern figure.
- Make it possible for an engineer to trace the repeating macro-pattern without reading prose.

3. Architecture dimensions table / schematic:
- Include exact dimensions from Table 1:
  - Total layers: 108
  - Model dimension: 8192
  - Q-heads: 64
  - KV-heads: 2
  - Head dimension: 128
  - Mamba state dimension: 128
  - Mamba groups: 8
  - Mamba heads: 256
  - Mamba head dimension: 64
  - Expert hidden dimension: 5120
  - Shared expert intermediate size: 10240
  - Total experts per layer: 512
  - Top-k activated experts: 22
  - MoE latent size: 2048
  - MTP layers: 2, shared weight
- Render this as both a compact table and a diagrammatic "dimension stack" so it is visually inspectable.

4. Attention mechanism:
- Show grouped-query attention with 64 query heads and 2 KV heads.
- Explain that the hybrid stack reduces attention cost and KV-cache footprint by relying heavily on Mamba-2 layers with sparse Attention anchors.
- Show KV cache as growing with sequence length and Mamba SSM cache as constant-sized per batch element.
- Include a cache comparison mini-diagram based on Section 4.5: in Nemotron 3 Ultra, 32-bit Mamba cache can be larger than FP8 KV cache up to 64K sequence length; the release uses FP16 SSM cache with stochastic rounding.

5. Mamba-2 / SSM internals:
- Draw Mamba-2 modules as recurrent state-space mixers with 128 state dimension, 8 groups, 256 Mamba heads, and 64 Mamba head dimension.
- Show why Mamba-2 helps long-context inference: sub-quadratic sequence-length scaling during prefill and bounded cache footprint during decode.
- Include a "do not overclaim" note: use the report's Mamba dimensions and cache discussion; do not invent lower-level Mamba equations unless directly supported by the sources.

6. LatentMoE internals:
- Create a dedicated LatentMoE diagram:
  - Input hidden state at model dimension 8192.
  - Compression/routing through a 2048-dimensional MoE latent space.
  - 512 total experts per layer.
  - Top-22 activated experts per token.
  - Shared expert intermediate size 10240.
  - Expert hidden dimension 5120.
- Explain the report's framing: LatentMoE improves accuracy per parameter / accuracy per FLOP by enabling more routed expert specialists at fixed inference cost.
- Include expert-routing health visuals from Section 2.7:
  - Define MaxVio as peak expert load divided by balanced mean.
  - Note MaxVio_max = E/k = 512/22 = 23.27 for Super and Ultra.
  - Show Ultra routing started balanced with median MaxVio about 1.2 and maximum 4.8 in the first MoE layer, then first-layer maximum rose to about 12 by 12T tokens.

7. Multi-Token Prediction / native speculative decoding:
- Show two shared-weight MTP layers used during pretraining and retained through SFT.
- Show each MTP head as an internal drafter that predicts future tokens from backbone hidden states, with draft tokens verified by the backbone target model at inference.
- Explain that both MTP heads share the same parameters and each consists of a single attention layer followed by a single MoE layer, per Section 2.1.
- Show MTP loss scaling factor 0.1 during pretraining/SFT, with two MTP blocks.
- Include the train-inference mismatch described in Section 3.4: teacher-forced MTP sees shifted hidden states, while inference conditions deeper draft steps on a mixture of backbone and MTP-generated hidden states.
- Include MTP Boosting as head-only KL distillation after MOPD: backbone frozen, MTP head trained on on-policy rollouts to improve draft acceptance.
- Include SPEED-Bench / acceptance-length visuals if extracted from Table 6; label values source-reported.

8. NVFP4 pretraining:
- Show Nemotron 3 Ultra was pretrained in NVFP4 on 20T text tokens with Warmup-Stable-Decay learning rate schedule.
- Show two pretraining phases:
  - Phase 1: 15T tokens, diversity and broad domain coverage.
  - Phase 2: 5T tokens, higher-quality data to refine accuracy.
- Show learning-rate details:
  - Warmup for 200B tokens.
  - Peak LR 2.5e-4.
  - Final 5T tokens use minus-sqrt decay to 2.5e-6.
  - Offline checkpoint merging: checkpoint interval 25B tokens, sliding merge window 500B tokens; final selection from merge windows 125B to 1T, sequential/random/reversed orderings.
  - Selected a 500B-token merge-window checkpoint for long-context phase.
- Show NVFP4 implementation details:
  - Transformer Engine open-source cuBLAS NVFP4 GEMM kernels for fprop, dgrad, and wgrad.
  - E2M1 datatype with two-dimensional block quantization on weights.
  - Random Hadamard Transforms on inputs to wgrad.
  - Stochastic rounding on gradients.
  - Higher precision kept for the final 15% of the network (16 layers), Mamba output projections, latent projections, QKV and attention projections, MTP layers, and embedding layers.
- Include the report's claim: this is described as the largest-scale demonstration of stable and accurate NVFP4 training to date.

9. Pretraining data:
- Show the released/new datasets and high-level mixture:
  - Nemotron-Pretraining-Code-v3: 173B fresh code tokens from GitHub through September 30, 2025.
  - Nemotron-Pretraining-Legal-v1.
  - Nemotron-Pretraining-Specialized-v1.2.
  - Synthetic multiple-choice and generative Q&A seeded from public benchmark training splits.
  - Fact-seeking questions from Finewiki using Qwen3-30B-A3B-Instruct-2507.
  - Moral scenarios generated with Qwen3-235B-A22B-Thinking-2507.
  - Legal datasets from regulations, judicial ethics opinions, eCFR, Caselaw summaries, CaseHOLD, ContractNLI, GlobalCit, CUAD, ToS, and CFR QA.
- Visualize phase 1 and phase 2 data mixture categories from Figure 4:
  - Include web crawl / synthetic crawl dominance.
  - Include code 14%, math 6.4%, multilingual 5%, sft-stem 9.2%, sft-code 3.9%, nemotron-cc-code 2.1%, wiki 0.6%, crawl++ 1.4%, academic 1.6%, and phase-2 finepdfs high/medium where shown.
  - Label exact percentages only where the figure text supports them.
- Include ablation outcomes:
  - Benchmark-oriented synthetic data improved MMLU-Pro 64.8 -> 66.6, average code 73.2 -> 75.1, commonsense 72.9 -> 74.5, GPQA 30.8 -> 41.9, math stable 87.6 -> 87.9.
  - Fact-seeking data improved a multiple-choice SimpleQA adaptation 40.24 -> 50.16.
  - Legal datasets improved proxy LegalBench average 64.6 -> 74.7.

10. Long-context extension:
- Show the LC-Phase continuous pretraining after base pretraining:
  - Constant LR 2.5e-6.
  - 32-way context parallelism, 8-way tensor parallelism, 128-way expert parallelism, 2-way pipeline parallelism on GB200 GPUs.
  - 1,048,576 context length for 92% of iterations.
  - 4,096 context length for 8% of iterations to preserve short benchmark accuracy.
  - Each iteration trained 25,165,824 tokens.
  - Long-context data was 46% and Phase 2 data was 54% of the blend.
  - No RULER-style data in the blend.
  - LC-Phase trained for 33B tokens.

11. Training instability section:
- Include a careful "what went wrong / what stabilized" technical section:
  - Two divergences during pretraining with simultaneous increases in training cross-entropy loss and wgrad L2 norm.
  - Divergence 1 around 8T tokens attributed to reducing local gradient accumulation precision for the output layer from FP32 to BF16; MTP-2 loss spiked first; rollback and restoring FP32 gradient reduction restabilized training.
  - Divergence 2 around 16T tokens was undetermined; starting LR annealing from a 15T rollback mitigated it; final horizon was cut to 20T tokens.
  - Mention imbalanced/dead experts and residual stream activation norm imbalance as observed phenomena, not proven causes.
- Avoid sensational language; frame this as a useful engineering transparency panel.

12. Base model benchmarks:
- Include Table 2 highlights for Nemotron 3 Ultra 550B-A55B Base:
  - MMLU 89.08, MMLU-Pro 79.07, AGIEval-En 78.73, GPQA 50.00.
  - GSM8K 88.10, MATH 82.00.
  - HumanEval 83.84, MBPP-Sanitized 85.97.
  - ARC-Challenge 97.35, HellaSwag 90.51, OpenBookQA 48.60, PIQA 83.79, WinoGrande 79.32.
  - RACE 92.15.
  - MMLU Global Lite 90.13, MGSM 87.73.
  - RULER 64K 95.30, 128K 92.49, 256K 86.22, 512K 84.54, 1M 76.83.
- Compare only against source-listed models if making comparison bars: DeepSeek-V3.2-Exp-Base, Mistral-Large-3-675B-Base-2512, Kimi-K2-Base, GLM-4.5-Base.

13. Post-training pipeline:
- Recreate Figure 9 as a process diagram:
  - Base: pretrained hybrid Mamba-Attention MoE checkpoint extended for long-context capability.
  - SFT: multi-domain supervised fine-tuning with shared-weight MTP objective.
  - RLVR: unified verifiable-reward training for agentic, reasoning, chat, safety, instruction following, and long-context capability.
  - MOPD Warmup: light SFT aligns student rollouts with teacher-supported distributions.
  - MOPD: asynchronous on-policy distillation merges specialized teachers through dense token-level guidance.
  - MTP Boosting: head-only KL distillation aligns MTP drafts with backbone logits.
  - Final Nemotron 3 Ultra: optimized for agents, reasoning, efficient long-context inference.
- SFT exact details:
  - Stage 1: packed sequence length 294,912, global batch size 64, 204,800 samples, cosine LR schedule, peak 1.5e-5, minimum 1e-6, 9,600 warmup samples.
  - Stage 2: packed sequence length 515,000, additional long-context data up to 512K tokens, global batch size 64, 19,200 samples, peak LR 1e-5, minimum 2e-6, 6,400 warmup samples.
  - Shared-weight MTP objective retained with two MTP layers and auxiliary-loss scaling factor 0.1.
- Include SFT data categories: long context, efficiency/control, safety, search, terminal use, SWE, math/proof, RTL/code/security, and other report-backed categories.

14. RLVR and MOPD:
- Explain unified RLVR as mixed-environment reinforcement learning with verifiable rewards across reasoning, agentic, code, safety, usability, and chat environments.
- Recreate Figure 10 as a two-iteration MOPD pipeline:
  - RLVR student used as self-teacher where specialized teachers are absent.
  - Iteration 1 teachers: terminal-use, conversational tool-use, SWE, search, office work, usability, agentic safety, plus chat/instruction/reasoning paths where applicable.
  - Iteration 2 initializes additional teachers from Ultra MOPD1, reuses first-round teachers, and distills into Ultra Final.
- Include compact MOPD math cards:
  - MOPD trains student policy pi_theta to match teacher pi_T on student-induced states.
  - Objective is negative reverse-KL / sampled-token objective.
  - Asynchronous implementation has rollout workers, teacher-scoring workers, learner workers; uses behavior policy, proximal policy, clipped PPO-style ratio, dense distillation advantage, and IcePop token masking.
  - MOPD training max generation length: 192K tokens.
  - Training batch: 1,024 prompts, one rollout per prompt.
- Include Table 4 warmup ablation:
  - GDPVal student 28.9, warmup 46.7, no warmup 35.3, teacher 49.5.
  - BrowseComp student 31.0, warmup 44.4, no warmup 33.0, teacher 51.0.
  - HLE student 25.6, warmup 26.7, no warmup 26.3, teacher 32.1.
- Include Table 5 MOPD gains:
  - Terminal Bench 2.0: SFT 34.5, RLVR 44.5, MOPD1 50.8, MOPD2 54.0, teacher 50.0, recovery 172.7%.
  - GDPVal: 23.2, 28.9, 46.7, 46.7, 49.5, recovery 86.4%.
  - SWE-Bench Verified: 63.5, 65.8, 70.1, 71.7, 72.5, recovery 88.1%.
  - TauBench Telecom: 55.7, 82.7, 91.2, 92.9, 94.0, recovery 90.3%.
  - BrowseComp: 14.3, 31.0, 41.0, 44.4, 51.0, recovery 67.0%.
  - LiveCodeBench v6: 85.5, 87.4, 90.0, 89.0, 92.4, recovery 32.0%.
  - IMOAnswerBench no tools: 85.1, 84.5, 88.1, 88.6, 92.5, recovery 51.3%.
  - OmniScience Non-Hallucination: 4.8, 46.3, 77.9, 78.7, 87.0, recovery 79.6%.

15. Specialized teachers:
- Create separate cards or tabs for the teacher models:
  - Software Engineering Teacher: SFT -> PivotRL -> end-to-end SWE-RL; repository interaction, tool/bash commands, hidden tests, GRPO; includes safeguards against gold-patch leakage.
  - Office / Workplace Task Teacher: GDPval-like tasks, AfterQuery trajectories, file-grounded reasoning, professional deliverables.
  - Search Teacher: context-management behavior, discard-all resets and summary compression for long-horizon search.
  - Terminal-use Teacher: one-hour timeout style tasks and PivotRL reprofiling.
  - Conversational Tool-use Teacher: sequential and dependent multi-step actions.
  - Model Usability Teacher: JSON/YAML/XML/TOML/CSV schema formatting, document extraction, citation formatting, freeform markdown.
  - Agentic Safety Teacher: indirect prompt-injection resistance across unauthorized action, data modification, denial of service, and data exfiltration.
  - Chat Teacher / GenRM: Ultra-based generative reward model for pairwise candidate evaluation and principle-conditioned judging.
  - Instruction-following and Factuality Teacher.
  - STEM / General Reasoning Teacher, including Table 3 scores: HLE 32.1, GPQA 88.5, MMLU-Pro 87.7, LiveCodeBench v6 90.0, IMOAnswerBench 92.5, Apex Shortlist 85.4.

16. Reasoning-effort control:
- Add a section for reasoning budget / effort control.
- Show that SFT included GPT-OSS-120B medium-effort samples and truncated reasoning traces with randomized budgets.
- Note the design change: </think> tokens in truncated samples are masked from SFT loss.
- Visualize this as an inference-time accuracy/compute tradeoff control, but avoid inventing UI/API knobs not shown in the sources.

17. Quantization:
- Recreate Table 12 as a precision map:
  - Embedding, output classification layer, MTP layers: BF16.
  - MoE routed experts: NVFP4.
  - MoE shared experts: FP8 per-tensor.
  - Mamba mixer linears: FP8 per-tensor.
  - Attention linears: BF16.
  - Latent MoE: BF16.
  - Mamba conv1d: BF16.
  - KV cache: FP8.
  - Mamba SSM cache: FP16 with stochastic rounding.
- Show BPE selection:
  - Selected 5.03 BPE NVFP4 with mixed-FP8 because it recovers long-context AA-LCR performance with no meaningful gains at higher BPE.
  - AA-LCR improved from 62.25 at 4.85 BPE to 64.69 at 5.03 BPE, then plateaued through 7.19 BPE.
- Show FP4 algorithm:
  - Dynamic max-based activation scaling.
  - Max-calibrated Four-Over-Six / 4/6 weight scaling for routed experts in the selected recipe.
  - Four-Over-Six reduced median relative MSE by 16.4% versus standard max calibration across 49,152 projection weights from 48 MoE expert layers.
- Show Model-Optimizer/Megatron-LM PTQ speed:
  - Hugging Face transformers: 4 x B300, total around 2 hours.
  - Megatron-LM: 16 x B300s, expert parallelism = data parallelism = 16, total around 45 minutes.
- Show single NVFP4 checkpoint rationale:
  - Targets Blackwell native FP4 and Hopper W4A16.
  - NVFP4 checkpoint around 330 GiB versus FP8 around 540 GiB on an 8-GPU H100 node, leaving more cache/activation headroom.
  - MTP weights fit on the 8-GPU node with W4A16; FP8 would require scaling to two H100 nodes for MTP.

18. Inference:
- Show LatentMoE + hybrid Mamba-2 sparse Attention anchors + MTP as the inference-aware stack.
- Explain throughput claims source-labeled:
  - 5.9x higher inference throughput versus GLM-5.1-754B-A40B.
  - 4.8x versus Kimi-K2.6-1T-A32B.
  - 1.6x versus Qwen-3.5-397B-17B.
  - Setting: 8K input / 64K output token workload, max throughput, NVFP4 precision on GB200; Nemotron 3 Ultra measured with TRT-LLM, other models with vLLM; best numbers chosen with/without speculative decoding where available.
- Include a throughput-vs-accuracy panel based on Figure 1, making clear that values are source-reported.

19. Post-trained evaluation suite:
- Include Table 10 highlights for Nemotron 3 Ultra 550B-A55B:
  - Agentic: Terminal Bench 2.1 56.4; GDPVal 46.7; SWE-Bench Verified 71.9; SWE-Bench Multilingual 67.7; ProfBench Search 56.0; PinchBench 90.0; TauBench V3 average 70.9; BrowseComp 44.4; Vals.ai Financial Agent without web search 60.1, with web search 53.7.
  - Reasoning/knowledge: IOI 2025 570.0; LiveCodeBench v6 89.0; IMOAnswerBench no tools 88.6; with tools 92.3; Apex-Shortlist no tools 74.9; with tools 84.8; GPQA no tools 87.0; SciCode 44.6; HLE no tools 26.7; HLE with tools 37.4; MMLU-Pro 86.8; OmniScience Accuracy 24.1; OmniScience Non-Hallucination 78.7.
  - Chat/instruction: IFBench prompt loose 81.7; Multi-Challenge 63.8.
  - Long context: AA-LCR 65.4; RULER 1M 94.7; LongBench v2 <=1M 61.9.
  - Multilingual: MMLU-ProX average 83.0; WMT24++ en->xx 83.7.
- Include comparisons only if clearly source-labeled against MiniMax-2.7, GLM-5.1, Kimi-K2.6, Qwen-3.5, DeepSeek-v4-Pro, and DeepSeek-v4-Flash.
- Include Table 18 BF16 vs NVFP4 highlights:
  - Terminal Bench 2.1 BF16 56.4 vs NVFP4 53.9.
  - GDPVal 46.7 vs 47.9.
  - SWE-Bench Verified 71.9 vs 69.7.
  - GPQA 87.0 vs 87.9.
  - IFBench 81.7 vs 82.3.
  - AA-LCR 65.4 vs 65.5.
  - RULER 1M 94.7 vs 94.0.

20. Test-time scaling:
- Include Table 11 and Figure 13 as a small "Olympiad scaling" section:
  - IMO-ProofBench Advanced 82.3% / 173 of 210.
  - IMO 2025 83.3% / 35 of 42.
  - Putnam 2025 96.7% / 116 of 120.
  - USAMO 2026 97.6% / 41 of 42.
  - Show generate-verify-refine rounds R1-R5 with cumulative graded score increasing to 173/210.
- Label these as high-compute test-time scaling results, not standard single-pass model scores.

21. Open release / artifacts:
- Include a release artifacts panel:
  - Open-sourced Base, Post-Trained, and NVFP4 quantized checkpoints on Hugging Face.
  - Training recipes, data, and RL environments are released through the Nemotron ecosystem where NVIDIA has redistribution rights.
  - Data releases listed in the report: Nemotron-Pretraining-Code-v3, Nemotron-Pretraining-Legal-v1, Nemotron-Pretraining-Specialized-v1.2, Nemotron-Posttraining-v3.
- Link to the source URLs at the top of this prompt.

Unknowns and caveats:
- If a fact is missing from the sources, label it as "not reported" or "unknown in the report."
- Do not infer hidden implementation details from other Nemotron models unless the Ultra report or official docs explicitly support the inference.
- Treat all benchmark values as NVIDIA/source-reported, not independently verified.
- Call out that some low-level details are not specified in the report, including exact tokenizer vocabulary, exact tokenizer config, and positional encoding details.
- Do not include unrelated model artifacts or prior atlas pages as evidence.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and adding to a static atlas.
- Use a high-information interface with a left navigation rail or sticky section navigation.
- Use dense readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, and benchmark bars as appropriate.
- Keep the design professional and technical, closer to an NVIDIA research briefing than a consumer landing page.
- The first viewport should immediately identify the model and show high-level specs.
- Use separate sections for model-specific mechanisms: hybrid Mamba-Attention stack, LatentMoE, MTP, NVFP4 training, long-context extension, MOPD, quantization, inference throughput, and benchmarks.
- Make the page responsive for desktop and tablet widths.
- Prefer local inline SVG/CSS/JS; do not rely on external runtime frameworks, Observable, remote CDNs, or network-only assets.

Asset and packaging constraints:
- Return one HTML file that can be saved as `index.html`.
- Prefer embedded CSS and JavaScript.
- If you reference local assets, use relative paths and make dependencies obvious.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through the architecture and post-training pipeline.
- Include exact source-backed numbers in diagram labels where possible.
- Mirror the report's main sections: Pretraining, Post-training, Quantization, and Inference.
- Avoid generic statements like "uses transformer blocks" unless paired with the concrete mechanism and dimensions used by Nemotron 3 Ultra.
- Use source-backed labels and uncertainty markers rather than filling gaps with plausible guesses.

You are Claude Design. Create a standalone, downloadable HTML visualization page for Qwen3-Omni-30B-A3B-Thinking.

Primary sources to use:
- Qwen3-Omni-30B-A3B-Thinking model card: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking
- Qwen3-Omni-30B-A3B-Thinking README: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking/blob/main/README.md
- Qwen3-Omni-30B-A3B-Thinking config: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking/blob/main/config.json
- Qwen3-Omni-30B-A3B-Thinking generation config: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Thinking/blob/main/generation_config.json
- Qwen3-Omni Technical Report: https://arxiv.org/abs/2509.17765
- Qwen3-Omni Technical Report HTML: https://ar5iv.labs.arxiv.org/html/2509.17765v1
- Official Qwen3-Omni GitHub repository: https://github.com/QwenLM/Qwen3-Omni
- Official report PDF mirror in the Qwen repository: https://github.com/QwenLM/Qwen3-Omni/blob/main/assets/Qwen3_Omni.pdf

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in the workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.

Model identity:
- Model: Qwen/Qwen3-Omni-30B-A3B-Thinking
- Family/vendor: Alibaba Qwen
- Release/report date: September 22, 2025 technical report submission; Hugging Face release window in September 2025.
- License: Apache-2.0 per the Hugging Face model card and Qwen3-Omni report.
- Checkpoint role: Thinking model containing the Thinker component, equipped with chain-of-thought reasoning, supporting audio, video, and text input with text output.
- Audio output caveat: config has `enable_audio_output: false`; do not draw the Talker, MTP, or Code2Wav speech-generation path as part of this checkpoint. Those belong to the Instruct/audio-output package and the broader Qwen3-Omni system.
- Parameter scale: 30B total / 3B activated for the Thinker MoE.
- Included modules to visualize for this checkpoint: AuT audio encoder, Qwen3-VL/SigLIP-derived vision encoder, 30B-A3B Thinker MoE Transformer, multimodal input preparation, TM-RoPE, reasoning/text output head.
- Context length: config uses 65,536 max position embeddings for Thinker text; report long-context pretraining increases sequence length from 8,192 to 32,768; README vLLM examples use 32,768 on single GPU and 65,536 on 4 GPUs. Show this nuance instead of choosing only one number.
- Target page title: "Qwen3-Omni-30B-A3B-Thinking Architecture"

Goal:
Build a visual architecture atlas page that explains Qwen3-Omni-30B-A3B-Thinking from multimodal inputs to reasoning text output. The page should be accurate to the sources, visually rich, and model-specific. Do not make a generic transformer explainer and do not accidentally describe the Instruct checkpoint's speech-output Talker as included in this Thinking checkpoint.

Required architecture content:
1. First viewport identity panel:
   - Show model name, Alibaba Qwen, Apache-2.0, omni-modal understanding, and the checkpoint role: Thinker-only reasoning model.
   - Show headline specs: 30B-A3B Thinker, audio/video/text input, text output, 119 text languages, 19 speech-input languages, audio recordings up to 40 minutes per instance, 65,536 config context / 32,768 reported long-context training, and Thinking generation config with max_new_tokens 32,768.
   - Include a visible badge: "No Talker in this checkpoint: `enable_audio_output: false`."

2. End-to-end reasoning system map:
   - Draw three input lanes: text, audio, and image/video.
   - Text lane: Qwen tokenizer / ChatML, byte-level BPE vocabulary, config `vocab_size: 152,064`; report says 151,643 regular tokens. Label this as a source/version nuance.
   - Audio lane: resample to 16 kHz, 128-channel mel spectrogram, 25 ms window, 10 ms hop, AuT encoder, 80 ms output frame alignment / 12.5 Hz token rate.
   - Vision lane: Qwen3-VL vision encoder initialized from SigLIP2-So400M, images and dynamic-frame video, 16 px patches, `image_size: 768`, `temporal_patch_size: 2`, `tokens_per_second: 2`.
   - Multimodal position lane: TM-RoPE with temporal / height / width rotary allocation of 24 / 20 / 20, absolute temporal alignment, 80 ms temporal IDs, contiguous numbering across modalities.
   - Show the unified Thinker producing chain-of-thought / reasoning tokens and final text output. Show a greyed "Talker not included" side-note only as a comparison/caveat, not as an active data-flow path.

3. Thinker architecture:
   - Draw the 30B-A3B Thinker as a MoE Transformer with 48 layers, hidden_size 2048, 32 attention heads, 4 KV heads, head_dim 128, QK norm enabled, RMSNorm eps 1e-6, SiLU, RoPE theta 1,000,000, max_position_embeddings 65,536, vocab_size 152,064.
   - Attention: grouped-query attention implied by 32 Q heads / 4 KV heads. Use TM-RoPE / M-RoPE positioning from the report and config. Do not call it MLA or sliding-window attention; config has `use_sliding_window: false` and `sliding_window: null` for the Thinker.
   - MoE: 128 experts, top-8 experts per token, `norm_topk_prob: true`, `router_aux_loss_coef: 0.001`, `moe_intermediate_size: 768`, `shared_expert_intermediate_size: 0`. Show 30B total / 3B active.
   - Use a repeated-block diagram with residual paths, attention, MoE routing, router probability normalization, and final LM head. Include compact equations for GQA attention and top-k expert aggregation.

4. Audio Transformer (AuT) encoder:
   - Draw AuT as an attention encoder-decoder trained from scratch on 20 million hours of supervised audio.
   - Show Conv2D downsampling by 8x before attention layers, 12.5 Hz token rate, dynamic attention windows from 1 to 8 seconds, real-time prefill caching, and output_dim 2048.
   - Config details to label: d_model 1280, encoder_layers 32, encoder_attention_heads 20, encoder_ffn_dim 5120, num_mel_bins 128, output_dim 2048, max_source_positions 1500, n_window 50, n_window_infer 800, conv_chunksize 500.
   - Training data split from the report: 80% Chinese/English pseudo-labeled ASR, 10% other-language ASR, 10% audio understanding.

5. Vision encoder:
   - Draw the Qwen3-VL / SigLIP2-So400M-derived vision encoder as the image/video frontend.
   - Config labels: depth 27, hidden_size 1152, num_heads 16, intermediate_size 4304, patch_size 16, image_size 768, out_hidden_size 2048, spatial_merge_size 2, temporal_patch_size 2, deepstack visual indexes 8 / 16 / 24.
   - Show dynamic video frame sampling and alignment to the 80 ms temporal ID grid where audiovisual streams are used.

6. Thinking/reasoning behavior:
   - Create a dedicated section showing how the Thinking checkpoint differs from the Instruct checkpoint: it is optimized for reasoning over multimodal inputs and emits text only.
   - Draw a reasoning output lane with "sampled thinking decode" rather than "greedy non-thinking decode."
   - Use the checkpoint's generation config: max_new_tokens 32768, temperature 0.6, top_p 0.95, top_k 20, repetition_penalty 1.0.
   - Include the README evaluation note: Instruct models use greedy decoding; Thinking models use decoding parameters from the checkpoint generation_config.json.
   - Include the README best-practice note: users should include an explicit textual instruction/task description alongside multimodal input for better reasoning.

7. Streaming, memory, and deployment:
   - Draw an inference preparation lane using `Qwen3OmniMoeProcessor`, `process_mm_info`, `use_audio_in_video`, and FlashAttention 2 / vLLM where relevant.
   - Include vLLM example context settings: 32,768 max model length on a single GPU and 65,536 on 4 GPUs.
   - Include README minimum GPU memory table entries for the Thinking checkpoint at BF16: 68.74 GB for 15s video, 77.79 GB for 30s, 95.76 GB for 60s, 131.65 GB for 120s.
   - Contrast with Instruct only as a note: Instruct is higher memory because it includes Talker/audio output; Thinking does not.

8. Training and post-training pipeline:
   - Draw pretraining in three stages:
     - S1 Encoder Alignment: LLM initialized from Qwen3, vision encoder from Qwen3-VL, audio encoder from AuT; train vision/audio adapters and encoders while LLM is fixed.
     - S2 General Stage: approximately 2T source-reported tokens with distribution text 0.57T, audio 0.77T, image 0.82T, video 0.05T, video-audio 0.05T. Note that the listed modality values sum above 2T, so label as source-reported approximate.
     - S3 Long Context Stage: increase maximum token length from 8,192 to 32,768 and upweight long audio/video.
   - Draw Thinker post-training:
     - SFT for instruction following.
     - Strong-to-Weak Distillation: off-policy response distillation, on-policy KL alignment with Qwen3-32B or Qwen3-235B-A22B teachers.
     - GSPO with rule-based rewards and model-based rewards; Qwen3 as general LLM judge and Qwen2.5-VL as visually grounded judge.
   - Add a "Thinking model" branch that explicitly reasons over inputs from any modality. If the sources do not give additional Thinking-only training steps beyond the report description, label those details as not separately reported.

9. Benchmarks and reported numbers:
   - Include source-reported score cards from the model card / report. Use a subset that covers text reasoning, audio reasoning, vision reasoning, and audiovisual reasoning.
   - Text-to-text, Thinking Qwen3-Omni-30B-A3B-Thinking: MMLU-Redux 88.8, GPQA 73.1, AIME25 73.7, LiveBench 20241125 71.8, MultiPL-E 80.6, IFEval 85.1, Arena-Hard v2 55.1, Creative Writing v3 82.5, WritingBench 85.5, BFCL-v3 63.2, MultiIF 72.9, PolyMATH 47.1.
   - VoiceBench / audio reasoning with Thinking column: VoiceBench overall 88.8, AlpacaEval 96.4, CommonEval 90.5, WildVoice 90.5, SD-QA 78.1, MMSU 83.0, OpenBookQA 94.3, BBH 88.9, IFEval 80.6, AdvBench 97.2; Audio Reasoning MMAU 75.4 and MMSU 70.2.
   - Vision-to-text, Thinking: MMStar 74.9, HallusionBench 62.8, MM-MT-Bench 8.0, MMMU_val 75.6, MMMU_pro 60.5, MathVista_mini 80.0, MathVision_full 62.9, AI2D_test 86.1, ChartQA_test 89.5, CountBench 88.6, Video-MME 69.7, LVBench 49.0, MLVU 72.9.
   - AudioVisual-to-text, Thinking: DailyOmni 75.8 and VideoHolmes 57.3.
   - Clearly label all benchmark values as source-reported, not independently verified.
   - Do not include zero-shot speech-generation tables as a Thinking checkpoint result; speech generation belongs to the broader Qwen3-Omni / Instruct Talker path, not this text-output Thinking checkpoint.

10. Unknowns and caveats:
   - Include a caveats section with at least these items:
     - "30B-A3B" refers to the Thinker MoE scale, not an added Talker package.
     - The Thinking checkpoint has `enable_audio_output: false`; Talker, MTP, and Code2Wav should not be shown as included modules.
     - Context length has multiple source-backed numbers: 65,536 in config and multi-GPU deployment examples, 32,768 in long-context pretraining and single-GPU vLLM examples.
     - Tokenizer vocabulary has a report/model-card nuance: report says 151,643 regular tokens; config says vocab_size 152,064.
     - Some implementation behavior, including exact production serving setup and all routing internals beyond config fields, is not reported.
     - Benchmarks are source-reported, not independently verified.

Visual and interaction requirements:
- Make this a single polished HTML page suitable for downloading and adding to a static atlas.
- Use a high-information interface with a left navigation rail or clear section navigation.
- Use dense, readable diagrams: SVG, HTML/CSS diagrams, tables, tabs, flows, cards, and benchmark bars as appropriate.
- Keep the design professional and technical, closer to a research briefing than a marketing landing page.
- The first viewport should immediately identify the model and show high-level specs.
- Use separate sections for model-specific mechanisms rather than forcing reusable generic components.
- Make the page responsive for desktop and tablet widths.
- Prefer a technical palette that distinguishes modality lanes: text, audio, vision, video, TM-RoPE, and Thinker. Do not let the page become a single-hue design.

Asset and packaging constraints:
- Return one HTML file that can be saved as `index.html`.
- Prefer embedded CSS and JavaScript. If you reference local assets, use relative paths and make the dependencies obvious.
- Do not rely on external runtime frameworks, Observable, remote CDNs, or network-only assets.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through text, audio, image/video, TM-RoPE, and the 30B-A3B Thinker.
- Include exact source-backed numbers in diagram labels where possible.
- Use the report structure as inspiration: Architecture, AuT, Perceivation, TM-RoPE, Pretraining, Thinker post-training, Evaluation, and deployment settings.
- Avoid generic statements like "uses transformer blocks" unless paired with the concrete mechanism and dimensions used by Qwen3-Omni-30B-A3B-Thinking.

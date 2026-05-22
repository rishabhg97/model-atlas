You are Claude Design. Create a standalone, downloadable HTML visualization page for Qwen3-Omni-30B-A3B-Instruct.

Primary sources to use:
- Qwen3-Omni-30B-A3B-Instruct model card: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct
- Qwen3-Omni-30B-A3B-Instruct README: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct/blob/main/README.md
- Qwen3-Omni-30B-A3B-Instruct config: https://huggingface.co/Qwen/Qwen3-Omni-30B-A3B-Instruct/blob/main/config.json
- Qwen3-Omni Technical Report: https://arxiv.org/abs/2509.17765
- Qwen3-Omni Technical Report HTML: https://ar5iv.labs.arxiv.org/html/2509.17765v1
- Official Qwen3-Omni GitHub repository: https://github.com/QwenLM/Qwen3-Omni
- Official report PDF mirror in the Qwen repository: https://github.com/QwenLM/Qwen3-Omni/blob/main/assets/Qwen3_Omni.pdf

Workspace scope:
- Ignore all other model HTML files, downloaded atlas pages, and unrelated model artifacts in the workspace.
- Use only the sources and files named in this current prompt/design request; do not treat existing atlas content as evidence or design input unless explicitly listed here.

Model identity:
- Model: Qwen/Qwen3-Omni-30B-A3B-Instruct
- Family/vendor: Alibaba Qwen
- Release/report date: September 22, 2025 technical report submission; Hugging Face model card updated on the same release window.
- License: Apache-2.0 per Hugging Face model card and report abstract.
- Parameter scale: Qwen3-Omni-30B-A3B names the main Thinker as 30B total / 3B activated. The Instruct checkpoint contains both Thinker and Talker; do not describe the whole package as only one 30B module.
- Included modules from the report: Audio Encoder AuT 650M, Vision Encoder SigLIP2-So400M / Qwen3-VL encoder about 540M, Thinker MoE Transformer 30B-A3B, Talker MoE Transformer 3B-A0.3B, MTP dense Transformer 80M, Code2Wav causal ConvNet 200M.
- Context length: config uses 65,536 max position embeddings for Thinker and Talker text configs; report long-context pretraining increases sequence length from 8,192 to 32,768; README vLLM examples use 32,768 on single GPU and 65,536 on 4 GPUs. Show this nuance instead of choosing only one number.
- Target page title: "Qwen3-Omni-30B-A3B-Instruct Architecture"

Goal:
Build a visual architecture atlas page that explains Qwen3-Omni-30B-A3B-Instruct from multimodal inputs to text and streaming speech output. The page should be accurate to the sources, visually rich, and model-specific. Do not make a generic transformer explainer.

Required architecture content:
1. First viewport identity panel:
   - Show the model name, Alibaba Qwen, Apache-2.0, any-to-any / omni-modal capability, and the checkpoint role: Instruct model with both Thinker and Talker.
   - Show headline specs: 30B-A3B Thinker, 3B-A0.3B Talker, 119 text languages, 19 speech-input languages, 10 speech-output languages, audio recordings up to 40 minutes per instance, 234 ms theoretical audio first-packet latency, 547 ms theoretical video first-packet latency, and 65,536 config context / 32,768 reported long-context training.
   - Include a caveat badge: "30B-A3B refers to the main Thinker; Instruct includes additional encoder, Talker, MTP, and Code2Wav modules."

2. End-to-end omni-modal system map:
   - Draw four input lanes: text, audio, image, and video.
   - Text lane: Qwen tokenizer / ChatML, byte-level BPE vocabulary, config vocab_size 152,064; report says 151,643 regular tokens. Label this as a source/version nuance.
   - Audio lane: resample to 16 kHz, 128-channel mel spectrogram, 25 ms window, 10 ms hop, AuT encoder, 80 ms output frame alignment / 12.5 Hz token rate.
   - Vision lane: Qwen3-VL vision encoder initialized from SigLIP2-So400M, images and dynamic-frame video, 16 px patches, image_size 768 from config, temporal_patch_size 2, tokens_per_second 2.
   - Multimodal position lane: TM-RoPE with temporal / height / width rotary allocation of 24 / 20 / 20, absolute temporal alignment, 80 ms temporal IDs, contiguous numbering across modalities.
   - Show Thinker generating text and Talker generating speech. Talker should be drawn as a parallel/dependent module that shares the conversational history and ingests multimodal features, with source caveat that the report also describes decoupling from Thinker's high-level text representations.

3. Thinker architecture:
   - Draw the 30B-A3B Thinker as a MoE Transformer with 48 layers, hidden_size 2048, 32 attention heads, 4 KV heads, head_dim 128, QK norm enabled, RMSNorm eps 1e-6, SiLU, RoPE theta 1,000,000, max_position_embeddings 65,536, vocab_size 152,064.
   - Attention: grouped-query attention implied by 32 Q heads / 4 KV heads. Use TM-RoPE / M-RoPE positioning from the report and config. Do not call it MLA or sliding-window attention; config has use_sliding_window false and sliding_window null for the Thinker.
   - MoE: 128 experts, top-8 experts per token, norm_topk_prob true, router_aux_loss_coef 0.001, moe_intermediate_size 768, shared_expert_intermediate_size 0. Show 30B total / 3B active.
   - Use a repeated-block diagram with residual paths, attention, MoE routing, and router probability normalization. Include compact equations for GQA attention and top-k expert aggregation.

4. Audio Transformer (AuT) encoder:
   - Draw AuT as an attention encoder-decoder trained from scratch on 20 million hours of supervised audio.
   - Show Conv2D downsampling by 8x before attention layers, 12.5 Hz token rate, dynamic attention windows from 1 to 8 seconds, real-time prefill caching, and output_dim 2048.
   - Config details to label: d_model 1280, encoder_layers 32, encoder_attention_heads 20, encoder_ffn_dim 5120, num_mel_bins 128, output_dim 2048, max_source_positions 1500, n_window 50, n_window_infer 800.
   - Training data split from the report: 80% Chinese/English pseudo-labeled ASR, 10% other-language ASR, 10% audio understanding.

5. Vision encoder:
   - Draw the Qwen3-VL / SigLIP2-So400M-derived vision encoder as the image/video frontend.
   - Config labels: depth 27, hidden_size 1152, num_heads 16, intermediate_size 4304, patch_size 16, image_size 768, out_hidden_size 2048, spatial_merge_size 2, temporal_patch_size 2, deepstack visual indexes 8 / 16 / 24.
   - Show dynamic video frame sampling and alignment to the 80 ms temporal ID grid where audiovisual streams are used.

6. Talker architecture:
   - Draw Talker as a MoE Transformer for streaming speech tokens, not just a TTS add-on.
   - Config labels: hidden_size 1024, 20 layers, 16 attention heads, 2 KV heads, head_dim 128, max_position_embeddings 65,536, vocab_size 3072, 128 experts, top-6 experts per token, moe_intermediate_size 384, shared_expert_intermediate_size 768, norm_topk_prob true, router_aux_loss_coef 0.001, RoPE theta 1,000,000, TM-RoPE section 24 / 20 / 20.
   - Show the three named voices exposed by the model card: Ethan, Chelsie, Aiden.
   - Show `disable_talker()` as an operational option that saves about 10 GB GPU memory and makes `return_audio` false-only.

7. Multi-codebook speech generation:
   - Draw the Talker generating one codec frame per step.
   - Show the MTP module predicting residual codebooks for the current frame after the Talker predicts the zeroth codebook.
   - Config labels for code predictor / MTP: 5 layers, hidden_size 1024, intermediate_size 3072, 16 attention heads, 8 KV heads, num_code_groups 16, vocab_size 2048, max_position_embeddings 32,768.
   - Draw Code2Wav as a lightweight causal ConvNet replacing block-wise DiT. Config labels: codebook_dim 512, codebook_size 2048, semantic_codebook_size 4096, num_quantizers 16, num_semantic_quantizers 1, decoder_dim 1536, hidden_size 1024, intermediate_size 3072, num_hidden_layers 8, sliding_window 72, upsample rates 8 / 5 / 4 / 3.
   - Explain the latency win: Qwen3-Omni can synthesize waveform immediately after each Talker token because the codec decoder attends only to left context.

8. Streaming and concurrency section:
   - Create a latency waterfall for single-concurrency audio/video: preprocessing tail packet 72 / 160 ms, Thinker TTFT 88 / 160 ms, Talker TTFT 57 / 210 ms, MTP 14 ms, codec decoder 3 ms, total 234 / 547 ms.
   - Add compact comparison cards for 4 concurrency and 6 concurrency from Table 2: total 728 / 1517 ms at 4 concurrency and 1172 / 2284 ms at 6 concurrency; Thinker TPS 75 / 63 / 53, Talker TPS 140 / 125 / 110, RTF 0.47 / 0.56 / 0.66.
   - Label every number as theoretical/source-reported.

9. Training and post-training pipeline:
   - Draw pretraining in three stages:
     - S1 Encoder Alignment: LLM initialized from Qwen3, vision encoder from Qwen3-VL, audio encoder from AuT; train vision/audio adapters and encoders while LLM is fixed.
     - S2 General Stage: approximately 2T source-reported tokens with distribution text 0.57T, audio 0.77T, image 0.82T, video 0.05T, video-audio 0.05T. Note that the listed modality values sum above 2T, so label as source-reported approximate.
     - S3 Long Context Stage: increase maximum token length from 8,192 to 32,768 and upweight long audio/video.
   - Draw Thinker post-training:
     - SFT for instruction following.
     - Strong-to-Weak Distillation: off-policy response distillation, on-policy KL alignment with Qwen3-32B or Qwen3-235B-A22B teachers.
     - GSPO with rule-based rewards and model-based rewards; Qwen3 as general LLM judge and Qwen2.5-VL as visually grounded judge.
   - Draw Talker post-training:
     - Speech data with multimodal context.
     - Continual pretraining on high-quality data and long-context speech response.
     - DPO on multilingual speech preference pairs.
     - Speaker fine-tuning for specific voices.
   - Mention Captioner only as a separate downstream model fine-tuned from Qwen3-Omni-30B-A3B-Instruct; do not make the Instruct page primarily about Captioner.

10. Benchmarks and reported numbers:
   - Include source-reported score cards from the model card / report. Use a small subset that covers modalities rather than trying to reproduce every table.
   - Text-to-text, non-thinking Qwen3-Omni-30B-A3B-Instruct: MMLU-Redux 86.6, GPQA 69.6, AIME25 65.0, ZebraLogic 76.0, MultiPL-E 81.4, IFEval 81.0, Creative Writing v3 80.6, WritingBench 82.6, BFCL-v3 64.4, MultiIF 64.0, PolyMATH 37.9.
   - Audio-to-text: WenetSpeech net / meeting WER 4.69 / 5.89, LibriSpeech clean / other WER 1.22 / 2.48, Fleurs average WER 5.33, MIR-1K WER 5.90, OpenCpop WER 1.54, Fleurs en-to-xx BLEU 37.50, Fleurs xx-to-en BLEU 31.08.
   - VoiceBench / audio reasoning: VoiceBench overall 85.5, MMAU 77.5, MMSU 69.0.
   - Music understanding: GTZAN accuracy 93.0, MTG Genre micro-F1 39.0, MTG Mood/Theme micro-F1 21.0, MTG Instrument micro-F1 40.5, MTG Top50 micro-F1 36.7, MagnaTagATune micro-F1 44.3.
   - Vision-to-text: MMStar 68.5, HallusionBench 59.7, MM-MT-Bench 7.4, MMMU_val 69.1, MMMU_pro 57.0, MathVista_mini 75.9, MathVision_full 56.3, AI2D 85.2, ChartQA_test 86.8, CountBench 90.0, Video-MME 70.5, LVBench 50.2, MLVU 75.2.
   - AudioVisual-to-text: WorldSense 54.0.
   - Zero-shot speech generation: SEED test-zh / test-en content consistency 1.07 / 1.39 for Qwen3-Omni-30B-A3B.
   - Clearly label all benchmark values as source-reported, not independently verified.

11. Unknowns and caveats:
   - Include a caveats section with at least these items:
     - "30B-A3B" is not the whole Instruct package; it names the main Thinker scale.
     - Context length has multiple source-backed numbers: 65,536 in config and deployment examples, 32,768 in long-context pretraining and single-GPU vLLM examples.
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
- Prefer a technical palette that distinguishes modality lanes: text, audio, vision, video, Thinker, Talker, MTP, and Code2Wav. Do not let the page become a single-hue design.

Asset and packaging constraints:
- Return one HTML file that can be saved as `index.html`.
- Prefer embedded CSS and JavaScript. If you reference local assets, use relative paths and make the dependencies obvious.
- Do not rely on external runtime frameworks, Observable, remote CDNs, or network-only assets.
- Links to sources are fine, but the visualization itself should work offline after download.

Quality bar:
- The diagrams should be detailed enough that an engineer can trace data flow through text, audio, image, video, Thinker, Talker, MTP, and Code2Wav.
- Include exact source-backed numbers in diagram labels where possible.
- Use the report structure as inspiration: Architecture, AuT, Perceivation, TM-RoPE, Speech Generation, Streaming and Concurrency, Pretraining, Post-training, Evaluation.
- Avoid generic statements like "uses transformer blocks" unless paired with the concrete mechanism and dimensions used by Qwen3-Omni-30B-A3B-Instruct.

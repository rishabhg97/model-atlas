# OSS / Open-Weight Model Releases Mentioned In The Reports, 2025+

This inventory was mined from:

- `/Users/rigarg/Downloads/raschka_gallery_2024plus_augmentation.md`
- `/Users/rigarg/Downloads/deep-research-report (1).md`

Scope:

- Include model families, named checkpoints, and offhand model mentions from the reports when the release is in 2025 or later.
- Keep rows even when the source report only gives family-level detail.
- Exclude clearly pre-2025 rows from the Raschka augmentation.
- Treat "OSS" broadly as open-source or open-weight, because the reports mix Apache/MIT releases with custom, community, and non-commercial licenses.

Notes:

- Dates, sizes, licenses, and architecture notes follow the provided reports unless marked `unspecified in report`.
- The link column is a lookup link, usually a Hugging Face model search seeded with the model name. Use it as a starting point for primary-source verification before adding a model page to the atlas.
- `Source strength` distinguishes rows that came from a structured report table from rows that were only mentioned as follow-up/offhand candidates.

## North America / Cross-Atlantic Labs

| Model | Year | Release date | Size / active size | Lab | License / openness from reports | Architecture / modality note | Source strength | Link |
|---|---:|---|---|---|---|---|---|---|
| [Gemma 3 1B](https://huggingface.co/models?search=Gemma+3+1B) | 2025 | 2025-03 | 1B | Google DeepMind | Gemma terms | Dense text+vision family; 32K context for 1B. | Deep table | HF lookup |
| [Gemma 3 4B](https://huggingface.co/models?search=Gemma+3+4B) | 2025 | 2025-03 | 4B | Google DeepMind | Gemma terms | Dense text+vision family; GQA, local/global attention. | Deep table | HF lookup |
| [Gemma 3 12B](https://huggingface.co/models?search=Gemma+3+12B) | 2025 | 2025-03 | 12B | Google DeepMind | Gemma terms | Dense text+vision family; GQA, local/global attention. | Deep table | HF lookup |
| [Gemma 3 27B](https://huggingface.co/models?search=Gemma+3+27B) | 2025 | 2025-03-11 | 27B | Google DeepMind | Gemma terms | Dense Transformer; GQA; local-global attention; decoder-only/text+vision family. | Both tables | HF lookup |
| [Llama 4 Maverick](https://huggingface.co/models?search=Llama+4+Maverick) | 2025 | 2025-04-05 | unspecified in report | Meta | Llama 4 Community License | Sparse MoE Transformer; GQA; RoPE; decoder-only. | Raschka table | HF lookup |
| [SmolLM3 3B](https://huggingface.co/models?search=SmolLM3+3B) | 2025 | 2025-06-19 | 3B | Hugging Face | Apache-2.0 | Dense Transformer; GQA; periodic NoPE; decoder-only. | Raschka table | HF lookup |
| [GPT-OSS 120B](https://huggingface.co/models?search=GPT-OSS+120B) | 2025 | 2025-08-04 | 120B | OpenAI | Apache-2.0 | Sparse MoE Transformer; alternating sliding-window/global attention. | Raschka table | HF lookup |
| [GPT-OSS 20B](https://huggingface.co/models?search=GPT-OSS+20B) | 2025 | 2025-08-04 | 20B | OpenAI | Apache-2.0 | Sparse MoE Transformer; alternating sliding-window/global attention. | Raschka table | HF lookup |
| [Gemma 3 270M](https://huggingface.co/models?search=Gemma+3+270M) | 2025 | 2025-08-14 | 270M | Google DeepMind | Gemma terms | Dense Transformer; MQA; QK-Norm; local-global attention. | Raschka table | HF lookup |
| [Grok 2.5 270B](https://huggingface.co/models?search=Grok+2.5+270B) | 2025 | 2025-08-22 | 270B | xAI | Grok 2 Community License | Sparse MoE Transformer; GQA; RoPE; decoder-only. | Raschka table | HF lookup |
| [OLMo 2 32B](https://huggingface.co/models?search=OLMo+2+32B) | 2025 | 2025-03 | 32B | Allen Institute for AI | Apache-2.0 | Fully open dense autoregressive LM; Tulu/RLVR post-training mentioned. | Deep table | HF lookup |
| [OLMo 3 32B](https://huggingface.co/models?search=OLMo+3+32B) | 2025 | 2025-11-20 | 32B | Allen Institute for AI | Apache-2.0 | Dense Transformer; GQA plus sliding-window attention; decoder-only. | Raschka table | HF lookup |
| [OLMo 3 7B](https://huggingface.co/models?search=OLMo+3+7B) | 2025 | 2025-11-20 | 7B | Allen Institute for AI | Apache-2.0 | Dense Transformer; MHA plus sliding-window attention; decoder-only. | Raschka table | HF lookup |
| [INTELLECT-3 106B](https://huggingface.co/models?search=INTELLECT-3+106B) | 2025 | 2025-11-26 | 106B | Prime Intellect | MIT | Sparse MoE Transformer; GLM-4.5-Air-derived architecture. | Raschka table | HF lookup |
| [Nemotron 3 Nano 30B-A3B](https://huggingface.co/models?search=Nemotron+3+Nano+30B-A3B) | 2025 | 2025-12-04 | 30B total / 3B active class | NVIDIA | NVIDIA Open Model License | Sparse hybrid model; mostly Mamba-2, some GQA attention; 1M context in deep report. | Both tables | HF lookup |
| [Arcee AI Trinity Large](https://huggingface.co/models?search=Arcee+AI+Trinity+Large) | 2026 | 2026-01-27 | unspecified in report | Arcee AI / Prime Intellect | Apache-2.0 | Sparse MoE Transformer; gated GQA; local-global attention. | Raschka table | HF lookup |
| [Tiny Aya 3.35B](https://huggingface.co/models?search=Tiny+Aya+3.35B) | 2026 | 2026-02-13 | 3.35B | Cohere | CC-BY-NC-4.0 | Dense Transformer; parallel block; sliding-window attention. | Raschka table | HF lookup |
| [Nemotron 3 Super 120B-A12B](https://huggingface.co/models?search=Nemotron+3+Super+120B-A12B) | 2026 | 2026-03-11 | 120B total / 12B active class | NVIDIA | NVIDIA Open Model License | Sparse hybrid model; Mamba-2 plus GQA attention layers; LatentMoE in atlas page. | Both tables | HF lookup |
| [Nemotron 3 Nano 4B](https://huggingface.co/models?search=Nemotron+3+Nano+4B) | 2026 | 2026-03-16 | 4B | NVIDIA | NVIDIA Open Model License | Dense hybrid model; Mamba-2 layers plus four GQA layers. | Raschka table | HF lookup |
| [Nemotron 3 Ultra](https://huggingface.co/models?search=Nemotron+3+Ultra) | 2026 | 2026 | unspecified in report | NVIDIA | NVIDIA Open Model License | Mentioned as part of Nemotron 3 family. | Deep family mention | HF lookup |
| [Nemotron 3 Nano Omni](https://huggingface.co/models?search=Nemotron+3+Nano+Omni) | 2026 | 2026 | unspecified in report | NVIDIA | NVIDIA Open Model License | Multimodal Nemotron 3 family member; token-reduction noted. | Deep family mention | HF lookup |
| [Gemma 4 26B-A4B](https://huggingface.co/models?search=Gemma+4+26B-A4B) | 2026 | 2026-04-02 | 26B total / 4B active | Google DeepMind | Apache-2.0 | Sparse MoE Transformer; local-global attention; decoder-only. | Raschka table | HF lookup |
| [Gemma 4 31B](https://huggingface.co/models?search=Gemma+4+31B) | 2026 | 2026-04-02 | 31B | Google DeepMind | Apache-2.0 | Dense Transformer; GQA; QK-Norm; local-global attention. | Raschka table | HF lookup |
| [Gemma 4 E2B](https://huggingface.co/models?search=Gemma+4+E2B) | 2026 | 2026-04-02 | edge-scale, size not explicit beyond name | Google DeepMind | Apache-2.0 | Dense edge-scale Transformer; MQA; local-global attention. | Raschka table | HF lookup |
| [Gemma 4 E4B](https://huggingface.co/models?search=Gemma+4+E4B) | 2026 | 2026-04-02 | edge-scale, size not explicit beyond name | Google DeepMind | Apache-2.0 | Dense edge-scale Transformer; GQA; local-global attention. | Raschka table | HF lookup |
| [Laguna XS.2 33B](https://huggingface.co/models?search=Laguna+XS.2+33B) | 2026 | 2026-04-28 | 33B | Poolside | Apache-2.0 | Sparse MoE Transformer; gated GQA; sliding-window/global attention. | Raschka table | HF lookup |
| [Granite 4.1 30B](https://huggingface.co/models?search=Granite+4.1+30B) | 2026 | 2026-04-29 | 30B | IBM | Apache-2.0 | Dense Transformer; GQA; RoPE; decoder-only. | Raschka table | HF lookup |
| [ZAYA1-8B](https://huggingface.co/models?search=ZAYA1-8B) | 2026 | 2026-05-06 | 8B | Zyphra | Apache-2.0 | Sparse MoE reasoning model; CCA plus GQA attention. | Raschka table | HF lookup |
| [Command A](https://huggingface.co/models?search=Command+A+111B) | 2025 | 2025-04 | 111B | Cohere | CC-BY-NC | Autoregressive enterprise text model; sliding-window/global attention; 256K context. | Deep table | HF lookup |
| [Command A+ 218B-A25B](https://huggingface.co/models?search=Command+A%2B+218B-A25B) | 2026 | 2026-05-20 | 218B total / 25B active | Cohere | Apache-2.0 | Sparse MoE Transformer; parallel attention and MoE; decoder-only. | Raschka table | HF lookup |
| [Aya Vision 8B](https://huggingface.co/models?search=Aya+Vision+8B) | 2025 | 2025-05 | 8B | Cohere Labs | CC-BY-NC-4.0 | Multilingual multimodal VLM; Command-R-7B plus SigLIP. | Deep table | HF lookup |
| [Aya Vision 32B](https://huggingface.co/models?search=Aya+Vision+32B) | 2025 | 2025-05 | 32B | Cohere Labs | CC-BY-NC-4.0 | Multilingual multimodal VLM; OCR, captioning, QA, visual reasoning. | Deep table | HF lookup |
| [Cosmos World Foundation Models](https://huggingface.co/models?search=Cosmos+World+Foundation+Models) | 2025 | 2025-01 | family, sizes unspecified in report | NVIDIA | open-weight / project assets noted | Video/world foundation models for physical AI; video tokenizers and world generation/understanding. | Deep table | HF lookup |
| [Llama-Nemotron Nano 8B](https://huggingface.co/models?search=Llama-Nemotron+Nano+8B) | 2025 | 2025-05 | 8B | NVIDIA | NVIDIA Open Model License | Llama-derived reasoning model; dynamic reasoning toggle. | Deep table | HF lookup |
| [Llama-Nemotron Super 49B](https://huggingface.co/models?search=Llama-Nemotron+Super+49B) | 2025 | 2025-05 | 49B | NVIDIA | NVIDIA Open Model License | Llama-derived reasoning model; throughput-focused. | Deep table | HF lookup |
| [Llama-Nemotron Ultra 253B](https://huggingface.co/models?search=Llama-Nemotron+Ultra+253B) | 2025 | 2025-05 | 253B | NVIDIA | NVIDIA Open Model License | Llama-derived reasoning model; largest named Llama-Nemotron variant in report. | Deep table | HF lookup |
| [MedGemma 4B](https://huggingface.co/models?search=MedGemma+4B) | 2025 | 2025-07 | 4B multimodal | Google Health / Google DeepMind | public weights noted | Medical Gemma 3 derivative with MedSigLIP image encoder. | Deep table | HF lookup |
| [MedGemma 27B](https://huggingface.co/models?search=MedGemma+27B) | 2025 | 2025-07 | 27B text | Google Health / Google DeepMind | public weights noted | Medical text model for clinical/biomedical tasks. | Deep table | HF lookup |
| [MedGemma 1.5 4B](https://huggingface.co/models?search=MedGemma+1.5+4B) | 2026 | 2026-04 | 4B multimodal | Google Health / Google DeepMind | public weights noted | Medical multimodal model extended to CT/MRI, pathology, documents, and EHR. | Deep table | HF lookup |

## China-Based Labs

| Model | Year | Release date | Size / active size | Lab | License / openness from reports | Architecture / modality note | Source strength | Link |
|---|---:|---|---|---|---|---|---|---|
| [DeepSeek R1 671B](https://huggingface.co/models?search=DeepSeek+R1+671B) | 2025 | 2025-01-20 | 671B | DeepSeek | MIT | Sparse MoE Transformer; MLA; MTP; reasoning model; R1-Zero/distillation also mentioned. | Both tables | HF lookup |
| [DeepSeek-V3-0324](https://huggingface.co/models?search=DeepSeek-V3-0324) | 2025 | 2025-03 | 685B | DeepSeek | MIT | DeepSeek-V3 update; large open-weight MoE text model. | Deep table | HF lookup |
| [Qwen3 0.6B](https://huggingface.co/models?search=Qwen3+0.6B) | 2025 | 2025-04-28 | 0.6B | Alibaba Qwen | Apache-2.0 | Dense Transformer; GQA; QK-Norm; RoPE; decoder-only. | Raschka table | HF lookup |
| [Qwen3 4B](https://huggingface.co/models?search=Qwen3+4B) | 2025 | 2025-04-28 | 4B | Alibaba Qwen | Apache-2.0 | Dense Transformer; GQA; QK-Norm; decoder-only. | Raschka table | HF lookup |
| [Qwen3 8B](https://huggingface.co/models?search=Qwen3+8B) | 2025 | 2025-04-28 | 8B | Alibaba Qwen | Apache-2.0 | Dense Transformer; GQA; QK-Norm; decoder-only. | Raschka table | HF lookup |
| [Qwen3 30B-A3B](https://huggingface.co/models?search=Qwen3+30B-A3B) | 2025 | 2025-04-28 | 30B total / 3B active | Alibaba Qwen | Apache-2.0 | Sparse MoE Transformer; 128 total / 8 active experts in family note. | Both tables | HF lookup |
| [Qwen3 32B](https://huggingface.co/models?search=Qwen3+32B) | 2025 | 2025-04-28 | 32B | Alibaba Qwen | Apache-2.0 | Dense Transformer; GQA; QK-Norm; decoder-only; thinking/non-thinking modes in family. | Both tables | HF lookup |
| [Qwen3 235B-A22B](https://huggingface.co/models?search=Qwen3+235B-A22B) | 2025 | 2025-04-28 | 235B total / 22B active | Alibaba Qwen | Apache-2.0 | Sparse MoE Transformer; Qwen3 flagship MoE in deep report. | Both tables | HF lookup |
| [InternVL3](https://huggingface.co/models?search=InternVL3) | 2025 | 2025-04 | roughly 1B to 78B family | OpenGVLab / Shanghai AI Lab partners | public weights noted | Native multimodal pretraining family; perception/reasoning MLLM. | Deep table | HF lookup |
| [MiniCPM-o 2.6](https://huggingface.co/models?search=MiniCPM-o+2.6) | 2025 | 2025-01 | 8B | OpenBMB | public weights noted | End-to-end omni-modal model for image, video, text, audio input and text/speech output. | Deep table | HF lookup |
| [Kimi K2 1T](https://huggingface.co/models?search=Kimi+K2+1T) | 2025 | 2025-07-10 | 1T | Moonshot AI | Modified MIT / review | Sparse MoE Transformer; MLA; decoder-only. | Raschka + offhand | HF lookup |
| [GLM-4.5 355B-A32B](https://huggingface.co/models?search=GLM-4.5+355B-A32B) | 2025 | 2025-07-28 | 355B total / 32B active | Zhipu AI / THUDM | MIT | Sparse MoE Transformer; GQA; QK-Norm; RoPE. | Raschka table | HF lookup |
| [GLM-4.5-Air 106B-A12B](https://huggingface.co/models?search=GLM-4.5-Air+106B-A12B) | 2025 | 2025-07-28 | 106B total / 12B active | Zhipu AI / THUDM | MIT | Sparse MoE Transformer; GQA; QK-Norm; RoPE. | Raschka table | HF lookup |
| [Qwen3 Coder Flash 30B-A3B](https://huggingface.co/models?search=Qwen3+Coder+Flash+30B-A3B) | 2025 | 2025-07-31 | 30B total / 3B active | Alibaba Qwen | Apache-2.0 | Sparse MoE Transformer; code-oriented. | Raschka table | HF lookup |
| [Qwen3 Next 80B-A3B](https://huggingface.co/models?search=Qwen3+Next+80B-A3B) | 2025 | 2025-09-09 | 80B total / 3B active | Alibaba Qwen | Apache-2.0 | Sparse hybrid model; Gated DeltaNet plus Gated Attention. | Raschka table | HF lookup |
| [MiniMax M2 230B-A10B](https://huggingface.co/models?search=MiniMax+M2+230B-A10B) | 2025 | 2025-10-23 | 230B total / 10B active | MiniMax | Modified MIT / review | Sparse MoE Transformer; GQA; QK-Norm; partial RoPE. | Raschka table | HF lookup |
| [Kimi Linear 48B-A3B](https://huggingface.co/models?search=Kimi+Linear+48B-A3B) | 2025 | 2025-10-30 | 48B total / 3B active | Moonshot AI | MIT | Sparse hybrid model; Kimi Delta Attention plus MLA. | Raschka table | HF lookup |
| [DeepSeek V3.2 671B](https://huggingface.co/models?search=DeepSeek+V3.2+671B) | 2025 | 2025-12-01 | 671B | DeepSeek | MIT | Sparse MoE Transformer; MLA plus DSA; MTP; decoder-only. | Raschka table | HF lookup |
| [Xiaomi MiMo-V2-Flash 309B-A15B](https://huggingface.co/models?search=Xiaomi+MiMo-V2-Flash+309B-A15B) | 2025 | 2025-12-16 | 309B total / 15B active | Xiaomi | MIT | Sparse MoE Transformer; sliding-window/global attention. | Raschka table | HF lookup |
| [GLM-4.7 355B-A32B](https://huggingface.co/models?search=GLM-4.7+355B-A32B) | 2025 | 2025-12-22 | 355B total / 32B active | Zhipu AI / THUDM | MIT | Sparse MoE Transformer; GQA; QK-Norm; RoPE. | Raschka table | HF lookup |
| [Kimi K2.5 1T](https://huggingface.co/models?search=Kimi+K2.5+1T) | 2026 | 2026-01-27 | 1T | Moonshot AI | Modified MIT / review | Sparse MoE Transformer; MLA; decoder-only. | Raschka table | HF lookup |
| [LongCat-Flash-Lite 68.5B-A3B](https://huggingface.co/models?search=LongCat-Flash-Lite+68.5B-A3B) | 2026 | 2026-01-28 | 68.5B total / 3B active | Meituan | MIT | Sparse MoE Transformer; MLA; decoder-only. | Raschka table | HF lookup |
| [Step 3.5 Flash 196B-A20B](https://huggingface.co/models?search=Step+3.5+Flash+196B-A20B) | 2026 | 2026-02-01 | 196B total / 20B active | StepFun | Apache-2.0 | Sparse MoE Transformer; GQA; sliding-window/global attention. | Raschka + offhand family cue | HF lookup |
| [Nanbeige 4.1 3B](https://huggingface.co/models?search=Nanbeige+4.1+3B) | 2026 | 2026-02-10 | 3B | Nanbeige / open-source project | Apache-2.0 | Dense Transformer; GQA; RoPE; decoder-only. | Raschka table | HF lookup |
| [GLM-5 744B-A69B](https://huggingface.co/models?search=GLM-5+744B-A69B) | 2026 | 2026-02-11 | 744B total / 69B active | Zhipu AI / THUDM | MIT | Sparse MoE Transformer; MLA plus DSA; MTP; decoder-only. | Raschka table | HF lookup |
| [MiniMax M2.5 230B-A10B](https://huggingface.co/models?search=MiniMax+M2.5+230B-A10B) | 2026 | 2026-02-12 | 230B total / 10B active | MiniMax | Modified MIT / review | Sparse MoE Transformer; GQA; QK-Norm; partial RoPE. | Raschka table | HF lookup |
| [Ling 2.5 1T](https://huggingface.co/models?search=Ling+2.5+1T) | 2026 | 2026-02-15 | 1T | inclusionAI | MIT | Sparse hybrid model; Lightning Attention plus MLA. | Raschka table | HF lookup |
| [Qwen3.5 397B-A26B](https://huggingface.co/models?search=Qwen3.5+397B-A26B) | 2026 | 2026-02-16 | 397B total / 26B active | Alibaba Qwen | Apache-2.0 | Sparse hybrid model; Gated DeltaNet plus Gated Attention. | Raschka table | HF lookup |
| [MiniMax M2.7 230B-A10B](https://huggingface.co/models?search=MiniMax+M2.7+230B-A10B) | 2026 | 2026-03-18 | 230B total / 10B active | MiniMax | Non-commercial | Sparse MoE Transformer; GQA; QK-Norm; partial RoPE. | Raschka table | HF lookup |
| [GLM-5.1 744B-A69B](https://huggingface.co/models?search=GLM-5.1+744B-A69B) | 2026 | 2026-04-07 | 744B total / 69B active | Zhipu AI / THUDM | MIT | Sparse MoE Transformer; MLA plus DSA; MTP; decoder-only. | Raschka table | HF lookup |
| [Qwen3.6 35B-A3B](https://huggingface.co/models?search=Qwen3.6+35B-A3B) | 2026 | 2026-04-15 | 35B total / 3B active | Alibaba Qwen | Apache-2.0 | Sparse hybrid model; Gated DeltaNet plus Gated Attention. | Raschka table | HF lookup |
| [Kimi K2.6 1T](https://huggingface.co/models?search=Kimi+K2.6+1T) | 2026 | 2026-04-20 | 1T | Moonshot AI | Modified MIT / review | Sparse MoE Transformer; MLA; decoder-only. | Raschka table | HF lookup |
| [Qwen3.6 27B](https://huggingface.co/models?search=Qwen3.6+27B) | 2026 | 2026-04-22 | 27B | Alibaba Qwen | Apache-2.0 | Dense hybrid model; Gated DeltaNet plus Gated Attention. | Raschka table | HF lookup |
| [Xiaomi MiMo-V2.5 310B-A15B](https://huggingface.co/models?search=Xiaomi+MiMo-V2.5+310B-A15B) | 2026 | 2026-04-22 | 310B total / 15B active | Xiaomi | MIT | Sparse omnimodal MoE Transformer; GQA and sliding window. | Raschka table | HF lookup |
| [Xiaomi MiMo-V2.5-Pro 1.02T-A43B](https://huggingface.co/models?search=Xiaomi+MiMo-V2.5-Pro+1.02T-A43B) | 2026 | 2026-04-22 | 1.02T total / 43B active | Xiaomi | MIT | Sparse MoE Transformer; GQA; sliding-window/global attention. | Raschka table | HF lookup |
| [Ling 2.6 1T](https://huggingface.co/models?search=Ling+2.6+1T) | 2026 | 2026-04-23 | 1T | inclusionAI | MIT | Sparse hybrid model; Lightning Attention plus MLA plus MTP. | Raschka table | HF lookup |
| [Tencent Hy3-preview 295B-A21B](https://huggingface.co/models?search=Tencent+Hy3-preview+295B-A21B) | 2026 | 2026-04-23 | 295B total / 21B active | Tencent Hunyuan | Tencent Hunyuan Community License | Sparse MoE Transformer; GQA; RoPE; decoder-only. | Raschka + offhand Hunyuan cue | HF lookup |
| [DeepSeek V4-Flash 284B](https://huggingface.co/models?search=DeepSeek+V4-Flash+284B) | 2026 | 2026-04-24 | 284B | DeepSeek | MIT | Sparse MoE Transformer; CSA/HCA and multi-head compression. | Raschka table | HF lookup |
| [DeepSeek V4-Pro 1.6T](https://huggingface.co/models?search=DeepSeek+V4-Pro+1.6T) | 2026 | 2026-04-24 | 1.6T | DeepSeek | MIT | Sparse MoE Transformer; CSA/HCA and multi-head compression. | Raschka table | HF lookup |
| [Qwen2.5-VL](https://huggingface.co/models?search=Qwen2.5-VL) | 2025 | 2025 | family, sizes unspecified in source note | Alibaba Qwen | unspecified in report | Vision-language family called out as follow-up candidate. | Deep offhand mention | HF lookup |
| [Qwen2.5-Omni](https://huggingface.co/models?search=Qwen2.5-Omni) | 2025 | 2025 | family, size unspecified in source note | Alibaba Qwen | unspecified in report | Omni/multimodal family called out as follow-up candidate. | Deep offhand mention | HF lookup |
| [QwQ-32B](https://huggingface.co/models?search=QwQ-32B) | 2025 | 2025 | 32B | Alibaba Qwen | unspecified in report | Reasoning model called out as follow-up candidate. | Deep offhand mention | HF lookup |
| [Janus-Pro](https://huggingface.co/models?search=Janus-Pro) | 2025 | 2025 | family, size unspecified in source note | DeepSeek | unspecified in report | Multimodal/generative family called out as follow-up candidate. | Deep offhand mention | HF lookup |

## India-Based Labs

| Model | Year | Release date | Size / active size | Lab | License / openness from reports | Architecture / modality note | Source strength | Link |
|---|---:|---|---|---|---|---|---|---|
| [Krutrim-2 Instruct](https://huggingface.co/models?search=Krutrim-2+Instruct) | 2025 | 2025-02 | 12B | Krutrim AI Labs | Community license | Dense Transformer based on Mistral-NeMo architecture; Indic/English conversational LM. | Deep table | HF lookup |
| [Cadence](https://huggingface.co/models?search=AI4Bharat+Cadence) | 2025 | mid-2025 | Gemma-3-1B based | AI4Bharat / IIT Madras | MIT | Multilingual punctuation-restoration model for English plus 22 Indic languages. | Deep table | HF lookup |
| [Sarvam 105B-A13B](https://huggingface.co/models?search=Sarvam+105B-A13B) | 2026 | 2026-03-03 | 105B total / 13B active | Sarvam AI | Apache-2.0 | Sparse MoE Transformer; MLA; KV LayerNorm; NoPE/RoPE. | Raschka table | HF lookup |
| [Sarvam 30B-A3B](https://huggingface.co/models?search=Sarvam+30B-A3B) | 2026 | 2026-03-03 | 30B total / 3B active | Sarvam AI | Apache-2.0 | Sparse MoE Transformer; GQA; QK-Norm; decoder-only. | Raschka table | HF lookup |

## Europe-Based Labs

| Model | Year | Release date | Size / active size | Lab | License / openness from reports | Architecture / modality note | Source strength | Link |
|---|---:|---|---|---|---|---|---|---|
| [Lucie-7B](https://huggingface.co/models?search=Lucie-7B) | 2025 | 2025-01 | 7B | OpenLLM-France / LINAGORA-led community | OSI-compliant claim in report | Causal decoder-only multilingual LM centered on French and European languages. | Deep table | HF lookup |
| [Lucie-7B-Instruct](https://huggingface.co/models?search=Lucie-7B-Instruct) | 2025 | 2025-01 | 7B | OpenLLM-France / LINAGORA-led community | OSI-compliant claim in report | Instruction-tuned Lucie variant. | Deep table | HF lookup |
| [Hibiki](https://huggingface.co/models?search=Hibiki+Kyutai) | 2025 | 2025-02 | size unspecified in report | Kyutai | public weights/code noted | Decoder-only simultaneous speech-translation model; text and audio token streams. | Deep table | HF lookup |
| [xLSTM 7B](https://huggingface.co/models?search=xLSTM+7B) | 2025 | 2025-03-17 | 7B | NXAI | NXAI Community License | Recurrent xLSTM language model; mLSTM blocks. | Raschka table | HF lookup |
| [Mistral Small 3.1 24B](https://huggingface.co/models?search=Mistral+Small+3.1+24B) | 2025 | 2025-03-18 | 24B | Mistral AI | Apache-2.0 | Dense Transformer; GQA; RoPE; decoder-only. | Raschka table | HF lookup |
| [Magistral Small](https://huggingface.co/models?search=Magistral+Small) | 2025 | 2025-06 | built on Mistral Small 3.1; size not repeated in source row | Mistral AI | public HF card noted | Reasoning model using RLVR framework. | Deep table | HF lookup |
| [Mistral Large 3 673B-A41B](https://huggingface.co/models?search=Mistral+Large+3+673B-A41B) | 2025 | 2025-12-02 | 673B total / 41B active | Mistral AI | Apache-2.0 | Sparse MoE Transformer; MLA; decoder-only. | Raschka table | HF lookup |
| [EuroLLM-22B](https://huggingface.co/models?search=EuroLLM-22B) | 2026 | 2026-02 | 22B | EuroLLM consortium | open artifacts noted | Multilingual LLM for EU languages; 32K context. | Deep table | HF lookup |
| [Mistral Small 4 119B-A4B](https://huggingface.co/models?search=Mistral+Small+4+119B-A4B) | 2026 | 2026-03-16 | 119B total / 4B active | Mistral AI | Apache-2.0 | Sparse MoE Transformer; MLA; decoder-only. | Raschka table | HF lookup |

## Middle East-Based Labs

| Model | Year | Release date | Size / active size | Lab | License / openness from reports | Architecture / modality note | Source strength | Link |
|---|---:|---|---|---|---|---|---|---|
| [MobiLlama](https://huggingface.co/models?search=MobiLlama) | 2025 | 2025 | 1.2B large-base highlighted | MBZUAI | open repo/HF card noted | Small/mobile language model family; 1.2T-token pretraining for highlighted variant. | Deep table | HF lookup |
| [Falcon-H1 0.5B](https://huggingface.co/models?search=Falcon-H1+0.5B) | 2025 | 2025-05 | 0.5B | Technology Innovation Institute | Falcon License | Hybrid attention plus SSM/Mamba-style model; family up to 34B. | Deep table | HF lookup |
| [Falcon-H1 34B](https://huggingface.co/models?search=Falcon-H1+34B) | 2025 | 2025-05 | 34B | Technology Innovation Institute | Falcon License | Largest size explicitly mentioned in Falcon-H1 range; up to 262K context. | Deep table | HF lookup |
| [K2-Think](https://huggingface.co/models?search=K2-Think) | 2025 | 2025-09 | 32B | MBZUAI IFM / G42 | Apache-2.0 | Reasoning system built on Qwen2.5-32B with long-CoT SFT and verifiable-reward RL. | Deep table | HF lookup |
| [K2-V2](https://huggingface.co/models?search=K2-V2+70B) | 2025 | 2025-12 | 70B | MBZUAI IFM / LLM360 | Apache-2.0 | Dense Transformer; "360-open" reasoning-enhanced LLM with checkpoints/data/code noted. | Deep table | HF lookup |

## Quick Follow-Up Checks Before Atlas Inclusion

Before turning any row into a downloaded atlas page:

1. Open the lookup link and confirm a public checkpoint or official project page exists.
2. Prefer a primary source: model card, official repo, technical report, or release blog.
3. Confirm exact release date, model size, active parameter count, context length, license, and architecture details.
4. If a row is marked `offhand mention`, treat it as a lead, not a verified catalog entry.
5. Do not add an atlas card until there is a downloaded standalone HTML artifact for that model.

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

## Already Added To The Atlas

These models already have downloaded atlas pages under `models/`. Keep them out
of the prompt backlog unless a replacement page is needed.

| Model | Atlas page | Prompt folder |
|---|---|---|
| Aurora | [`models/aurora/index.html`](models/aurora/index.html) | `claude-design-prompts/aurora/` |
| Chronos-2 | [`models/chronos2/index.html`](models/chronos2/index.html) | `claude-design-prompts/chronos-2/` |
| Cosmos World Foundation Models | [`models/cosmos-world-foundation-models/index.html`](models/cosmos-world-foundation-models/index.html) | `claude-design-prompts/cosmos-world-foundation-models/` |
| DeepSeek-V4 | [`models/deepseek-v4/index.html`](models/deepseek-v4/index.html) | none; atlas page covers a downloaded DeepSeek-V4 artifact |
| Discrete Diffusion VLA | [`models/discrete-diffusion-vla/index.html`](models/discrete-diffusion-vla/index.html) | `claude-design-prompts/discrete-diffusion-vla/` |
| Evo 2 | [`models/evo-2-genomic-foundation-model/index.html`](models/evo-2-genomic-foundation-model/index.html) | `claude-design-prompts/evo-2-genomic-foundation-model/` |
| Gemma 4 26B-A4B | [`models/gemma-4-26b-a4b/index.html`](models/gemma-4-26b-a4b/index.html) | `claude-design-prompts/gemma-4-26b-a4b/` |
| Gemma 4 31B | [`models/gemma-4-31b/index.html`](models/gemma-4-31b/index.html) | `claude-design-prompts/gemma-4-31b/` |
| Gemma 4 E4B | [`models/gemma-4-e4b/index.html`](models/gemma-4-e4b/index.html) | `claude-design-prompts/gemma-4-e4b/` |
| GLM-5.1 744B-A69B | [`models/glm-5-1-744b-a69b/index.html`](models/glm-5-1-744b-a69b/index.html) | `claude-design-prompts/glm-5-1-744b-a69b/` |
| GPT-OSS 120B | [`models/gpt-oss-120b/index.html`](models/gpt-oss-120b/index.html) | `claude-design-prompts/gpt-oss-120b/` |
| Kimi K2.6 1T | [`models/kimi-k2-6-1t/index.html`](models/kimi-k2-6-1t/index.html) | `claude-design-prompts/kimi-k2-6-1t/` |
| Ling 2.6 1T | [`models/ling-2-6-1t/index.html`](models/ling-2-6-1t/index.html) | `claude-design-prompts/ling-2-6-1t/` |
| Liquid LFM2-VL / LFM2.5-VL | [`models/lfm-vl/index.html`](models/lfm-vl/index.html) | `claude-design-prompts/lfm-vl/` |
| LLaDA2.0-flash | [`models/llada2-0-flash/index.html`](models/llada2-0-flash/index.html) | `claude-design-prompts/llada2-0-flash/` |
| MiMo-V2.5-Pro | [`models/xiaomi-mimo-v2-5-pro/index.html`](models/xiaomi-mimo-v2-5-pro/index.html) | `claude-design-prompts/xiaomi-mimo-v2-5-pro-1-02t-a43b/` |
| NVIDIA Cosmos Diffusion | [`models/nvidia-cosmos-diffusion/index.html`](models/nvidia-cosmos-diffusion/index.html) | `claude-design-prompts/nvidia-cosmos-diffusion/` |
| NVIDIA Isaac GR00T N1.7 | [`models/nvidia-isaac-gr00t-n1-7/index.html`](models/nvidia-isaac-gr00t-n1-7/index.html) | `claude-design-prompts/nvidia-isaac-gr00t-n1-7/` |
| Nemotron 3 Nano 30B-A3B | [`models/nemotron-3-nano/index.html`](models/nemotron-3-nano/index.html) | `claude-design-prompts/nemotron-3-nano-30b-a3b/` |
| Nemotron 3 Super 120B-A12B | [`models/nemotron-3-super-120b/index.html`](models/nemotron-3-super-120b/index.html) | `claude-design-prompts/nemotron-3-super-120b-a12b/` |
| Nemotron 3 Ultra | [`models/nemotron-3-ultra/index.html`](models/nemotron-3-ultra/index.html) | `claude-design-prompts/nemotron-3-ultra/` |
| Nemotron-Labs-Diffusion | [`models/nemotron-labs-diffusion/index.html`](models/nemotron-labs-diffusion/index.html) | `claude-design-prompts/nemotron-labs-diffusion/` |
| Qwen2 7B | [`models/qwen2-7b/index.html`](models/qwen2-7b/index.html) | none; pre-2025 model page |
| Qwen3.6 35B-A3B | [`models/qwen3-6-35b-a3b/index.html`](models/qwen3-6-35b-a3b/index.html) | `claude-design-prompts/qwen3-6-35b-a3b/` |
| Qwen3-Omni-30B-A3B-Thinking | [`models/qwen3-omni-30b-a3b-thinking/index.html`](models/qwen3-omni-30b-a3b-thinking/index.html) | `claude-design-prompts/qwen3-omni-30b-a3b-thinking/` |
| Sarvam 105B-A13B | [`models/sarvam-105b-a13b/index.html`](models/sarvam-105b-a13b/index.html) | `claude-design-prompts/sarvam-105b-a13b/` |
| Stable Diffusion 3 / SDXL | [`models/stable-diffusion-3-sdxl/index.html`](models/stable-diffusion-3-sdxl/index.html) | `claude-design-prompts/stable-diffusion-3-and-sdxl/` |
| UI-TARS-1.5-7B | [`models/ui-tars/index.html`](models/ui-tars/index.html) | `claude-design-prompts/ui-tars/` |
| Wan2.2 Video Suite | [`models/wan2-2-video-generation-suite/index.html`](models/wan2-2-video-generation-suite/index.html) | `claude-design-prompts/wan2-2-video-generation-suite/` |
| ZAYA1-8B | [`models/zaya1-8b/index.html`](models/zaya1-8b/index.html) | `claude-design-prompts/zaya1-8b/` |

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

## Model-Type Breadth Backlog

This section is for follow-up candidates that broaden the atlas beyond general
chat/reasoning LLM families. Prefer adding these as type-specific atlas pages
when there is a public checkpoint, repo, model card, or technical report.

| Model / family | Year | Release date | Type | Lab / origin | License / openness | Architecture / modality note | Source / atlas status |
|---|---:|---|---|---|---|---|---|
| [Liquid LFM2 text family](https://www.liquid.ai/models) | 2025 | 2025-07 / 2025-12 report | Efficient on-device text LMs | Liquid AI | LFM Open License / open weights noted | Hybrid Liquid Foundation Models spanning dense 350M, 700M, 1.2B, 2.6B and MoE 8B-A1B / 24B-A2B variants; optimized for CPU/GPU/NPU deployment. | Official model page; not added |
| [Liquid LFM2.5 text + thinking family](https://www.liquid.ai/blog/introducing-lfm2-5-the-next-generation-of-on-device-ai) | 2026 | 2026-01 / 2026-03-31 350M | Efficient on-device agent/reasoning LMs | Liquid AI | LFM Open License / open weights noted; commercial-use limits need review | LFM2.5 extends LFM2 with 28T-token pretraining and scaled RL; Base, Instruct, Thinking, JP, 350M, and 1.2B variants. | Official blog / model page; not added |
| [Liquid LFM2-VL / LFM2.5-VL](https://huggingface.co/LiquidAI/LFM2.5-VL-450M) | 2025-2026 | 2025-12 / 2026 | Vision-language | Liquid AI | LFM Open License / open weights noted; commercial-use limits need review | Low-latency multimodal models listed at 450M, 3B, 1.6B, and 450M LFM2.5 sizes for image+text inputs, visual grounding, and text outputs. | Added as `models/lfm-vl/index.html` |
| [Liquid LFM2-Audio / LFM2.5-Audio](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B) | 2025-2026 | 2025-12 / 2026 | Audio foundation model | Liquid AI | LFM Open License / open weights noted; commercial-use limits need review | 1.5B-class end-to-end audio/text generation model family for ASR, TTS, and interleaved speech interactions. | HF model card / official model page; not added |
| [Liquid LFM2-ColBERT / RAG / Tool / Extract nano models](https://huggingface.co/LiquidAI/LFM2-ColBERT-350M) | 2025-2026 | 2025-11 / 2026 | Retrieval, tool use, extraction | Liquid AI | LFM Open License / open weights noted; commercial-use limits need review | Type-specific small models for ColBERT retrieval, RAG, tool use, extraction, math, transcript, PII extraction, and EN-JP translation. | HF model card / official model page; not added |
| [ERNIE 4.5 family](https://ernie.baidu.com/blog/posts/ernie4.5/) | 2025 | 2025-06-30 | Multimodal MoE LLM/VLM | Baidu ERNIE Team | Apache-2.0 | Open family of 10 large-scale multimodal models, including heterogeneous MoE variants with 47B and 3B active-parameter classes plus a 0.3B dense model. | Official blog; not added |
| [ERNIE-4.5-VL-28B-A3B-Thinking](https://huggingface.co/baidu/ERNIE-4.5-VL-28B-A3B-Thinking) | 2025 | 2025-11 | Vision-language reasoning MoE | Baidu ERNIE Team | Apache-2.0 | 28B-total / 3B-active VLM variant for visual reasoning, grounding, tool use, and video understanding. | HF model card; not added |
| [ERNIE-Image / ERNIE-Image-Turbo](https://github.com/baidu/ERNIE-Image) | 2026 | 2026-04 | Text-to-image generation | Baidu ERNIE-Image Team | open text-to-image model; verify exact license on HF/GitHub before atlas page | 8B single-stream Diffusion Transformer with optional prompt enhancer; SFT and Turbo checkpoints for quality and fast generation. | Official repo; not added |
| [Qwen3 Embedding / Qwen3 Reranker](https://qwenlm.github.io/blog/qwen3-embedding/) | 2025 | 2025-06-05 | Embedding and reranking | Alibaba Qwen | Apache-2.0 | Text embedding and cross-encoder reranking models at 0.6B, 4B, and 8B; 32K sequence length; multilingual and code retrieval support. | Official blog; not added |
| [Jina Embeddings v4](https://jina.ai/models/jina-embeddings-v4/) | 2025 | 2025-06-24 | Multimodal embedding | Jina AI | Qwen Research License per model page; verify reuse constraints | 3.8B universal embedding model for text, images, PDFs, and screenshots; single-vector and late-interaction outputs. | Official model page; not added |
| [Nomic Embed Text v2](https://www.nomic.ai/blog/posts/nomic-embed-text-v2) | 2025 | 2025 | Text embedding | Nomic AI | open-source claim; verify model-card license | Multilingual MoE embedding model with Matryoshka truncation and released training data/code claims. | Official blog; not added |
| [NVIDIA Parakeet-TDT-0.6B v2 / v3](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v2) | 2025 | 2025-05 / 2025-09 | ASR / speech-to-text | NVIDIA NeMo | public HF checkpoints; verify NVIDIA license per card | FastConformer + TDT automatic speech recognition family; v3 extends multilingual ASR coverage. | HF model card / NeMo docs; not added |
| [NVIDIA Canary-1B v2](https://docs.nvidia.com/nemo-framework/user-guide/25.09/nemotoolkit/asr/models.html) | 2025 | 2025-09 | ASR + speech translation | NVIDIA NeMo | public HF checkpoints; verify NVIDIA license per card | FastConformer encoder + Transformer decoder for multilingual ASR and AST. | NeMo docs; not added |
| [Dia 1.6B](https://huggingface.co/models?search=Dia+1.6B) | 2025 | 2025-04 | Text-to-speech | Nari Labs | open-source/open-weight claims; needs primary license check | 1.6B dialogue-oriented TTS model for expressive multi-speaker speech synthesis. | HF lookup; verify before atlas |
| [Sesame CSM-1B](https://huggingface.co/sesame/csm-1b) | 2025 | 2025-03 / 2025-05 HF Transformers | Conversational speech generation / TTS | Sesame | Apache-2.0 | 1B conversational speech model for text/audio-conditioned speech generation, useful as an open dialogue-TTS baseline. | HF model card; not added |
| [Qwen-Image / Qwen-Image-2512](https://huggingface.co/models?search=Qwen-Image) | 2025 | 2025-08 / 2025-12 | Text-to-image and image editing | Alibaba Qwen | Apache-2.0 reported for initial Qwen-Image; verify each checkpoint | 20B MMDiT image model family with strong text rendering and edit variants; 2026 Qwen-Image-2.0 is tracked separately in the proprietary/watchlist section until weights are confirmed. | HF lookup / technical report; not added |
| [FLUX.1 Kontext [dev]](https://bfl.ai/announcements/flux-1-kontext-dev) | 2025 | 2025-06-26 | Image generation/editing | Black Forest Labs | FLUX.1 Non-Commercial License | 12B open-weight in-context image generation and editing model based on FLUX.1 Kontext. | Official announcement; not added |
| [HiDream-I1](https://arxiv.org/abs/2505.22705) | 2025 | 2025-04 / 2025-05 report | Text-to-image generation | HiDream AI | open-source claim; verify exact license/model card | 17B sparse Diffusion Transformer image generation foundation model. | Technical report; not added |
| [Wan2.2 / Wan2.1-VACE / FLF2V](https://github.com/Wan-Video/Wan2.2) | 2025 | 2025-07-28 / 2025-05-14 VACE | Video generation/editing | Wan-Video / Alibaba ecosystem | Apache-2.0 repo; verify per checkpoint | Open video suite for text-to-video, image-to-video, text+image-to-video, video editing, text-to-image, and video-to-audio workflows; 2.2 is the newer MoE video line. | Added as `models/wan2-2-video-generation-suite/index.html` |
| [HunyuanVideo / HunyuanVideo 1.5](https://github.com/Tencent-Hunyuan/HunyuanVideo) | 2025 | 2025-03 I2V / 2025-11 1.5 | Video generation | Tencent Hunyuan | open-source/open-weight claim; verify license per repo/card | Open video foundation model family; 1.5 report describes an 8.3B efficient T2V/I2V model. | Official repo / report; not added |
| [LTX-2 / LTX-2.3](https://ltx.io/model/ltx-2-3) | 2026 | 2026-01 / 2026-03-05 page | Audio+video generation | Lightricks / LTX | open-source setup claimed; verify weights/license | Production-ready synchronized audio/video generation family with local ComfyUI workflows, text-to-video, image-to-video, audio-to-video, retake, interpolation, lip-sync, and fast variants. | Official model page / release announcement; not added |
| [Open-Sora 2.0](https://arxiv.org/abs/2503.09642) | 2025 | 2025-03 | Video generation | HPC-AI Tech / Open-Sora contributors | open-sourced claim; verify repo and checkpoint license | Commercial-level open video generation model trained with a reported $200K budget. | Technical report; not added |
| [Hunyuan3D 2.1](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1) | 2025 | 2025-06 | 3D asset generation | Tencent Hunyuan | open-source claim; verify license per repo/card | Image-to-3D asset generation with production-ready PBR material support and multi-view variants. | Official repo; not added |
| [Microsoft TRELLIS / TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | 2025-2026 | 2025-03 / 2026-04 leads | 3D asset generation | Microsoft Research | open-source repo; verify license/checkpoints | Structured 3D latents for scalable text/image-to-3D generation; TRELLIS.2 is a 4B high-fidelity image-to-3D lead with compact structured latents and production-oriented PBR asset generation. | Official repo; not added |
| [TripoSG](https://arxiv.org/abs/2502.06608) | 2025 | 2025-02 | 3D shape generation | Tripo AI / collaborators | public release promised; verify actual weights/license | Large-scale rectified-flow 3D shape synthesis model for high-fidelity single-image 3D generation. | Technical report; verify before atlas |
| [Evo 2](https://arcinstitute.org/news/evo2) | 2025 | 2025-02-19 | Genomic foundation model | Arc Institute / NVIDIA / Stanford / UC Berkeley / UCSF | code, data, and weights shared as fully open-source per announcement | StripedHyena 2 architecture trained on 9.3T nucleotide tokens across 128K+ genomes; up to 1M-token genetic context. | Added as `models/evo-2-genomic-foundation-model/index.html` |
| [Boltz-2](https://boltz.bio/boltz2) | 2025 | 2025-06-06 | Biomolecular structure + affinity | MIT / Recursion | open-source for academic and commercial use per announcement | Biomolecular foundation model for co-folding and binding-affinity prediction across proteins, nucleic acids, and ligands. | Official page; not added |
| [BoltzGen](https://boltz.bio/boltzgen) | 2025 | 2025-10-26 | Biomolecular generative design | MIT / Recursion / Boltz team | MIT license claimed | All-atom generative diffusion model for universal protein/biomolecular binder design. | Official page; not added |
| [TxGemma](https://deepmind.google/en/models/gemma/txgemma/) | 2025 | 2025-03-25 / 2025-04 report | Therapeutics foundation models | Google DeepMind | Gemma terms / open models | Gemma-family prediction and chat models for therapeutic development tasks across targets, chemistry, biology, safety, and clinical outcomes. | Official page / technical report; not added |
| [TimesFM 2.5](https://github.com/google-research/timesfm) | 2025-2026 | 2025-09 / 2026-03-31 update | Time-series forecasting | Google Research | public checkpoints / open repo; verify license | 200M time-series foundation model checkpoint with longer context, updated inference APIs, and restored covariate support. | Official repo / HF docs; not added |
| [Moirai-MoE / Moirai 2.0](https://openreview.net/forum?id=SrEOUSyJcR) | 2025 | 2025-05 / 2025-11 report | Time-series forecasting | Salesforce Research / academic collaborators | paper/code availability needs verification | Sparse MoE time-series foundation model family; Moirai 2.0 introduces a decoder-only forecasting model trained on 36M series. | Paper lead; verify before atlas |
| [Aurora](https://blogs.microsoft.com/on-the-issues/2025/11/13/the-next-phase-of-aurora-open-and-collaborative-ai-for-weather-and-climate-forecasting/) | 2025 | 2025-11 open push | Weather/climate forecasting | Microsoft Research | source code and model weights described as open | 1.3B-class Earth-system/weather foundation model; Microsoft announced a broader open collaborative platform direction. | Added as `models/aurora/index.html` |
| [ShieldGemma 2](https://ai.google.dev/gemma/docs/shieldgemma/model_card_2) | 2025 | 2025-04 | Image safety classifier | Google DeepMind | Gemma terms / open weights | 4B image safety classifier built on Gemma 3 for synthetic and natural image moderation. | Official model card; not added |
| [Llama Prompt Guard 2](https://huggingface.co/meta-llama/Llama-Prompt-Guard-2-86M) | 2025 | 2025-04-29 | Prompt-injection/jailbreak classifier | Meta Llama | Llama license / open weights | 22M and 86M lightweight text classifiers for prompt-injection and jailbreak detection. | HF model card; not added |
| [OpenCUA](https://opencua.xlang.ai/) | 2025 | 2025-08 / 2025-10 updates | Computer-use agent model | XLang / OpenCUA contributors | open-source framework; verify model licenses | Open computer-use agent foundations with AgentNet data and OpenCUA model checkpoints, including 32B-class agent model leads. | Official project; not added |
| [UI-TARS-1.5-7B](https://github.com/bytedance/UI-TARS) | 2025 | 2025-04-16 | GUI agent / computer-use VLM | ByteDance Seed | Apache-2.0 per repo/release; verify checkpoint license | Multimodal GUI agent for desktop, web, game, and mobile environments, with stronger grounding, planning, and computer-control behavior. | Added as `models/ui-tars/index.html` |
| [ShowUI](https://github.com/showlab/ShowUI) | 2025 | CVPR 2025 | GUI vision-language-action | Show Lab / collaborators | open-source repo; verify checkpoint license | End-to-end VLA model for GUI visual agents and computer use from screenshots. | Official repo; not added |
| [OS-Atlas](https://github.com/OS-Copilot/OS-Atlas) | 2025 | ICLR 2025 | GUI action model | OS-Copilot collaborators | open-source toolkit/model; verify checkpoint license | Foundation action model for generalist GUI agents with grounding and OOD agentic tasks. | Official repo; not added |
| [OpenPI / pi0](https://www.pi.website/blog/openpi) | 2025 | 2025-02-04 | Robotics VLA / flow action model | Physical Intelligence | code and weights released in openpi repo; verify license | General-purpose robotic foundation model released with code and weights for fine-tuning across robot embodiments. | Official blog; not added |
| [SmolVLA](https://huggingface.co/models?search=SmolVLA) | 2025 | 2025-06 | Robotics VLA | Hugging Face / LeRobot community | open-source claim; verify model card | 450M-class efficient vision-language-action model trained on LeRobot community data. | HF lookup; verify before atlas |
| [NVIDIA Isaac GR00T N1](https://research.nvidia.com/publication/2025-03_nvidia-isaac-gr00t-n1-open-foundation-model-humanoid-robots) | 2025 | 2025-03-17 | Humanoid robotics VLA | NVIDIA Research | open model; verify exact model license | Dual-system vision-language-action foundation model for generalized humanoid reasoning and manipulation skills. | Official research page; not added |
| [NVIDIA Isaac GR00T N1.7](https://huggingface.co/blog/nvidia/gr00t-n1-7) | 2026 | 2026-04-17 | Humanoid robotics reasoning VLA | NVIDIA | NVIDIA Open Model License / commercially licensed per HF blog | Open reasoning VLA update for generalized humanoids, with HF model collection and deployment artifacts. | Added as `models/nvidia-isaac-gr00t-n1-7/index.html` |

## 2026 Recent / Successor Candidate Leads

This pass intentionally includes broader, less-filtered candidates. Treat these
as search leads to verify for weights, license, reproducibility, and atlas fit
before promoting them into stable OSS rows. Rows already covered in the main
inventory or atlas should be omitted here unless they represent a materially
new modality, domain, or successor artifact.

| Model / family | Year | Release date | Type | Lab / origin | License / openness | Architecture / modality note | Source / atlas status |
|---|---:|---|---|---|---|---|---|
| [Trinity-Large-Thinking](https://www.arcee.ai/blog/trinity-large-thinking) | 2026 | 2026-04-01 | Open agent/reasoning model | Arcee AI | Apache-2.0 per announcement | Large thinking model aimed at autonomous agents and long-horizon tasks, with weights released on HF per Arcee. | Official blog; verify HF card |
| [HyperNova 60B 2602](https://www.globenewswire.com/news-release/2026/02/24/3243695/0/en/Multiverse-Computing-Opens-Full-Access-to-HyperNova-60B-2602-on-Hugging-Face.html) | 2026 | 2026-02-24 | Compressed agentic/coding LLM | Multiverse Computing | free HF access claimed; verify license | 60B compressed derivative of gpt-oss-120B positioned for tool calling and agentic coding; useful for compression/efficiency coverage. | Release announcement; verify before atlas |
| [Voxtral TTS](https://docs.mistral.ai/models/voxtral-tts-26-03) | 2026 | 2026-03-23 / 2026-03-26 report | Text-to-speech / voice cloning | Mistral AI | open model per docs; verify exact license on HF | Multilingual text-to-speech model with zero-shot voice cloning and low-latency voice-agent positioning. | Official docs / technical report; not added |
| [Leanstral](https://mistral.ai/news/leanstral) | 2026 | 2026-03-16 | Formal proof / Lean 4 code agent | Mistral AI | Apache-2.0 per announcement | Open code agent specialized for Lean 4 formal proof engineering and reasoning about program properties. | Official announcement; not added |
| [Chroma 1.0](https://www.prnewswire.com/news-releases/flashlabs-releases-chroma-1-0-the-worlds-first-open-source-end-to-end-real-time-voice-ai-model-302667072.html) | 2026 | 2026-01-22 | Real-time speech-to-speech | FlashLabs | open-source claim; verify repo/model card | End-to-end real-time speech-to-speech model with personalized voice cloning, intended to avoid ASR-to-LLM-to-TTS cascades. | Company release; verify before atlas |
| [Higgs Audio v2](https://huggingface.co/bosonai/higgs-audio-v2-generation-3B-base) | 2026 | 2026-05 leads | Audio foundation model | BosonAI | public HF weights; verify license | 3B-class audio generation model pretrained on large audio/text corpora, positioned for speech and broader audio generation. | HF model card; not added |
| [Roblox Cube 4D / Cube Foundation Model](https://about.roblox.com/newsroom/2026/02/accelerating-creation-powered-roblox-cube-foundation-model) | 2026 | 2026-02 4D update | 3D/4D interactive object generation | Roblox | Cube 3D open-source version released earlier; 4D openness needs verification | 4D generation extension adds interactivity/behavior to generated 3D objects, powered by Roblox's Cube Foundation Model. | Official blog; verify 2026 artifacts |
| [InSpatio WorldFM](https://www.inspatio.com/models/worldfm) | 2026 | 2026-03-04 | Real-time 3D world model | InSpatio | open-source claim; verify GitHub/model license | Multi-view-consistent real-time generative frame/world model for spatial intelligence on consumer GPUs. | Official model page; verify before atlas |
| [LingBot-World](https://arxiv.org/abs/2601.20540) | 2026 | 2026-01-28 | Embodied/world simulator | Robbyant / Ant Group ecosystem | open-sourced claim; verify repo/model license | Open world simulator derived from video generation for embodied intelligence, autonomous driving, gaming, and robot learning. | Technical report / release lead; verify before atlas |
| [Alpamayo 1](https://nvidianews.nvidia.com/news/alpamayo-autonomous-vehicle-development) | 2026 | 2026-01-05 | Autonomous-driving reasoning VLA | NVIDIA | open weights and open-source inference scripts per NVIDIA | 10B chain-of-thought reasoning VLA for AV research; uses video input to generate driving trajectories and reasoning traces. | NVIDIA newsroom; not added |
| [OpenDriveVLA](https://drivevla.github.io/) | 2026 | AAAI 2026 | Autonomous-driving VLA | DriveVLA authors | project public; verify code/weights/license | End-to-end VLA model for autonomous driving actions conditioned on 3D perception, ego state, and driver commands. | Project page; verify before atlas |
| [Earth-2 open weather models](https://research.nvidia.com/labs/climate/tag/weather/) | 2026 | 2026-01-26 | Weather/climate foundation models | NVIDIA Climate / Earth-2 | open-source models claimed; verify per model | HEAL-DA for global data assimilation, ATLAS for medium-range forecasting, and StormScope for nowcasting. | Official NVIDIA climate index; not added |
| [Surya 1.0](https://huggingface.co/nasa-ibm-ai4science/Surya-1.0) | 2026 | 2026 leads | Heliophysics / space-weather foundation model | NASA / IBM / partners | open science with weights/config/preprocessing per HF | 366M transformer pretrained on 9 years of Solar Dynamics Observatory data for solar dynamics and space-weather forecasting. | HF model card; not added |
| [Earth System Foundation Model](https://arxiv.org/abs/2605.00850) | 2026 | 2026-04-20 | Earth-system forecasting | ESFM authors | fully open claimed; verify repo/weights | Unified framework for heterogeneous Earth-system data integration and forecasting, building on Aurora-style 3D Swin UNet ideas. | Technical report; verify before atlas |
| [Chronos-2](https://huggingface.co/amazon/chronos-2) | 2026 | 2026 public card / 2025-10 paper | Time-series forecasting | Amazon | public HF model; verify license | 120M encoder-only time-series foundation model for zero-shot universal forecasting across univariate and multivariate settings. | Added as `models/chronos2/index.html` |
| [Chronicle](https://arxiv.org/abs/2605.20268) | 2026 | 2026-05-18 | Multimodal text + time-series model | Chronicle authors | paper lead; weights unknown | Jointly pretrained model for language and time-series understanding from scratch, bridging numerical temporal data and text. | Technical report; watchlist |
| [Proteina-Complexa](https://developer.nvidia.com/blog/designing-protein-binders-using-the-generative-model-proteina-complexa/) | 2026 | 2026-03-25 blog / ICLR 2026 | Protein binder/enzyme design | NVIDIA BioNeMo / collaborators | released model/repo exists; verify license | Fully atomistic protein binder and enzyme design model using partially latent flow matching plus inference-time search. | NVIDIA technical blog / repo lead; not added |
| [OpenMidnight](https://huggingface.co/SophontAI/OpenMidnight) | 2026 | 2026 leads | Computational pathology foundation model | SophontAI | fully open-source claim; verify license | Pathology foundation model with public weights, training code, and pipeline claims, aimed at low-cost reproducible WSI research. | HF model card; not added |
| [CARE](https://huggingface.co/Zipper-1/CARE) | 2026 | CVPR 2026 | Computational pathology WSI encoder | CARE authors | public HF card; verify license | Cross-modal Adaptive Region Encoder for slide-level whole-slide-image foundation modeling. | HF model card; not added |
| [MOOZY](https://arxiv.org/abs/2603.27048) | 2026 | 2026-03-27 | Patient-level pathology foundation model | AtlasAnalyticsLab / collaborators | open reproducible claim; verify weights/license | Patient-first histopathology model pretraining over relationships among multiple slides from the same patient. | Technical report / HF lead; verify before atlas |
| [MuPD](https://arxiv.org/abs/2604.03635) | 2026 | 2026-04 | Multimodal pathology diffusion model | MuPD authors | paper lead; weights unknown | Generative foundation model aligning H&E histology, RNA profiles, and clinical text through diffusion for cross-modal synthesis. | Technical report; watchlist |
| [Carbon DNA FM](https://huggingfacebio-carbon-demo.hf.space/) | 2026 | 2026 leads | Autoregressive genomic foundation model | Hugging Face Bio / Carbon contributors | open-source claim; verify repo/model card | Fast DNA foundation model for genome-scale sequence modeling and mutation interpretation. | Demo / HF Bio lead; verify before atlas |
| [NVIDIA VoiceChat](https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai) | 2026 | 2026-03-16 | Real-time voice model | NVIDIA | open model family claimed; verify per checkpoint | Real-time listen-and-respond voice-chat model from NVIDIA's 2026 open model family; kept separate from already-listed Nemotron 3 text/omni rows. | NVIDIA newsroom; verify before atlas |

## Proprietary / Watchlist

These are useful to track for competitive context, but they should not be added
as OSS/open-weight atlas rows unless a public checkpoint or clearly reusable
model artifact appears.

| Model / family | Year | Release date | Lab | Current openness read | Why track |
|---|---:|---|---|---|---|
| [ERNIE 5.0](https://arxiv.org/abs/2602.04705) | 2026 | 2026-01-22 full release / 2025-11 preview | Baidu | Technical report public; no public open weights found in quick check | Native autoregressive omni-modal trillion-parameter MoE for text, image, video, and audio understanding/generation; elastic sub-model training. |
| [ERNIE 5.1](https://ernie.baidu.com/blog/posts/ernie-5.1-0508-release/) | 2026 | 2026-05-09 | Baidu | Blog/API/playground public; no public open weights found in quick check | ERNIE 5.0-derived smaller model with stronger agent/search/reasoning claims and improved cost-performance. |
| [Qwen-Image-2.0 API/chat release](https://arxiv.org/abs/2605.10730) | 2026 | 2026-02 / 2026-05 report | Alibaba Qwen | Technical report and product access found; no public open weights in quick check | Important image-generation successor because it unifies high-fidelity generation and precise editing with native 2K/text-rendering emphasis; keep watchlist until weights/license are confirmed. |
| GR00T N2 / Cosmos 3 | 2026 | announced for later 2026 | NVIDIA | Previewed / expected open-model direction, but not confirmed as released in this pass | Next-wave physical-AI and robotics/world-model successors; track as likely follow-ups after public artifacts appear. |
| Seedance / Seedream proprietary media models | 2025-2026 | varies | ByteDance Seed | API/product releases; openness varies by checkpoint | Important video/image baselines, but only include individual open checkpoints if weights and license are confirmed. |

## Diffusion / Flow Prompt Backlog

The prompt folder now has 24 diffusion, denoising, or flow-model prompt folders
covering 27 named targets. `Atlas status` marks pages that are already present
in `models/`; the remaining rows still need downloaded HTML artifacts before
they can be added to the atlas.

| Model target | Year | Lab / origin | Modality / architecture note | Prompt folder | Atlas status |
|---|---:|---|---|---|---|
| DiffDock | 2022 | MIT researchers | Diffusion over ligand translation, rotation, and torsion for molecular docking. | `claude-design-prompts/diffdock/` | Not added |
| Diffusion Policy | 2023 | Columbia / MIT / Toyota Research Institute collaborators | Conditional denoising diffusion over robot action trajectories. | `claude-design-prompts/diffusion-policy/` | Not added |
| Diffusion-VLA / DiVLA lead | 2024 | paper authors; verify official project | Robot foundation model combining autoregressive reasoning with diffusion action generation. | `claude-design-prompts/diffusion-vla/` | Not added |
| Discrete Diffusion VLA | 2025 | paper authors | Single-transformer VLA policy using discrete diffusion for action chunks. | `claude-design-prompts/discrete-diffusion-vla/` | Added as `models/discrete-diffusion-vla/index.html` |
| Dream 7B | 2025 | HKU NLP / Huawei Noah's Ark Lab | Open diffusion LLM for reasoning and flexible iterative inference. | `claude-design-prompts/dream-7b/` | Not added |
| Dream-Coder 7B | 2025 | DreamLM / HKU NLP collaborators | Discrete diffusion language model for code with any-order generation. | `claude-design-prompts/dream-coder-7b/` | Not added |
| Dream-VL / Dream-VLA | 2025 | HKU NLP collaborators | Diffusion-language-model backbone for vision-language and vision-language-action. | `claude-design-prompts/dream-vl-dream-vla/` | Not added |
| GenCast | 2023-2024 | Google DeepMind | Diffusion-based ensemble weather forecasting in the GraphCast ecosystem. | `claude-design-prompts/gencast/` | Not added |
| LLaDA 8B | 2025 | ML-GSAI and collaborators | Masked discrete diffusion language model trained from scratch. | `claude-design-prompts/llada-8b/` | Not added |
| LLaDA2.0-flash | 2025 | inclusionAI / Ant Group | 100B-class MoE discrete diffusion language model converted from autoregressive models. | `claude-design-prompts/llada2-0-flash/` | Added: `models/llada2-0-flash/` |
| MatterGen | 2023-2025 | Microsoft Research AI for Science | Diffusion model for inorganic crystal and materials generation with property conditioning. | `claude-design-prompts/mattergen/` | Not added |
| MedSegDiff / MedSegDiff-V2 | 2023 | ImprintLab and collaborators | Diffusion probabilistic medical image segmentation; V2 adds transformer-based diffusion design. | `claude-design-prompts/medsegdiff/` | Not added |
| Mercury / Mercury Coder | 2025 | Inception Labs | Commercial-scale diffusion LLM for coding with parallel token prediction. | `claude-design-prompts/mercury-coder/` | Not added |
| Mochi 1 | 2024 | Genmo | Open text-to-video diffusion model with Asymmetric Diffusion Transformer. | `claude-design-prompts/mochi-1/` | Not added |
| Movie Gen | 2024 | Meta | Media foundation model family for video, audio, editing, and personalization. | `claude-design-prompts/movie-gen/` | Not added |
| Nemotron-Labs-Diffusion | 2026 | NVIDIA | Tri-mode language model unifying autoregressive, diffusion, and self-speculation decoding. | `claude-design-prompts/nemotron-labs-diffusion/` | Added: `models/nemotron-labs-diffusion/` |
| NVIDIA Cosmos Diffusion | 2025 | NVIDIA | Cosmos Text2World and Video2World diffusion models for physical AI world generation. | `claude-design-prompts/nvidia-cosmos-diffusion/` | Added as `models/nvidia-cosmos-diffusion/index.html`; separate Cosmos WFM overview also exists |
| Octo | 2024 | Octo Model Team / UC Berkeley collaborators | Open transformer robot policy; included with the robotics generative-control prompt batch. | `claude-design-prompts/octo/` | Not added |
| pi0 / pi0.5 / OpenPI | 2024-2025 | Physical Intelligence | Vision-language-action flow model family for robot control. | `claude-design-prompts/pi0-openpi/` | Not added |
| RDT-1B | 2024 | Robotics Diffusion Transformer authors | 1.2B diffusion foundation model for bimanual robotic manipulation. | `claude-design-prompts/rdt-1b/` | Not added |
| RFdiffusion / RFdiffusion3 | 2023 / 2025-2026 leads | Institute for Protein Design / Baker Lab collaborators | RoseTTAFold-based diffusion for protein backbone and all-atom biomolecular design. | `claude-design-prompts/rfdiffusion-rfdiffusion3/` | Not added |
| Score-Based Diffusion for Accelerated MRI | 2022 | medical-imaging research literature | Score-based generative prior for MRI reconstruction with data consistency. | `claude-design-prompts/score-based-diffusion-accelerated-mri/` | Not added |
| Stable Audio Open 1.0 | 2024 | Stability AI | Open-weights text-to-audio latent diffusion model based on a transformer architecture. | `claude-design-prompts/stable-audio-open/` | Not added |
| Stable Diffusion 3 / SDXL | 2023-2024 | Stability AI | SDXL latent diffusion; SD3 rectified-flow MMDiT image generation. | `claude-design-prompts/stable-diffusion-3-sdxl/` | Added as `models/stable-diffusion-3-sdxl/index.html` |

## Quick Follow-Up Checks Before Atlas Inclusion

Before turning any row into a downloaded atlas page:

1. Open the lookup link and confirm a public checkpoint or official project page exists.
2. Prefer a primary source: model card, official repo, technical report, or release blog.
3. Confirm exact release date, model size, active parameter count, context length, license, and architecture details.
4. If a row is marked `offhand mention`, treat it as a lead, not a verified catalog entry.
5. Do not add an atlas card until there is a downloaded standalone HTML artifact for that model.

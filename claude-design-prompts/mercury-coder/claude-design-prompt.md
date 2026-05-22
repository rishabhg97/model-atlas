# Claude Design Prompt - Mercury Coder

Metadata from source inventory:
- Model: Mercury / Mercury Coder
- Year: 2025
- Lab: Inception Labs
- Size / active size: Mini and Small variants; exact parameter counts must be source-verified
- Architecture / modality note: commercial-scale diffusion LLM for coding; transformer parameterization with parallel token prediction
- Source lead: https://arxiv.org/abs/2506.17298

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Mercury Coder.

Primary source leads to use:
- Mercury: Ultra-Fast Language Models Based on Diffusion: https://arxiv.org/abs/2506.17298
- Inception Labs platform lead: https://platform.inceptionlabs.ai/
- Inception Labs playground lead: https://chat.inceptionlabs.ai/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Mercury Coder is a commercial/API-first model family. Treat weights, full configs, training data, and exact architectural dimensions as closed or not reported unless the paper explicitly provides them. Include closed-weight/API caveats prominently.

Model identity:
- Model: Mercury Coder Mini and Mercury Coder Small
- Family/vendor or lab: Inception Labs
- Release/report date: June 2025
- Parameter scale: not reported in source lead unless found in the paper
- Target page title: "Mercury Coder Architecture"

Known architecture and training facts:
- Mercury is a diffusion-based large language model family for code.
- Models are parameterized via transformer architectures and trained to predict multiple tokens in parallel.
- Mercury Coder includes Mini and Small variants.
- The paper reports state-of-the-art throughput on NVIDIA H100 GPUs: 1109 tokens/sec for Mini and 737 tokens/sec for Small, with up to 10x average speedup over speed-optimized frontier models while maintaining comparable quality.
- The paper reports real-world validation on Copilot Arena, where the model ranked second on quality and fastest overall at the time of reporting.

Required architecture content:
1. End-to-end code generation map: prompt tokens, noisy/masked code sequence, diffusion transformer, parallel token update, final code.
2. Explain parallel multi-token prediction versus autoregressive left-to-right decoding.
3. Diagram diffusion inference speed/quality tradeoffs, number of denoising steps if reported, and throughput path on H100.
4. Include Mini vs Small comparison cards, but only fill parameter counts, context length, and config dimensions if official sources report them.
5. Include code benchmark panels and Copilot Arena notes with source-reported labels.
6. Add a "Closed/API caveats" section: weights/config/training data may be unavailable; do not imply local reproducibility unless official release supports it.
7. Label all missing dimensions, tokenizer details, and sampler details as "not reported."

Visual requirements:
- Make this a code-model briefing page focused on speed-quality frontier and diffusion decoding mechanics.
- First viewport should show Mercury Coder's parallel diffusion decoding and H100 throughput numbers.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

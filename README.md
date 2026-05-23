# Model Architecture Atlas

A searchable static atlas of downloaded model architecture pages.

The site has one home page, `index.html`, and one self-contained folder per
model under `models/`. Each model page keeps its own HTML, CSS, scripts,
diagrams, and local assets.

The home page is a visual directory: it supports search, filtering, card/table
views, local company logo badges, architecture-preview cards, and Artificial
Analysis intelligence score badges where a conservative public LLM match exists.

## Current Models

The atlas currently links 30 downloaded architecture pages:

- Aurora
- Chronos-2
- Cosmos WFM 1.0
- Cosmos-1.0-Diffusion
- DeepSeek-V4
- Discrete Diffusion VLA
- Evo 2
- Gemma 4 31B
- Gemma 4 26B-A4B
- Gemma 4 E4B
- GLM-5.1 744B-A69B
- GPT-OSS 120B
- Isaac GR00T N1.7
- Kimi K2.6 1T
- Liquid LFM2-VL / LFM2.5-VL
- Ling 2.6 1T
- LLaDA2.0-flash
- MiMo-V2.5-Pro
- Nemotron 3 Nano 30B-A3B
- Nemotron 3 Super 120B-A12B
- Nemotron 3 Ultra
- Nemotron-Labs-Diffusion
- Qwen2 7B
- Qwen3.6 35B-A3B
- Qwen3-Omni-30B-A3B-Thinking
- Sarvam 105B-A13B
- Stable Diffusion 3 / SDXL
- UI-TARS-1.5-7B
- Wan2.2 Video Suite
- ZAYA1-8B

## Layout

```text
.
|-- index.html
|-- README.md
|-- AGENTS.md
|-- CLAUDE_DESIGN_PROMPT_TEMPLATE.md
|-- assets/
|   `-- logos/
|-- claude-design-prompts/
|-- oss-model-releases-2025-plus.md
`-- models/
    |-- deepseek-v4/
    |   `-- index.html
    |-- qwen2-7b/
    |   `-- index.html
    `-- ...
```

## View Locally

Open the home page directly:

```bash
open index.html
```

Or serve the repo over HTTP:

```bash
python3 -m http.server 3001
```

Then visit:

```text
http://127.0.0.1:3001/index.html
```

## Add A Downloaded Model Page

1. Create `models/<model-slug>/`.
2. Move the downloaded HTML to `models/<model-slug>/index.html`.
3. Copy any referenced local assets into that folder, preserving relative paths.
4. Add a visible `Atlas home` link back to `../../index.html`.
5. Add one matching entry to `ATLAS_PAGES` in `index.html`.
6. Check the Artificial Analysis free LLM API with `AA_INDEX_API` from `.env`.
   Add `aaIndex` only for exact or near-exact model plus creator matches; leave
   ambiguous family pages and non-LLM pages as `Not listed`.
7. Verify the home page and model page return HTTP `200`.

For detailed agent workflow rules, including what to do when no downloaded HTML
exists yet, see `AGENTS.md`.

## Candidate Inventory

`oss-model-releases-2025-plus.md` tracks open-source/open-weight model leads
from the source reports plus later breadth candidates across text, diffusion,
video, audio, weather, biology, robotics, time-series, and GUI-agent systems.
Rows marked as already added should stay out of the prompt backlog unless a
replacement visualization is needed.

## GitHub Pages

This repo is meant to publish from the repository root with GitHub Pages.

Expected URL:

```text
https://rishabhg97.github.io/model-atlas/
```

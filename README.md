# Model Architecture Atlas

A simple static atlas of downloaded model architecture pages.

The site has one home page, `index.html`, and one self-contained folder per
model under `models/`. Each model page keeps its own HTML, CSS, scripts,
diagrams, and local assets.

## Current Models

- Cosmos World Foundation Models
- DeepSeek-V4
- Gemma 4 31B
- Gemma 4 26B-A4B
- Gemma 4 E4B
- GLM-5.1 744B-A69B
- GPT-OSS 120B
- Kimi K2.6 1T
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
- ZAYA1-8B

## Layout

```text
.
|-- index.html
|-- README.md
|-- AGENTS.md
|-- CLAUDE_DESIGN_PROMPT_TEMPLATE.md
|-- claude-design-prompts/
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
6. Verify the home page and model page return HTTP `200`.

For detailed agent workflow rules, including what to do when no downloaded HTML
exists yet, see `AGENTS.md`.

## GitHub Pages

This repo is meant to publish from the repository root with GitHub Pages.

Expected URL:

```text
https://rishabhg97.github.io/model-atlas/
```

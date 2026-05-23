=== NV Visor managed block ===
Use Visor for shell commands. Read the full Visor command guidance: @/Users/rigarg/.codex/VISOR.md
=== NV Visor managed block ===

# Model Architecture Atlas Guidelines

This folder is now a lightweight home interface for downloaded model architecture HTML artifacts.

## Ground Rules

- Keep the atlas simple: one root `index.html` plus one folder per downloaded model page.
- Do not rebuild downloaded model pages into a shared component system.
- Do not require common schemas, citations JSON, tests, or source-note bundles unless the user asks for them.
- Do not store model checkpoints, generated weights, large raw PDFs, or unrelated web mirrors.
- Preserve each downloaded page's own visual language, scripts, CSS, diagrams, tabs, and assets.
- If a downloaded page references local assets, copy those assets into that model's folder so the page is self-contained.

## Model Folder Shape

Each downloaded model page should live at:

```text
models/<model-slug>/
  index.html
  <page-specific CSS/JS/assets>
```

Examples:

```text
models/deepseek-v4/index.html
models/qwen2-7b/index.html
models/nemotron-3-nano/index.html
```

## Adding A Downloaded Page

1. Create a folder under `models/<model-slug>/`.
2. Move the downloaded HTML file to `models/<model-slug>/index.html`.
3. Copy any referenced assets beside it, preserving relative paths such as `kaizen/` or `styles.css`.
4. Add a visible back link from the model page to the atlas home. For pages under `models/<model-slug>/`, the link should point to `../../index.html` and use clear text such as `Atlas home`.
5. Always make a corresponding change to the root `index.html`: add one `ATLAS_PAGES` entry with the model page `href`, so homepage linkage is preserved for every new model file.
6. Check whether Artificial Analysis has a matching public score for the new atlas entry:
   - Use the free API docs at `https://artificialanalysis.ai/api-reference#free-api`.
   - Load the API key from `.env` as `AA_INDEX_API`; never print, commit, or expose the key.
   - Query `https://artificialanalysis.ai/api/v2/data/llms/models` with the `x-api-key` header.
   - For LLM entries, conservatively match by exact or near-exact model name plus creator/vendor. If the API match is solid, set `aaIndex` from `evaluations.artificial_analysis_intelligence_index` and use `aaLabel` to name the matched AA record or evaluation mode.
   - If the page is a broader family page, a non-LLM model, or the match is ambiguous, leave `aaIndex: "Not listed"` and make `aaLabel` describe the page's own benchmark/metric panels instead of guessing.
   - Add or preserve visible attribution to `https://artificialanalysis.ai/` on the root atlas page when AA scores are displayed.
7. Verify the root atlas page and the new model page return HTTP 200 from the local static server.
8. After adding a new model file, commit the atlas update and push it to the remote branch.

## When Asked To Add A New Model

If the user says something like "I want to add model Z to the atlas" and there is not already a downloaded HTML page for that model, do not create a visualization yourself and do not add a placeholder card. First generate a detailed Claude Design prompt for the user.

The prompt must be specific to the requested model, not a generic transformer prompt. Before writing it:

1. Identify the exact model name, version, size, and vendor.
2. Find primary sources: official technical report, model card, config, official repo, release/blog post, and benchmark tables where available.
3. Extract model-specific architecture details: layer counts, hidden size, attention type, positional encoding, MoE structure, routing rules, tokenizer/context length, pre/post-training pipeline, inference/cache details, quantization, benchmark numbers, and any named innovations.
4. If sources disagree or a fact is unavailable, say so in the Claude prompt and ask the design to label it as unknown rather than inventing it.
5. Include the source URLs directly in the prompt so Claude Design can ground the artifact.

Use `CLAUDE_DESIGN_PROMPT_TEMPLATE.md` as the structure for the prompt. Fill in concrete details and remove placeholders before giving it to the user.

After the user downloads the generated HTML page, follow "Adding A Downloaded Page" above.

## Atlas Page Discipline

- The root `index.html` should remain a directory and search/filter surface.
- The root page may store small metadata for cards: title, family, model, href, tags, note, and mark.
- Model-specific architecture content belongs in the downloaded page, not in the root atlas.

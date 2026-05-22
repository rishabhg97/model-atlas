# Model Architecture Atlas

A static atlas for model architecture visualizations.

The atlas is intentionally simple: a root HTML index plus one self-contained
folder per model. Each model page is allowed to have its own design, diagrams,
scripts, tabs, assets, and explanation style. The only shared layer is the home
page that links the downloaded artifacts together.

## What This Repository Contains

- A searchable atlas home page at `index.html`.
- Downloaded model visualization pages under `models/<model-slug>/`.
- A Claude Design prompt template for generating future model pages.
- Agent guidance in `AGENTS.md` so future agents keep the atlas workflow simple.

Current model pages:

| Model | Folder | Notes |
| --- | --- | --- |
| DeepSeek-V4 | `models/deepseek-v4/` | Downloaded HTML artifact with local styles and assets. |
| Qwen2 7B | `models/qwen2-7b/` | Downloaded HTML artifact with local Kaizen assets. |
| Nemotron 3 Nano 30B-A3B | `models/nemotron-3-nano/` | Downloaded HTML artifact with local Kaizen assets. |
| Nemotron 3 Super 120B-A12B | `models/nemotron-3-super-120b/` | Downloaded HTML artifact covering LatentMoE, Mamba-2, MTP, NVFP4, and benchmarks. |

## Design Philosophy

This is not a component library and not a reusable diagram framework.

The useful unit is a complete model-specific visualization page. Different
families can have completely different architecture diagrams, section
structures, visual metaphors, and interaction models. For example, a DeepSeek
page can have sections for DeepSeek-specific mechanisms, while a Nemotron page
can focus on LatentMoE, Mamba-2, MTP, and NVFP4. The atlas home page should not
force those pages into a common architecture schema.

Keep the shared surface small:

- `index.html` lists available pages and provides search/filter navigation.
- Each model folder owns its own `index.html` and local assets.
- Model-specific architecture content belongs inside the model page.
- Future pages should be accurate, source-backed, and complete as standalone
  research briefing artifacts.

## Viewing Locally

Because this is a static site, there is no build step.

Open directly:

```bash
open index.html
```

Or serve it locally:

```bash
python3 -m http.server 3001
```

Then visit:

```text
http://127.0.0.1:3001/index.html
```

Serving over HTTP is useful because it behaves closer to GitHub Pages and avoids
some browser differences around `file://` URLs.

## GitHub Pages

This repository is designed to work as a GitHub Pages site from the repository
root.

Recommended setup:

1. Open the GitHub repository settings.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/root`.
6. Save.

Expected public URL:

```text
https://rishabhg97.github.io/model-atlas/
```

Do not use GitHub's normal source-code file viewer as the primary interface for
the atlas. Use GitHub Pages so the HTML, CSS, JavaScript, anchors, and relative
asset paths render like a real static site.

## Repository Layout

```text
.
|-- index.html
|-- README.md
|-- AGENTS.md
|-- CLAUDE_DESIGN_PROMPT_TEMPLATE.md
`-- models/
    |-- deepseek-v4/
    |   |-- index.html
    |   |-- styles.css
    |   |-- deepseek-architecture.zip
    |   `-- kaizen/
    |-- qwen2-7b/
    |   |-- index.html
    |   `-- kaizen/
    |-- nemotron-3-nano/
    |   |-- index.html
    |   `-- kaizen/
    `-- nemotron-3-super-120b/
        |-- index.html
        `-- kaizen/
```

## Adding A Downloaded Model Page

Use this flow when the user has already generated and downloaded an HTML page
from Claude Design or another design tool.

1. Pick a slug.

   Example:

   ```text
   models/model-z-70b/
   ```

2. Create the folder.

   ```bash
   mkdir -p models/model-z-70b
   ```

3. Move the downloaded HTML into that folder as `index.html`.

   ```bash
   mv ~/Downloads/model-z-architecture.html models/model-z-70b/index.html
   ```

4. Copy any local assets the page references.

   Keep relative paths intact. If the HTML references `kaizen/colors_and_type.css`,
   then the final folder should contain `models/model-z-70b/kaizen/colors_and_type.css`.

5. Add a visible home link inside the model page.

   Pages under `models/<model-slug>/` should link back to:

   ```html
   <a href="../../index.html">Atlas home</a>
   ```

6. Add the page to the `ATLAS_PAGES` array in `index.html`.

   Example:

   ```js
   {
     title: "Model Z 70B Architecture",
     family: "Vendor",
     model: "Model Z 70B",
     href: "models/model-z-70b/index.html",
     status: "downloaded",
     tags: ["MoE", "attention", "benchmarks"],
     note: "Downloaded Claude-design HTML artifact.",
     mark: "MZ"
   }
   ```

7. Verify the site.

   ```bash
   python3 -m http.server 3001
   curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3001/index.html
   curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3001/models/model-z-70b/index.html
   ```

Both pages should return `200`.

## Adding A Model When No HTML Exists Yet

If someone says, "Add model Z to the atlas," and there is no downloaded HTML
artifact yet, do not create a placeholder card and do not build a generic page.

First, generate a detailed prompt for Claude Design.

Use `CLAUDE_DESIGN_PROMPT_TEMPLATE.md` as the structure, but fill in every
placeholder with model-specific facts from primary sources:

- Official technical report or paper.
- Official model card.
- Official config file.
- Official release blog or documentation.
- Reported benchmark tables.
- Any source that clarifies architecture details, inference modes, tokenizer,
  quantization, context length, or post-training pipeline.

The generated prompt should ask Claude Design for a standalone downloadable HTML
page that is specific to the model. It should name the model's actual mechanisms,
dimensions, section names, benchmark values, caveats, and unknowns.

Only after the user downloads the generated HTML should an agent add it to this
repository using the downloaded-page flow above.

## Metadata Rules For `ATLAS_PAGES`

The root `index.html` stores small card metadata only.

Use these fields:

- `title`: Human-readable page title.
- `family`: Model family or vendor used for filtering.
- `model`: Exact model name shown on the card.
- `href`: Relative path to the model page.
- `status`: Usually `downloaded`.
- `tags`: Short searchable labels.
- `note`: One sentence about the artifact.
- `mark`: Two or three character card mark.

Do not put architecture explanations, benchmark tables, or source notes in the
root index metadata. Put that content inside the model page.

## Asset Rules

Model pages should be self-contained after download.

Good:

```text
models/model-z-70b/index.html
models/model-z-70b/kaizen/colors_and_type.css
models/model-z-70b/kaizen/NVIDIA-wordmark.svg
```

Avoid:

- Remote runtime dependencies.
- Observable notebooks.
- CDN-only JavaScript frameworks.
- Absolute local filesystem links.
- Links to assets still sitting in `~/Downloads`.
- Model checkpoints, raw weights, large PDFs, or unrelated web mirrors.

Source links inside the HTML are fine. The visualization itself should still
render offline once the repository is cloned.

## Back Links

Every model page should provide a visible way back to the atlas home.

For model pages located at `models/<model-slug>/index.html`, use:

```text
../../index.html
```

The link text should be clear, such as `Atlas home`. Styling can match the
individual page; it does not need to be shared across models.

## Maintenance Checklist

Before committing a new model page:

- Confirm the downloaded HTML lives at `models/<model-slug>/index.html`.
- Confirm referenced local assets exist in that model folder.
- Confirm the page has a visible `Atlas home` link.
- Confirm `index.html` includes one new `ATLAS_PAGES` entry.
- Confirm the root atlas and new model page return HTTP `200`.
- Confirm the page renders through local HTTP, not only through `file://`.
- Keep unrelated files out of the commit.

## Why There Is No Build System

The atlas should stay portable. A future agent should be able to clone the repo,
drop in a downloaded model page, update one metadata array, and push. Requiring a
framework, package manager, bundler, component architecture, or schema migration
would make that loop slower without improving the final visualization quality.

If a future use case genuinely needs build tooling, add it only for a concrete
reason and document the new workflow here.

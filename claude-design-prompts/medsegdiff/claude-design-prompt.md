# Claude Design Prompt - MedSegDiff and MedSegDiff-V2

Metadata from source inventory:
- Model: MedSegDiff / MedSegDiff-V2
- Year: 2023
- Lab: ImprintLab and collaborators
- Architecture / modality note: diffusion probabilistic framework for medical image segmentation; V2 adds transformer-based diffusion design
- Source lead: https://github.com/ImprintLab/MedSegDiff

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for MedSegDiff and MedSegDiff-V2.

Primary source leads to use:
- MedSegDiff repository: https://github.com/ImprintLab/MedSegDiff
- MedSegDiff-V2 paper: https://arxiv.org/abs/2301.11798
- MedSegDiff paper PDF lead if needed: https://openreview.net/pdf/0e2ba9e74e34aab31e031eb4bb1e0760a0880a4b.pdf

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
MedSegDiff is a medical segmentation framework, not a generative art model. Keep V1 and V2 distinct and avoid clinical claims beyond the reported experiments. Label all missing dataset/task details as unknown.

Model identity:
- Model: MedSegDiff and MedSegDiff-V2
- Family/vendor or lab: diffusion medical image segmentation
- Release/report date: 2023
- Parameter scale: verify from repository/papers
- Target page title: "MedSegDiff Architecture"

Known architecture and training facts:
- MedSegDiff uses a diffusion probabilistic model for segmentation/reconstruction of organs or tissues from medical images.
- The repository presents MedSegDiff as a DPM-based medical image segmentation framework.
- MedSegDiff-V2 is described as a transformer-based diffusion framework for medical image segmentation.
- Source leads mention framework diagrams for V1 and V2 in the repository; use those as primary visual structure.

Required architecture content:
1. End-to-end segmentation map: medical image, noisy segmentation mask, image-conditioned denoiser, refined mask, post-processing/evaluation.
2. Show V1 and V2 lanes: original DPM framework and transformer-enhanced V2.
3. Diagram conditioning path from raw medical image into the denoising model.
4. Include Fourier/noise filtering, dynamic conditional encoding, transformer modules, or SS-Former-like components only if confirmed by the sources.
5. Include datasets, modalities, organs/tissues, and metric tables only with exact reported values.
6. Add clinical caveats: research model, not a diagnostic device, source-reported evaluation only.
7. Label unreported parameter counts, training data, model dimensions, inference steps, and preprocessing as unknown.

Visual requirements:
- First viewport should show medical image to mask through diffusion denoising.
- Use split panels for V1/V2, denoising timelines, and metric cards.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

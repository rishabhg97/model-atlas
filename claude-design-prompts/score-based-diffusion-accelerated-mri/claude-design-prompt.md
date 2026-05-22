# Claude Design Prompt - Score-Based Diffusion for Accelerated MRI

Metadata from source inventory:
- Model/method: Score-based diffusion models for accelerated MRI
- Year: 2022
- Architecture / modality note: score-based generative prior for MRI reconstruction with data consistency
- Source lead: https://www.sciencedirect.com/science/article/pii/S1361841522001268

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for score-based diffusion models for accelerated MRI.

Primary source leads to use:
- Medical Image Analysis article: https://www.sciencedirect.com/science/article/pii/S1361841522001268
- DOI lead: https://doi.org/10.1016/j.media.2022.102479

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
This is a reconstruction method for undersampled MRI, not a downloadable named checkpoint. Use the article for exact sampling equations, network architecture, datasets, and acceleration factors. Label unavailable details as unknown.

Model identity:
- Model/method: Score-based diffusion models for accelerated MRI
- Family/vendor or lab: medical imaging reconstruction
- Release/report date: 2022
- Parameter scale: method/model-specific; verify if reported
- Target page title: "Score-Based Diffusion for Accelerated MRI"

Known architecture and training facts:
- The method applies score-based diffusion/generative modeling to accelerated MRI reconstruction.
- It reconstructs images from undersampled k-space measurements by combining a learned score prior with MRI forward-model/data-consistency constraints.
- The visualization should show k-space undersampling, inverse Fourier reconstruction, iterative score-based refinement, and data-consistency projection where source-confirmed.

Required architecture content:
1. End-to-end MRI reconstruction map: fully sampled target during training, undersampled k-space, zero-filled baseline, score network, iterative reverse diffusion, reconstructed image.
2. Show the MRI forward operator, sampling mask, Fourier transform, and data-consistency step.
3. Diagram the score model as a denoiser/gradient estimator over image distributions.
4. Include acceleration factors, datasets, metrics such as PSNR/SSIM/NMSE, and baselines only with exact source-reported values.
5. Add a clear "Unknowns" section for missing network dimensions, training data details, coil handling, and sampling-step defaults.
6. Add a clinical caveat: research reconstruction method; do not represent as approved clinical software.
7. Label all metrics as source-reported and not independently verified.

Visual requirements:
- First viewport should show undersampled k-space becoming an MRI image through score-based reverse diffusion.
- Use k-space masks, reconstruction timelines, and metric comparison cards.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

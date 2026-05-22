# Claude Design Prompt - Diffusion Policy

Metadata from source inventory:
- Model: Diffusion Policy
- Year: 2023
- Lab: Columbia/MIT/Toyota Research Institute collaborators
- Architecture / modality note: visuomotor policy as conditional denoising diffusion over robot actions
- Source lead: https://arxiv.org/abs/2303.04137

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Diffusion Policy.

Primary source leads to use:
- Diffusion Policy paper: https://arxiv.org/abs/2303.04137
- Diffusion Policy project page: https://diffusion-policy.cs.columbia.edu/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Diffusion Policy is a robotics policy method, not a single fixed-size LLM. Represent method variants and backbones only where the paper reports them. Do not invent parameter counts or deployment frequencies.

Model identity:
- Model/method: Diffusion Policy
- Family/vendor or lab: visuomotor action diffusion policy
- Release/report date: March 2023
- Parameter scale: method-dependent / not a single fixed model size
- Target page title: "Diffusion Policy Architecture"

Known architecture and training facts:
- The method represents visuomotor policies as conditional denoising diffusion processes over robot actions.
- Inference iteratively optimizes actions with respect to a learned action-distribution score field using stochastic Langevin dynamics.
- Key contributions include receding horizon control, visual conditioning, and a time-series diffusion transformer.
- The paper benchmarks 12 tasks from 4 robot manipulation benchmarks and reports an average 46.9% improvement over prior state of the art.
- The formulation helps with multimodal action distributions, high-dimensional action spaces, and training stability.

Required architecture content:
1. End-to-end policy map: visual observation, optional state/language conditioning if reported, noisy action trajectory, denoising network, receding horizon execution.
2. Diagram the action diffusion loop with time/noise conditioning and Langevin/diffusion sampling steps.
3. Show receding horizon control: predict chunk, execute first actions, replan.
4. Show time-series diffusion transformer and visual conditioning internals from source.
5. Include benchmark table over the 12 tasks and 4 benchmarks with exact source-reported values if available.
6. Include a method caveat panel: parameter counts and dimensions are implementation-specific unless specified.
7. Label unreported backbone dimensions, action horizons, and observation encoders as unknown.

Visual requirements:
- First viewport should identify Diffusion Policy as action diffusion for visuomotor control.
- Use denoising trajectory diagrams and a receding-horizon animation-style flow.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

# Claude Design Prompt - DiffDock

Metadata from source inventory:
- Model: DiffDock
- Year: 2022
- Lab: MIT researchers
- Architecture / modality note: diffusion generative model over ligand poses for molecular docking
- Source lead: https://arxiv.org/abs/2210.01776

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for DiffDock.

Primary source leads to use:
- DiffDock paper: https://arxiv.org/abs/2210.01776
- DiffDock project/repository lead if available from the paper: https://github.com/gcorso/DiffDock

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
DiffDock operates on ligand poses over non-Euclidean manifolds, not image-like pixels. Use molecular geometry and docking terminology. Verify exact network components and confidence model from the paper/repo.

Model identity:
- Model: DiffDock
- Family/vendor or lab: diffusion molecular docking
- Release/report date: October 2022
- Parameter scale: not central / verify from repo if reported
- Target page title: "DiffDock Architecture"

Known architecture and training facts:
- DiffDock frames molecular docking as generative modeling rather than direct pose regression.
- It uses a diffusion process over ligand pose degrees of freedom: translation, rotation, and torsion.
- The paper maps docking to a product space of pose degrees of freedom on a non-Euclidean manifold.
- Reported PDBBind top-1 success rate is 38% at RMSD < 2A, compared with 23% for traditional docking and 20% for deep-learning methods in the paper context.
- The paper reports stronger performance on computationally folded structures and includes confidence estimates with selective accuracy.

Required architecture content:
1. End-to-end docking map: protein pocket, ligand conformer, noisy pose, translation/rotation/torsion denoising, ranked docked poses, confidence score.
2. Diagram the product space of translational, rotational, and torsional degrees of freedom.
3. Show diffusion steps as molecular pose updates, not pixel denoising.
4. Include graph/neural network internals from source: protein-ligand graph features, equivariant message passing, score heads, confidence model if reported.
5. Include benchmark panels for PDBBind, RMSD < 2A, folded-structure docking, runtime/confidence if exact source values are available.
6. Add caveats for missing parameter counts, training splits, conformer generation details, and implementation-specific hyperparameters.
7. Label every benchmark value as source-reported.

Visual requirements:
- First viewport should show ligand pose diffusion with translation, rotation, and torsion axes.
- Use molecule/pocket schematics, pose trajectories, and confidence-ranking cards.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

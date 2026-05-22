# Claude Design Prompt - RFdiffusion and RFdiffusion3

Metadata from source inventory:
- Model: RFdiffusion / RFdiffusion3
- Year: 2023 for RFdiffusion; 2025-2026 leads for RFdiffusion3
- Lab: Institute for Protein Design / Baker Lab collaborators
- Architecture / modality note: RoseTTAFold-based diffusion model for protein backbone and biomolecular design
- Source leads: https://www.nature.com/articles/s41586-023-06415-8

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for RFdiffusion and RFdiffusion3.

Primary source leads to use:
- RFdiffusion Nature paper: https://www.nature.com/articles/s41586-023-06415-8
- RFdiffusion GitHub lead: https://github.com/RosettaCommons/RFdiffusion
- RFdiffusion3 all-atom paper lead: https://pmc.ncbi.nlm.nih.gov/articles/PMC12458353/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Keep RFdiffusion and RFdiffusion3 distinct. RFdiffusion generates protein backbones using a fine-tuned RoseTTAFold structure network; RFdiffusion3 extends toward all-atom biomolecular interactions. Do not mix claims unless the source explicitly supports them.

Model identity:
- Model: RFdiffusion and RFdiffusion3
- Family/vendor or lab: RoseTTAFold diffusion / protein design
- Release/report date: RFdiffusion Nature paper published July 2023
- Parameter scale: not the central reported quantity; use architecture details from sources
- Target page title: "RFdiffusion Architecture"

Known architecture and training facts:
- RFdiffusion fine-tunes the RoseTTAFold structure prediction network on protein-structure denoising tasks.
- It acts as a DDPM over protein structures/backbones, using residue rigid-frame representation with rotational equivariance.
- It supports conditioning at residue, pair/distance/orientation, and 3D-coordinate levels.
- Reported design tasks include unconditional monomers, topology-constrained designs, protein binders, symmetric oligomers, enzyme active-site scaffolding, and motif scaffolding.
- RFdiffusion3 extends to all-atom contexts including ligands, nucleic acids, metals, and atom-level constraints if confirmed by its source.

Required architecture content:
1. End-to-end protein design map: design specification, noisy backbone/frames, RoseTTAFold denoiser, iterative structure refinement, ProteinMPNN/sequence design if source-used, validation.
2. Diagram residue rigid frames, rotational equivariance, and coordinate/1D/2D conditioning channels.
3. Show task-specific conditioning panels for binders, symmetry, motifs, scaffolds, and active sites.
4. Include an RFdiffusion3 section for all-atom extension, atom-level constraints, ligands/nucleic acids/metals only where verified.
5. Include experimental validation highlights from Nature, such as designed binders and cryo-EM confirmation, with exact source labels.
6. Add caveats for unreported model dimensions, training corpus details, sampling schedules, and RFdiffusion3 release status.
7. Do not turn this into a generic image diffusion explainer; focus on protein geometry.

Visual requirements:
- First viewport should show RFdiffusion as RoseTTAFold repurposed for protein denoising/design.
- Use 3D-like schematic diagrams, conditioning matrices, and design-task tabs.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

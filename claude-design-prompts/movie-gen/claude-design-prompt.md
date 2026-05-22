# Claude Design Prompt - Movie Gen

Metadata from source inventory:
- Model: Movie Gen
- Year: 2024
- Lab: Meta
- Size / active size: largest video generation model reported as 30B parameters
- Architecture / modality note: cast of media foundation models for video, audio, editing, personalization
- Source lead: https://arxiv.org/abs/2410.13720

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Movie Gen.

Primary source leads to use:
- Movie Gen paper: https://arxiv.org/abs/2410.13720
- Meta Movie Gen research videos lead: https://go.fb.me/MovieGenResearchVideos
- Meta AI research/blog lead if available: https://ai.meta.com/research/movie-gen/

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
Movie Gen is a closed-weight research system. The page must include a prominent closed-weight/no-local-checkpoint caveat. Do not imply the model can be downloaded or reproduced unless Meta has released weights/configs. Use only source-reported architecture and benchmark details.

Model identity:
- Model: Movie Gen
- Family/vendor or lab: Meta
- Release/report date: October 2024
- Parameter scale: largest video generation model 30B parameters if confirmed
- Target page title: "Movie Gen Architecture"

Known architecture and training facts:
- Movie Gen is a cast of media foundation models for high-quality 1080p HD video, synchronized audio, video editing, video personalization, video-to-audio, and text-to-audio.
- The abstract reports the largest video generation model as a 30B parameter transformer.
- It is trained with a maximum context length of 73K video tokens, corresponding to 16 seconds at 16 frames per second.
- The paper discusses innovations in architecture, latent spaces, training objectives/recipes, data curation, evaluation, parallelization, and inference optimization.
- Exact model weights, full configs, and training data are not open in the source lead unless later sources say otherwise.

Required architecture content:
1. "Cast of models" overview: text-to-video, personalized video, instruction-based editing, video-to-audio, and text-to-audio.
2. Main video model map: prompt/image conditioning, latent video tokens, 30B transformer, diffusion/flow sampling if source-confirmed, decoded 1080p video.
3. Show 73K video-token context and how it maps to 16 seconds at 16 fps.
4. Include audio generation/synchronization path and editing/personalization paths only with source-backed details.
5. Include evaluation tables from the paper across text-to-video, video personalization, editing, video-to-audio, and text-to-audio.
6. Add a closed-weight caveat panel: no released weights/configs; many implementation details may be unavailable.
7. Label hidden details such as tokenizer, latent codec, attention pattern, sampler, and training data as not reported when absent.

Visual requirements:
- First viewport should identify Movie Gen as Meta's closed-weight media foundation model cast and show the 30B/73K-token headline facts.
- Use model-family tabs, video-token timelines, and audio/video synchronization diagrams.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

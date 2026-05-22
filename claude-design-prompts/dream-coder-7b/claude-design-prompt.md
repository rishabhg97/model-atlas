# Claude Design Prompt - Dream-Coder 7B

Metadata from source inventory:
- Model: Dream-Coder 7B
- Year: 2025
- Lab: DreamLM / HKU NLP collaborators
- Size / active size: 7B
- Architecture / modality note: discrete diffusion language model for code with any-order generation
- Source lead: https://arxiv.org/abs/2509.01142

```text
You are Claude Design. Create a standalone, downloadable HTML visualization page for Dream-Coder 7B.

Primary source leads to use:
- Dream-Coder 7B paper: https://arxiv.org/abs/2509.01142
- Dream-Coder repository: https://github.com/DreamLM/Dream-Coder

Workspace scope:
- Ignore other HTML files and other model artifacts in the workspace.
- Use only the sources and files named in this prompt/design request; do not treat existing atlas content as evidence unless explicitly listed here.

Important source caveat:
The paper reports high-level methods and benchmarks, but exact dimensions must come from official config/model cards if available. Label unavailable context length, layer count, tokenizer, hidden size, and data mixture details as "not reported."

Model identity:
- Model: Dream-Coder 7B and Dream-Coder 7B Instruct
- Family/vendor or lab: DreamLM / HKU NLP
- Release/report date: September 2025
- Parameter scale: 7B
- Target page title: "Dream-Coder 7B Architecture"

Known architecture and training facts:
- Dream-Coder 7B is an open discrete diffusion language model for code generation.
- It adapts a pretrained autoregressive checkpoint into a discrete diffusion framework.
- Training uses a continuous-time weighted cross-entropy objective.
- Post-training includes supervised fine-tuning with random truncation and padding penalty to reduce padding pathologies.
- Reinforcement learning uses verifiable rewards over curated open-source coding prompts.
- The paper reports adaptive generation strategies: sketch-first generation for complex algorithms, left-to-right generation for straightforward completions, and interleaved reasoning for code understanding.
- Dream-Coder 7B Instruct reports 21.4% pass@1 on LiveCodeBench 2410-2505; include other HumanEval, MBPP, BigCodeBench, and CRUXEval numbers only if exact source values are found.

Required architecture content:
1. End-to-end code generation map: prompt, masked/noisy code tokens, diffusion transformer, confidence/remasking, final program, test/verifier loop where applicable.
2. Show the three decoding behaviors as separate visual lanes: sketch-first, left-to-right, and interleaved reasoning.
3. Diagram AR-to-diffusion adaptation and continuous-time weighted cross-entropy.
4. Show post-training pipeline: SFT, random truncation, padding penalty, verifiable-reward RL, and instruct checkpoint.
5. Draw block internals and exact dimensions only after checking official config.
6. Include benchmark cards for LiveCodeBench, HumanEval, MBPP, BigCodeBench, and CRUXEval with source-reported labels.
7. Include "not reported" labels for any hidden implementation details not present in the sources.

Visual requirements:
- Make this a dense code-model briefing page, not a generic LLM explainer.
- First viewport should show Dream-Coder's any-order code generation idea and 7B scale.
- Return one self-contained HTML file suitable to save as index.html; avoid external runtime frameworks or network-only assets.
```

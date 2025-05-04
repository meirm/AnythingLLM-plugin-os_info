# AnythingLLM Custom Agent Skills

Empower your Local LLM with custom tools!

This repository contains custom agent skills (plugins) for [AnythingLLM](https://useanything.com/), with a focus on the `osinfo` plugin. These skills extend the capabilities of your local LLM, letting it access new tools and information about your system.

---

## What is AnythingLLM?

[AnythingLLM](https://useanything.com/) is an open-source platform that lets you run local or cloud-based Large Language Models (LLMs) with a modern interface. It supports plugins (called "Skills") that allow your LLM to interact with your files, system, and more.

- You can run AnythingLLM with a local LLM backend (like Ollama, LM Studio, etc.) or connect to cloud providers.
- The Desktop version is under active development, with many features at MVP level—making it a great opportunity for open-source contributors!

---

## Why Custom Agent Skills?

Agent Skills (plugins) are simple Node.js scripts that expose new tools to your LLM. You can:
- Add new abilities (like querying your OS, scraping the web, or running scripts)
- Share your skills with the community
- Quickly prototype and test new ideas

Skills are stored locally under:
```
~/Library/Application Support/anythingllm-desktop/storage/plugins/agent-skills
```
Each skill lives in its own directory, containing:
- `plugin.json` (metadata and interface)
- `handler.js` (the code to run)
- `readme.md` (usage and install instructions)

---

## Example: The `osinfo` Plugin

The `osinfo` skill lets your LLM answer questions about your operating system, RAM, and CPU. For example:
- "What operating system am I running?"
- "How much RAM and CPU do I have?"

### How to Install
1. Copy the `osinfo` directory into your `agent-skills` folder (see above).
2. Restart AnythingLLM Desktop.
3. In the AnythingLLM settings, go to **Agent Skills** and enable `OS Info`.

### How to Use
Just ask your agent:
```
@agent what operating system am I running?
@agent how much RAM and CPU do I have?
@agent get my system information using osinfo
```
The agent will respond with your OS type, total RAM, and CPU model/count.

---

## Contributing

It's easy to add your own skills! Just:
1. Create a new directory under `agent-skills`.
2. Add a `plugin.json`, `handler.js`, and `readme.md` (see `osinfo` for an example).
3. Reload AnythingLLM and your skill will appear in the UI.

For more details, see the official docs:
- [Introduction to custom agent skills](https://docs.anythingllm.com/agent/custom/introduction)
- [Developer Guide](https://docs.anythingllm.com/agent/custom/developer-guide)

---

## Why contribute?
- AnythingLLM is growing fast, but many features are still at MVP level.
- The open-source community can help shape the future of local LLMs.
- Sharing your skills helps everyone!

---

## Notes
- Only run custom agent skills you trust. Review code before installing.
- All skills must return a string value.
- Skills only work in AnythingLLM Desktop and Docker (not Cloud).

---

Happy hacking! 🚀 
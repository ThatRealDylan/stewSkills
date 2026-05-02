---
name: web-search
description: Searches the web for real-time information using DuckDuckGo.
author: ThatRealDylan
version: "1.0.0"
---

# Web Search

## Instructions
Call the `run_js` tool with the following parameters:
- script name: index.html. Not web-search, 'index.html' is correct. Find it in 'scripts/index.html'.
- data: A JSON string with the following field:
  - query: String. The search terms (e.g., 'latest spaceX launch', 'best pizza in Rome'). or stuff like 'search the web about...' or '..., search the web about it' in the prompt may also trigger this skill. stuff that you also dont really know about may also trigger this skill. For example, if you ask "What is the latest news on the stock market?" it may trigger this skill.
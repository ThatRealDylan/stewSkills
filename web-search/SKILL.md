---
name: web-search
description: Professional web search using SearchApi (DuckDuckGo engine).
author: ThatRealDylan
version: "2.0.0"
metadata:
  require-secret: true
  require-secret-description: "Enter your SearchApi API Key or use this free one: 'n78NbFe4wQdMTgMYSpioY69w'."
---

# Web Search Pro

## Instructions
Call the `run_js` tool to search the live internet:
- script name: index.html
- data: A JSON string with the field:
  - query: String (The search terms).
---
name: notes-manager
description: Save, read, and delete short text notes locally.
author: ThatRealDylan
version: "1.0.0"
---

# Notes Manager

## Instructions
Call the `run_js` tool with the following parameters:
- script name: index.html
- data: A JSON string with the following fields:
  - action: String. One of 'save', 'get', or 'delete'.
  - content: String. The note text (for 'save').
  - id: String. The note index/name (for 'get' or 'delete').
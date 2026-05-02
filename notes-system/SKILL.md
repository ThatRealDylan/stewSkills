---
name: notes-system
description: A local notebook to save, read, and delete notes.
author: ThatRealDylan
version: "1.0.0"
---

# Notes System

## Instructions
Call the `run_js` tool with the following parameters:
- script name: index.html
- data: A JSON string with one of these actions:
  - action: "save" | "get" | "delete" | "list"
  - title: String (The name of the note)
  - content: String (The text to save - only for "save")
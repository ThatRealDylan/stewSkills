---
name: file-system
description: A virtual file system to create, read, and manage local files.
author: ThatRealDylan
version: "1.0.0"
---

# Virtual File System

## Instructions
Call the `run_js` tool with the following parameters:
- script name: index.html
- data: A JSON string with these fields:
  - action: "write" | "read" | "delete" | "list"
  - filename: String (The name of the file)
  - content: String (Text to save - only for "write")
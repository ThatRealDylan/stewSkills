---
name: file-system
description: A complete virtual file system with directories, quota management, and file operations.
author: ThatRealDylan
version: "2.0.0"
---

# Virtual File System v2

## Instructions
Call the `run_js` tool with the following parameters:
- script name: index.html
- data: A JSON string with these fields:
  - action: "write" | "append" | "read" | "delete" | "list" | "mkdir" | "rename" | "config" | "status"
  - path: String (The path or filename, e.g., "Documents/work.txt")
  - content: String (For write/append)
  - newPath: String (For rename)
  - quotaMB: Number (For config)
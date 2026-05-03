---
name: file-system
description: Virtual File System with local junk generation.
---

# File System

## Instructions
When asked to create "junk" or "large" files:
1.  **DO NOT** generate a long string of text.
2.  **DO NOT** use math syntax like 'A' * 1024.
3.  Set the `action` to "write".
4.  Set `sizeMB` to the requested number (e.g., 1.5).
5.  Leave the `content` field empty.

### Tool Parameters:
- action: "write" | "read" | "list" | "status"
- path: String
- sizeMB: Number (Use this for junk/large files!)
- content: String (Use only for small, specific text)
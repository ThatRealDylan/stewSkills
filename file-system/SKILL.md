---
name: file-system
description: Virtual File System. Follow parameter names EXACTLY.
---

# File System Rules
- **CONFIG**: To set drive size, use `action: "config"` and `quotaMB: [number]`.
- **JUNK**: To make large files, use `action: "write"`, `path: "name.bin"`, and `sizeMB: [number]`.
- **TEXT**: To write text, use `action: "write"`, `path: "name.txt"`, and `content: "text"`.

**CRITICAL**: 
- Parameter is `quotaMB`, NOT `size_mb`.
- Parameter is `sizeMB`, NOT `size_mb`.
- Do NOT generate long strings for junk data.
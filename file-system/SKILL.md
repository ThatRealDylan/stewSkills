---
name: file-system
description: Virtual File System. Handles storage configuration and file management.
---

# File System Instructions

### CRITICAL RULES:
1. **To set drive size**: Use `action: "config"` and `quotaMB: [number]`.
2. **To see drive status**: Use `action: "status"`.
3. **To create junk**: Use `action: "write"`, `path: "name.bin"`, and `sizeMB: [number]`.
4. **To write text**: Use `action: "write"`, `path: "name.txt"`, and `content: "text"`.

### Tool Parameters:
- action: "write" | "read" | "list" | "status" | "config"
- path: String (Filename or path)
- quotaMB: Number (ONLY for "config")
- sizeMB: Number (ONLY for "write" junk files)
- content: String (ONLY for "write" text files)
---
name: caveman-compress
description: Compress natural language files (.md, .txt) into caveman-speak, reducing input tokens ~46% while preserving all technical content. Use when user invokes /caveman-compress <filepath> or asks to compress memory files.
---

# Caveman Compress

Compress prose files to caveman-speak. Reduce tokens ~46%, keep all technical substance.

## Trigger

`/caveman-compress <filepath>`

Or: "compress my memory files", "shrink this markdown"

## What Gets Compressed

- Articles: a, an, the
- Filler words: really, basically, just, actually, simply
- Pleasantries and hedging
- Redundant phrasing
- Full sentences → fragments where meaning is preserved

**Before:** "You should make sure to run tests before pushing to main."
**After:** "Run tests before push to main."

## What Is NEVER Modified

- Code blocks (fenced ` ``` ` and indented) — copy EXACTLY
- Inline code and backtick expressions
- URLs, file paths, shell commands
- Technical terms, proper nouns, version numbers
- Markdown structure: headings, bullet hierarchies, tables, frontmatter
- `FILE.original.md` backup files

## Process

1. Read the target file
2. Create human-readable backup as `FILE.original.md`
3. Compress prose sections only — leave all code blocks untouched
4. Validate output preserves all technical content
5. Write compressed version to original path
6. Report: original size, compressed size, % reduction

## Supported File Types

`.md` `.txt` `.typ` `.typst` `.tex`

Never touch: `.py` `.js` `.ts` `.json` `.yaml` `.yml` or any code file.

## Error Handling

- On failure: report error, do NOT modify original
- Retry up to 2 times before giving up

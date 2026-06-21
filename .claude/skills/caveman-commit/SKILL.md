---
name: caveman-commit
description: Generate ultra-compressed conventional commit messages. Use when user invokes /caveman-commit or asks for a terse git commit message.
---

# Caveman Commit

Generate terse conventional commit messages. Prioritize reasoning over description.

## Format

```
<type>(<scope>): <imperative summary>
```

Subject: ≤50 chars (hard cap 72).

## Types

`feat` `fix` `refactor` `perf` `docs` `test` `chore` `build` `ci` `style` `revert`

## Subject Rules

- Imperative mood: "add", "fix", "remove" — not "added", "fixes"
- No trailing period
- Match project capitalization
- No emoji unless project convention requires

## Body Rules

- Omit when subject is self-explanatory
- Include only for: non-obvious reasoning, breaking changes, migrations, issue refs
- Wrap at 72 chars, bullet points with `-`

## Never Include

- "This commit does X" (describes diff, not reason)
- First-person: "I", "we"
- Temporal markers: "now", "currently"
- AI attribution or generation credits

## Always Include Body For

- Breaking changes
- Security fixes
- Data migrations
- Reversions

Output as code block ready to copy-paste. Never run git operations.

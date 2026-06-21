---
name: writing-skills
description: Create new Claude Code skills using TDD methodology — document failures first, write minimal skill to fix them, test and refactor. Use when creating a new skill or editing an existing one.
---

# Writing Skills

Create reusable skills using TDD. Document failures first, then write the skill to fix them.

**Iron Law: NO SKILL WITHOUT A FAILING TEST FIRST.**

---

## The RED-GREEN-REFACTOR Cycle for Skills

### RED — Document how agents fail without the skill

1. Run baseline scenarios without the skill
2. Document exactly how the agent naturally fails:
   - What does it do wrong?
   - What rationalization does it use?
   - What's the bad output?

If you didn't watch an agent fail without the skill, you don't know if the skill teaches the right thing.

### GREEN — Write the minimal skill that fixes those failures

Address the specific failures you documented. Nothing more.

### REFACTOR — Close loopholes

Test again. Identify new rationalizations the agent uses to avoid the skill. Add counters to those. Repeat until robust.

---

## Skill File Structure

```
.claude/skills/[skill-name]/
  SKILL.md          ← required
  [reference].md    ← optional: heavy reference material
  [tool].py/js      ← optional: reusable scripts
```

### SKILL.md Frontmatter (required)

```yaml
---
name: skill-name
description: Use when [specific triggering conditions and symptoms]. Never summarize the workflow here.
---
```

**Description rules:**
- Start with "Use when..."
- Describe ONLY triggering conditions and symptoms
- Never summarize the workflow — agents will follow the description instead of reading the skill
- Bad: "Enforces TDD by making you write tests first before implementation"
- Good: "Use when writing any production code, or when tempted to write code before tests"

---

## Quality Standards

| Metric | Target |
|--------|--------|
| Getting-started workflow | Under 150 words |
| Full skill | Under 500 words |
| Code examples | One excellent example, not multiple mediocre ones |
| Rationalization table | Include for discipline-enforcing skills |

---

## Discipline-Enforcing Skills (extra requirements)

For skills that enforce strict behavior (TDD, verification, debugging), add:

1. **Banned phrases table** — specific language that signals the rule is being avoided
2. **Red flags list** — thoughts/actions that indicate rationalization
3. **Rationalization counter-table** — common excuses with rebuttals

Example:
```markdown
| Rationalization | Reality |
|----------------|---------|
| "Too simple to test" | Simplicity doesn't prevent bugs |
| "I'll test after" | Tests written after pass immediately |
```

---

## Testing a Skill

Before publishing:

1. Run the scenario the skill addresses — without the skill
2. Document the failure mode
3. Apply the skill
4. Verify the failure is prevented
5. Try to rationalize around the skill — if you can, strengthen it
6. Document the test scenario in the skill or a test file

---

## Naming Convention

```
.claude/skills/[verb]-[noun]/SKILL.md

Examples:
  writing-plans/
  systematic-debugging/
  requesting-code-review/
```

Use kebab-case. Verb-first for process skills.

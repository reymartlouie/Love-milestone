---
name: video
description: Use when planning or producing marketing videos — product demos, explainers, social clips, or AI-generated video. Covers programmatic frameworks, AI video generation, avatar tools, and repurposing workflows.
---

# Video Production

Plan and produce marketing videos — demos, explainers, social clips, AI-generated content.

## Choose Your Production Method

| Method | Best For | Tools |
|--------|---------|-------|
| Screen recording | Product demos, tutorials | Loom, Descript, OBS |
| Programmatic (HTML/CSS) | Data-driven, templated videos | Hyperframes, Remotion |
| AI video generation | B-roll, concept videos, ads | Veo 3, Sora 2, Kling |
| AI avatars | Talking-head at scale, multilingual | HeyGen, Synthesia |
| Live action | Brand storytelling, testimonials | Real camera + editing |

## Programmatic Video (LLM-Native)

**Hyperframes** (HTML/CSS-based) — best for agent-generated video:
- AI generates better HTML than React components
- Ideal for templated, data-driven video (stats cards, feature highlights)
- Fully automatable pipeline

**Remotion** (React-based):
- Better for complex animations and programmatic charts
- Steeper learning curve

## AI Video Generation

Good prompts specify: `subject + action + camera movement + style + mood`

```
"A founder reviewing a dashboard on a laptop, 
camera slowly zooms in, modern office background, 
professional and focused mood, 4K quality"
```

**Model selection:**
| Model | Best For |
|-------|---------|
| Veo 3 | Highest quality, audio sync |
| Sora 2 | Cinematic, complex scenes |
| Kling | Cost-effective batch generation |
| Seedance | Fast iteration |

**Common mistake:** AI-generated text in video — models can't reliably render readable text. Use programmatic overlays instead.

## AI Avatar Videos

Use for: product demos, onboarding videos, multilingual content, scale

- **HeyGen:** MCP server integration, 140+ languages, custom digital twins
- **Synthesia:** More enterprise-focused, good compliance controls

Process:
1. Write script (conversational, short sentences)
2. Select or create avatar
3. Generate video
4. Review for unnatural pauses or pronunciation issues
5. Add captions (always)

## Content Repurposing Workflow

```
Long-form video (webinar, podcast, interview)
  → Descript: cleanup, remove filler words
  → Opus Clip: auto-extract viral moments
  → CapCut: platform-specific optimization
  → Output: 5–10 short clips per long-form piece
```

## Short-Form Video Formula (TikTok/Reels/Shorts)

**3-second rule:** First 3 seconds must hook:
- Visual: something unexpected or dynamic
- Audio: strong opening line (assume sound on)
- Text overlay: captions always, reinforces hook

Length: 15–60 seconds for maximum reach

Structure:
```
0–3s:  Hook (question, surprising stat, bold claim)
3–15s: Context (why this matters)
15–45s: Value (the actual content)
45–60s: CTA (what to do next)
```

## Captions

Always add captions. 85% of social video is watched with sound off.

Tools: Descript (auto-captions), Submagic, CapCut

Style: Large font, high contrast, word-by-word highlight

## Demo Video Best Practices

- Start with the outcome, not the login screen
- Show the 3 most valuable features (not all of them)
- Use real data, not obviously fake placeholder content
- 60–90 seconds for top-of-funnel, 3–5 min for evaluation stage
- End with clear next step (trial, demo booking)

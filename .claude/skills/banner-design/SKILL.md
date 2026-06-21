---
name: banner-design
description: Multi-format banner and creative asset generation — social media covers, ad banners, hero sections, event banners, and campaign assets. Use when creating any promotional or marketing visual at specific platform dimensions.
---

# Banner Design

Create multi-format banners across social media, advertising, web, and print.

## Workflow (5 steps)

1. **Gather requirements** — platform, purpose, content, branding, style, quantity
2. **Art direction** — select style + layout approach
3. **Design** — HTML/CSS implementation
4. **Export** — browser screenshot to PNG
5. **Iterate** — present options, refine on feedback

---

## Platform Dimensions

### Social Media
| Platform | Type | Dimensions |
|----------|------|-----------|
| Instagram | Post (square) | 1080×1080px |
| Instagram | Post (portrait) | 1080×1350px |
| Instagram | Story / Reel | 1080×1920px |
| Twitter/X | Header | 1500×500px |
| Twitter/X | Card image | 1200×628px |
| LinkedIn | Cover | 1584×396px |
| LinkedIn | Post | 1200×627px |
| Facebook | Cover | 820×312px |
| Facebook | Post | 1200×630px |
| YouTube | Channel art | 2560×1440px |
| YouTube | Thumbnail | 1280×720px |
| TikTok | Video cover | 1080×1920px |

### Advertising
| Type | Dimensions |
|------|-----------|
| Leaderboard | 728×90px |
| Medium rectangle | 300×250px |
| Large rectangle | 336×280px |
| Half page | 300×600px |
| Billboard | 970×250px |
| Mobile banner | 320×50px |

### Web
| Type | Dimensions |
|------|-----------|
| Hero / Full width | 1920×600–1080px |
| OG / Share image | 1200×630px |
| Email header | 600×200px |
| Favicon | 16, 32, 180, 192px |

---

## Art Direction Styles

| Style | Visual Language |
|-------|----------------|
| Clean minimal | White space, single focal point, sans-serif |
| Bold typographic | Large text as hero element, minimal imagery |
| Photo-first | Full-bleed image, text overlay with contrast layer |
| Gradient modern | Mesh/linear gradients, no photography |
| Dark premium | Dark background, light text, metallic accents |
| Illustrative | Custom illustration or icon as hero |
| Glassmorphism | Frosted panels, blurred background |
| Geometric | Abstract shapes, bold color blocks |

---

## Design Rules

- **Max 2 typefaces** per banner
- **Single CTA** — one clear action per banner
- **4.5:1 contrast ratio** minimum on all text
- **Critical content in central 70–80%** safe zone (edges may be cropped)
- **Text under 20%** of total area for ad compliance
- **No more than 3 focal points**

---

## HTML/CSS Banner Template

```html
<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: [W]px;
    height: [H]px;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
  }
  .banner {
    width: 100%;
    height: 100%;
    background: [bg];
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    position: relative;
  }
  .headline {
    font-size: [size]px;
    font-weight: 700;
    color: [color];
    text-align: center;
    line-height: 1.1;
  }
  .subtext {
    font-size: [size]px;
    color: [color];
    margin-top: 16px;
    text-align: center;
  }
  .cta {
    margin-top: 32px;
    padding: 14px 32px;
    background: [cta-color];
    color: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
  }
</style>
</head>
<body>
  <div class="banner">
    <h1 class="headline">[HEADLINE]</h1>
    <p class="subtext">[SUBTEXT]</p>
    <div class="cta">[CTA TEXT]</div>
  </div>
</body>
</html>
```

---

## Pre-Export Checklist

- [ ] Dimensions match platform spec exactly
- [ ] All text readable at actual display size
- [ ] Brand colors match guidelines
- [ ] CTA is prominent and single
- [ ] Critical content within safe zone
- [ ] Exported at 2× resolution for retina

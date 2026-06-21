---
name: image
description: Use when creating or optimizing marketing images — blog heroes, social graphics, product mockups, OG images, or brand assets. Covers AI generation, Canva/Figma workflows, format optimization, and alt text.
---

# Image Creation & Optimization

Create professional marketing images and optimize for web performance.

## Before Starting

1. What image type? (blog hero, social graphic, product mockup, OG image, etc.)
2. Platform and dimensions? (see `/banner-design` for full platform specs)
3. Brand assets available? (colors, fonts, logo, style guide)
4. One-off or template? (affects tool choice)
5. Style preference? (photorealistic, illustrated, 3D, flat design, etc.)

## Creation Methods

| Method | Best For | Tools |
|--------|---------|-------|
| AI generation | Custom illustrations, concept art, backgrounds | Gemini, Flux, Ideogram, DALL-E |
| Template-based | Social posts, consistent brand graphics | Canva, Figma |
| Screenshot + mockup | Product UI showcases | CleanShot, Screely, Mockuphone |
| Stock photo | Blog heroes, backgrounds | Unsplash, Pexels, Midjourney |

## AI Image Generation Prompts

Formula: `[Subject] + [Style] + [Lighting] + [Composition] + [Technical specs]`

```
"A SaaS dashboard showing analytics charts, 
clean modern UI, soft office lighting, 
centered composition with slight depth of field, 
high resolution, professional photography style"
```

Platform-specific tips:
- **Gemini:** Great for product mockups and consistent brand imagery
- **Flux:** Best photorealism
- **Ideogram:** Reliable text rendering in images (rare capability)
- **DALL-E:** Good for illustrations and concepts

## Standard Marketing Dimensions

| Asset | Dimensions |
|-------|-----------|
| Blog hero | 1200×630px |
| OG / share image | 1200×630px |
| Twitter header | 1500×500px |
| LinkedIn cover | 1584×396px |
| Instagram post | 1080×1080px |
| Instagram story | 1080×1920px |
| Favicon | 32×32px (also 16, 180, 192px) |

## Web Optimization

**Format selection:**
| Format | Use For |
|--------|---------|
| WebP | Everything (best compression + quality) |
| AVIF | Next-gen (even better, less support) |
| PNG | Logos, icons (transparency needed) |
| JPEG | Photos without transparency |
| SVG | Icons, logos (scales perfectly) |

**Compression targets:**
- Hero images: < 200KB
- Blog inline images: < 100KB
- Icons/thumbnails: < 30KB

**Always:**
- Specify `width` and `height` attributes (prevents CLS)
- Use `loading="lazy"` for below-fold images
- Responsive images via `srcset` for different viewport sizes

## Alt Text

Every marketing image needs descriptive alt text:
- Describes what's in the image for screen readers
- Includes relevant keywords naturally
- Empty alt (`alt=""`) for purely decorative images only

```html
<img src="dashboard.webp" 
     alt="Analytics dashboard showing 40% increase in monthly revenue" 
     width="1200" height="630" loading="lazy">
```

---
name: remotion
description: Build programmatic videos with Remotion — React-based video framework. Use when creating video compositions, animations, motion graphics, or rendering video from React components. Covers setup, core APIs, animation patterns, and rendering.
---

# Remotion — Programmatic Video with React

Build videos using React components. Every frame is a React render.

**Core principle:** A video is a function of images over time. `frame` is your only input.

---

## Setup

```bash
npx create-video@latest
# or add to existing project:
npm install remotion @remotion/cli
```

Entry point: `src/Root.tsx` — register all compositions here.

---

## Core APIs

### `useCurrentFrame()`
Returns the current frame number (starts at `0`).

```tsx
import { useCurrentFrame } from 'remotion'

const MyComp = () => {
  const frame = useCurrentFrame() // 0, 1, 2, 3...
  return <div style={{ opacity: frame / 30 }} />
}
```

### `useVideoConfig()`
Returns `{ width, height, fps, durationInFrames }`.

```tsx
import { useCurrentFrame, useVideoConfig } from 'remotion'

const MyComp = () => {
  const frame = useCurrentFrame()
  const { fps, width, height } = useVideoConfig()
  const secs = frame / fps
  return <div>{width}x{height} @ {secs.toFixed(2)}s</div>
}
```

### `<AbsoluteFill>`
Full-size absolute positioned container — the standard canvas wrapper.

```tsx
import { AbsoluteFill } from 'remotion'

const MyComp = () => (
  <AbsoluteFill style={{ backgroundColor: 'black' }}>
    {/* content */}
  </AbsoluteFill>
)
```

---

## Compositions

Register in `src/Root.tsx`:

```tsx
import { Composition } from 'remotion'
import { MyComp } from './MyComp'

export const RemotionRoot = () => (
  <>
    <Composition
      id="MyComp"
      component={MyComp}
      durationInFrames={150}   // 5 seconds at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  </>
)
```

Common sizes:
| Format | Width | Height |
|--------|-------|--------|
| 1080p  | 1920  | 1080   |
| Square | 1080  | 1080   |
| Story  | 1080  | 1920   |
| Twitter| 1280  | 720    |

---

## Animation

### `interpolate()`
Map a range of values to another range.

```tsx
import { interpolate, useCurrentFrame } from 'remotion'

const frame = useCurrentFrame()

// Fade in from frame 0 to 30
const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateRight: 'clamp', // don't go above 1
})

// Slide up
const translateY = interpolate(frame, [0, 30], [50, 0], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
})
```

**extrapolate options:** `'clamp'` | `'extend'` | `'wrap'` | `'identity'`
Always use `'clamp'` unless you want values to extend beyond your range.

### `spring()`
Physics-based animation — natural, bouncy feel.

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion'

const frame = useCurrentFrame()
const { fps } = useVideoConfig()

const scale = spring({
  frame,
  fps,
  from: 0,
  to: 1,
  config: {
    stiffness: 100,  // higher = bouncier
    damping: 10,     // higher = less bounce
    mass: 1,         // lower = faster
  },
})

// With delay
const delayedScale = spring({
  frame,
  fps,
  delay: 15,         // wait 15 frames before starting
  durationInFrames: 30,
})
```

**Quick configs:**
```ts
// Snappy, no bounce
{ stiffness: 200, damping: 26, mass: 1 }

// Bouncy
{ stiffness: 100, damping: 8, mass: 1 }

// Slow and smooth
{ stiffness: 50, damping: 20, mass: 1 }
```

---

## Sequencing

### `<Sequence>`
Time-shift when a child component starts. Children's `useCurrentFrame()` is offset to start at `0`.

```tsx
import { Sequence } from 'remotion'

const MyVideo = () => (
  <AbsoluteFill>
    <Sequence from={0}  durationInFrames={60}><Intro /></Sequence>
    <Sequence from={45} durationInFrames={90}><Main /></Sequence>
    <Sequence from={120}>                     <Outro /></Sequence>
  </AbsoluteFill>
)
```

- `from` — frame to start showing the child (child sees frame 0 at this point)
- `durationInFrames` — how long to show it (omit for infinity)
- `layout="none"` — disable AbsoluteFill wrapper

**Stagger pattern:**
```tsx
const items = ['React', 'TypeScript', 'Remotion']

{items.map((item, i) => (
  <Sequence key={item} from={i * 10}>
    <TextItem label={item} />
  </Sequence>
))}
```

---

## Common Patterns

### Fade in + slide up
```tsx
const FadeSlide = ({ children }: { children: React.ReactNode }) => {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' })
  const y = interpolate(frame, [0, 20], [24, 0], { extrapolateRight: 'clamp' })
  return (
    <div style={{ opacity, transform: `translateY(${y}px)` }}>
      {children}
    </div>
  )
}
```

### Scale in with spring
```tsx
const ScaleIn = ({ children }: { children: React.ReactNode }) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const scale = spring({ frame, fps, from: 0.8, to: 1, config: { stiffness: 200, damping: 20 } })
  return <div style={{ transform: `scale(${scale})` }}>{children}</div>
}
```

### Count up number
```tsx
const CountUp = ({ target }: { target: number }) => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  const value = interpolate(frame, [0, durationInFrames], [0, target], { extrapolateRight: 'clamp' })
  return <span>{Math.floor(value)}</span>
}
```

### Loop animation
```tsx
const Pulse = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const loopFrame = frame % (fps * 2) // loop every 2 seconds
  const scale = interpolate(loopFrame, [0, fps], [1, 1.2, 1], { extrapolateRight: 'clamp' })
  return <div style={{ transform: `scale(${scale})` }} />
}
```

---

## Rendering

```bash
# Preview in browser (Remotion Studio)
npx remotion studio

# Render to file
npx remotion render <CompositionId> out/video.mp4

# Render specific frames
npx remotion render MyComp out/video.mp4 --frames=0-60

# Render as GIF
npx remotion render MyComp out/video.gif

# Still image (single frame)
npx remotion still MyComp out/frame.png --frame=30

# Image sequence
npx remotion render MyComp out/ --sequence
```

---

## With Next.js / Portfolio

Install the Player to embed videos in a Next.js page:

```bash
npm install @remotion/player
```

```tsx
'use client'
import { Player } from '@remotion/player'
import { MyComp } from './remotion/MyComp'

export function VideoPlayer() {
  return (
    <Player
      component={MyComp}
      durationInFrames={150}
      fps={30}
      compositionWidth={1920}
      compositionHeight={1080}
      style={{ width: '100%' }}
      controls
      autoPlay
      loop
    />
  )
}
```

---

## Rules

- Always get `frame` from `useCurrentFrame()` — never use `Date.now()` or timers
- Always use `'clamp'` on `extrapolateRight` unless you explicitly want overflow
- Use `spring()` for UI-feel animations, `interpolate()` for precise keyframes
- Keep compositions pure — no side effects, no async, no randomness without a seed
- Frame 0 is the first frame, `durationInFrames - 1` is the last

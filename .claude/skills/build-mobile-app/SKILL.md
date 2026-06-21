---
name: build-mobile-app
description: Build a complete mobile app with Expo + React Native + TypeScript. With or without Supabase backend. Uses Expo Router or React Navigation. One phase at a time.
---

# Mobile App Builder (Expo + React Native)

Build production-ready mobile apps for iOS and Android.

**Stack:** Expo + React Native + TypeScript + Supabase (optional) + Expo Router or React Navigation

**Same stack as:** firesafe (with Supabase + Expo Router), streamline (React Navigation, no Supabase)

---

## Choose Your Setup

**Option A — With Supabase** (like firesafe)
Full backend: auth, database, storage, realtime

**Option B — Without Supabase** (like streamline)
Local state, AsyncStorage, or custom API

**Option C — Expo Router** (file-based routing, like firesafe)
Modern, recommended for new projects

**Option D — React Navigation** (manual routing, like streamline)
More control, more setup

---

## Phase Plan (10 phases, one at a time)

| # | Phase |
|---|-------|
| 1 | `npx create-expo-app` + TypeScript + folder structure |
| 2 | Navigation setup (Expo Router or React Navigation) |
| 3 | Supabase setup + auth (if using Supabase) |
| 4 | Core screens + layouts |
| 5 | UI components + styling (StyleSheet / NativeWind) |
| 6 | Data layer (Supabase queries / local state / AsyncStorage) |
| 7 | Native features (notifications, haptics, network, storage) |
| 8 | Error handling + loading states + offline handling |
| 9 | App config (icons, splash screen, permissions, app.json) |
| 10 | Build + deploy (EAS Build for APK/IPA) |

---

## Standard Project Structure (Expo Router)

```
project/
├── app/
│   ├── _layout.tsx         ← root layout
│   ├── index.tsx           ← home screen
│   ├── (tabs)/
│   │   ├── _layout.tsx     ← tab navigator
│   │   ├── home.tsx
│   │   └── profile.tsx
│   └── (auth)/
│       ├── login.tsx
│       └── register.tsx
├── components/
├── lib/
│   └── supabase.ts
├── hooks/
├── constants/
├── assets/
│   ├── icon.png
│   └── splash-icon.png
├── app.json
└── tsconfig.json
```

---

## Standard dependencies (with Supabase)

```json
{
  "dependencies": {
    "expo": "~52.x.x",
    "expo-router": "~4.x.x",
    "react": "18.3.x",
    "react-native": "0.76.x",
    "@supabase/supabase-js": "^2.x.x",
    "expo-secure-store": "~14.x.x",
    "react-native-url-polyfill": "^2.x.x",
    "@expo/vector-icons": "^14.x.x",
    "expo-blur": "~14.x.x",
    "expo-haptics": "~14.x.x",
    "expo-notifications": "~0.29.x",
    "expo-network": "^7.x.x",
    "react-native-reanimated": "~3.x.x",
    "react-native-gesture-handler": "~2.x.x",
    "react-native-safe-area-context": "4.12.x",
    "react-native-screens": "~4.x.x"
  }
}
```

---

## Supabase Setup (React Native)

```typescript
// lib/supabase.ts
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import * as SecureStore from 'expo-secure-store'

const ExpoSecureStoreAdapter = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
}

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      storage: ExpoSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
)
```

---

## .env (Expo)

```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Build for Android (APK)

```bash
npx eas build --platform android --profile preview
```

---

## Execution Rules

- One phase per response — stop and wait after each phase
- After each phase: show files, commit message, "Type 'next' to continue"
- Never advance without user confirmation

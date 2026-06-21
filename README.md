# 🏆 Barun's Legacy Run

<div align="center">

![Game Banner](https://img.shields.io/badge/Barun's%20Legacy%20Run-Pro%20Edition-blue?style=for-the-badge&logo=javascript)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20%7C%20PWA-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)

**An endless runner game about discipline, engineering, and the will to succeed.**

*Developed entirely by Barun Kumar Shaw*

[▶ Play Now]( https://barun-kumar-shaw.github.io/baruns-legacy-run./game.html ) · [💼 LinkedIn](https://www.linkedin.com/in/barun-shaw-08a36a266) · [💻 GitHub](https://github.com/Barun-kumar-shaw)

</div>

---

## 📖 About The Game

Barun's Legacy Run is a browser-based endless runner game inspired by the journey of an engineer. The player must dodge distractions like cigarettes and alcohol while collecting skills, trophies, and achievements to build their legacy.

The core message is simple — **discipline is the foundation of every great engineer.**

The game runs on any device without installation, works completely offline, and can be installed on a phone like a native app through PWA technology.

---

## 🎮 How To Play

| Control | Action |
|---------|--------|
| `SPACEBAR` | Jump (PC) |
| `JUMP` button | Jump (Mobile — bottom right corner) |
| `Double SPACE` | Double Jump (mid-air) |

**Collect** → ⚙️ Skills · 🏆 Trophies · 📜 Certificates · 🏛️ Achievements  
**Avoid** → 🚬 Cigarettes · 🍺 Alcohol · 🍷 Wine  
**Combo** → Collect 3 items in a row for a score multiplier 🔥

---

## ✨ Features

- **Subway Surfers style speed** — starts comfortable, gradually accelerates
- **Double Jump** — gives the player better mid-air control
- **Combo Multiplier System** — collect consecutively for bonus points
- **Procedural Sound Engine** — jump, collect, and crash sounds synthesized from code (no MP3 files)
- **Screen Shake & Red Flash** — dramatic visual impact on collision
- **Persistent Score History** — top 10 scores saved locally, even after closing browser
- **Moving Parallax Background** — animated blueprint grid that speeds up with the game
- **Full Copyright Protection** — DevTools block, right-click disable, keyboard shortcut block
- **Legal Disclaimer Screen** — displays on every launch
- **Progressive Web App (PWA)** — installable on Android and iOS as a native app
- **Full Offline Support** — works without internet after first visit
- **Responsive Design** — plays perfectly on any screen size

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Game structure and UI |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript (ES6) | Complete game engine |
| Canvas 2D API | Game rendering — player, obstacles, particles |
| Web Audio API | Procedural sound effects without any audio files |
| LocalStorage API | Persistent score history |
| Service Worker | Offline-first PWA caching |
| ES6 Classes | Clean OOP architecture |

No frameworks. No libraries. No dependencies. Pure code.

---

## 🏗️ Architecture

```
Game (Main Engine)
├── Player           — Physics, jump mechanics, gravity
├── Obstacle         — Spawning, movement, collision
├── Collectible      — Float animation, pickup detection  
├── ParticleSystem   — Visual explosion effects
├── FloatingText     — Score popup animations
├── ScoreDB          — LocalStorage history management
└── AudioManager     — Web Audio API sound synthesis
```

---

## ⚙️ Game Mechanics

**Speed System**
```
Base Speed   : 6.0 units
Acceleration : +0.015 per second (gradual)
Max Speed    : 14 units (hard cap, always playable)
```

**Physics**
```
Gravity    : 3200 px/s²
Jump Force : 1100 px/s (upward burst)
Max Jumps  : 2 (double jump enabled)
```

**Collision Detection**
```
Method : AABB (Axis-Aligned Bounding Box)
Margin : 14px (fair hitbox, not pixel-perfect)
```

---

## 🌐 How To Play (From GitHub)

1. Go to the live game link provided by the developer (e.g., `https://[username].github.io/barun-legacy-run`).
2. The game will run directly in your browser. No download is needed to play!

---

## 📱 How To Install (Play Offline)

Because this game uses PWA (Progressive Web App) technology, you can install it directly on your device and play it 100% offline without any app store.

**Android (Chrome):**
1. Open the game link in Chrome.
2. An **"Add to Home Screen"** or **"Install App"** popup will appear. Tap it!
3. If it doesn't appear, tap the three dots (⋮) in the top right and select **"Install app"**.

**iPhone/iOS (Safari):**
1. Open the game link in Safari.
2. Tap the **Share** button (square with an arrow pointing up) at the bottom.
3. Scroll down and tap **"Add to Home Screen"**.

**PC/Laptop (Chrome/Edge):**
1. Open the game link.
2. Click the small **"Install" icon** (a screen with a down arrow) on the right side of the URL/Search bar.

*Once installed, you can turn off your internet and launch the game directly from your app menu or desktop!*

---

## 🔒 Copyright & Legal

This game and all of its contents — including source code, game mechanics, visual design, sound design, and concept — are the exclusive intellectual property of **Barun Kumar Shaw**.

Any unauthorized copying, reproduction, modification, or distribution is a violation of the **Indian Copyright Act, 1957** and the **Information Technology Act, 2000**.

```
© 2026 Barun Kumar Shaw — All Rights Reserved
Unauthorized use of this work is strictly prohibited and may result in legal action.
```

---

## 👨‍💻 Developer

**Barun Kumar Shaw**

A passionate developer who believes that discipline, consistency, and clean code are the foundation of great engineering.

| Platform | Link |
|---------|------|
| 💼 LinkedIn | [barun-shaw-08a36a266](https://www.linkedin.com/in/barun-shaw-08a36a266) |
| 💻 GitHub | [Barun-kumar-shaw](https://github.com/Barun-kumar-shaw) |

---

<div align="center">

*"Discipline is the true key to success."*

**— Barun Kumar Shaw**

</div>

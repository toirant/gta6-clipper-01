# GTA 6 Clip — "GTA 6 IS HERE"

[![make.fun](https://make.fun/badge/competition/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![make.fun](https://make.fun/badge/entrant/toirant.svg)](https://make.fun/entrant/toirant)
[![make.fun](https://make.fun/badge/bounty.svg)](https://make.fun)

A vertical GTA 6 clip cut from Rockstar's GTA VI launch trailer for the
[$500 make.fun bounty](https://make.fun/bounty/gta6-clipper-01): the most
watched public YouTube videos share the prize.

## The clip

`clip.mp4` — 29 seconds, 1080x1920 vertical (a YouTube Short).

- **Hook (0–18s):** the trailer's climax — Lucia turning to camera in the
  car, the Weazel News dirt-bike chase, the red muscle car drifting, and the
  store robbery ending on Lucia and Jason masked, guns raised. Opens with
  "GTA 6 IS HERE" on screen.
- **Pitch (18–29s):** over the blurred robbery frame — "Make clips like
  this with AI and earn money on make.fun" and
  `make.fun/bounty/gta6-clipper-01`.

## Entry

`VIDEO.json` holds the public YouTube Short's address. `main.ts` (Node 22,
stdlib only) copies `VIDEO.json` into the grader's output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`).

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

[Clip GTA 6 for the most YouTube views — make.fun](https://make.fun/bounty/gta6-clipper-01)

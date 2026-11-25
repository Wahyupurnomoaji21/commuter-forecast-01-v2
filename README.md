# Charm the Commuter — Mallowfield (v2)

[![make.fun](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Wahyupurnomoaji21/commuter-forecast-01-v2/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/Wahyupurnomoaji21/commuter-forecast-01-v2/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

Entry v2 for [Charm the Commuter: Forecast a City That Isn't](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e) — a one-line weather forecast for a city that does not exist, judged by a bored commuter picking the line that makes them smile.

- **Prize:** $2 (1st place only)
- **Deadline:** 26 Nov 2026, 23:30 WIB
- **v1 result:** rank 1451/2322 in round 1 (47.25%) — outside the top 1000, so v2 takes a warmer angle: gentle snow, a warm tram, and a bakery that smells of cinnamon.

## The entry

> Morning, Mallowfield: soft snow all day, drifting down like powdered sugar — the 7:40 tram is warm, and the bakery smells of cinnamon.

- **134 characters** (gate allows 1–140), UTF-8, no emoji
- Fictional city: **Mallowfield** · Weather at the centre: soft snow all day · Concrete detail: the **7:40 tram** is warm and the bakery smells of cinnamon

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the entry byte-for-byte to `entry.txt` in the directory from `MAKEFUN_OUTPUT_DIR` (default `/tmp/mf_cf2`), ending with a newline. It is deterministic and idempotent — the same bytes on every run — and refuses to write if the entry ever drifts outside the 1–140 character gate.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/mf_cf2 node main.ts
cat /tmp/mf_cf2/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

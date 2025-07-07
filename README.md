# tallya

Tallya (from “tally” meaning to count, plus “-a” for action)

> Turn raw counts into concise, UX‑friendly bucketed labels like `300+`, `7K+` or `12M+`.

---

## Install

```bash
npm install tallya
# or
yarn add tallya
```

---

## Quick Start

```ts
import { getLabel } from "tallya";

// default suffix '+'
getLabel(317); // → '300+'
getLabel(7321); // → '7K+'
getLabel(12_345_678); // → '12M+'
getLabel(0); // → '0+'

// custom suffix
getLabel(317, { suffix: " sold" }); // → '300 sold'
getLabel(0, { suffix: "" }); // → '0'
```

---

## API

### `getLabel(count, options?) → string`

| Argument  | Type                  | Default | Description                                                   |
| --------- | --------------------- | ------- | ------------------------------------------------------------- |
| `count`   | `number`              | —       | Any finite number you want to label (throws on `NaN` or `∞`). |
| `options` | `{ suffix?: string }` | `{}`    | Configuration object (only `suffix` is supported in v1.0).    |

- **Suffix**: Text appended to every label. Defaults to `+`.

```ts
getLabel(100); // '100+'
getLabel(100, { suffix: "" }); // '100'
```

---

## How It Works

1. **Zero check**: Throws if `count` is not finite.
2. **Zero bucket**: `0 → '0+'` (or `'0'` with empty suffix).
3. **Magnitude buckets**: Groups by thousands: `K`, `M`, `B`, `T`.
4. **Floor and suffix**: Floors count to bucket value, then appends suffix.

Under the hood it uses `Math.log10` and a tiny lookup array (`['', 'K', 'M', 'B', 'T']`) for an _O(1)_ label computation.

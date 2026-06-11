# Quran Verses Worker

A Cloudflare Worker that returns a random Quran verse (Arabic, English translation, and a short reflection) as JSON. Built for use with [TRMNL](https://usetrmnl.com/) e-ink displays, but usable by any client.

## API

```
GET /
```

Response:

```json
{
  "verse": {
    "id": 1,
    "reference": "Al-Baqarah 2:286",
    "arabic": "...",
    "english": "...",
    "explanation": "..."
  },
  "event": ""
}
```

Responses are sent with no-cache headers, so a new request returns a freshly randomized verse each time.

## Development

```
npx wrangler dev worker.js --format modules
```

## Deployment

Pushes to `main` automatically deploy via the GitHub Actions workflow in `.github/workflows/deploy-worker.yml`, using `wrangler deploy`. Requires the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.

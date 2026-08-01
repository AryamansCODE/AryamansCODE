# 🕷 Spider-Man: Beyond the Web

A cinematic single-page Spider-Man movie fan website, served as a **Cloudflare Worker** with static assets.

## Structure

- `public/` — the website (plain HTML/CSS/JS, no build step)
- `wrangler.jsonc` — Cloudflare Workers config (assets-only Worker)

## Deploy on Cloudflare (Git integration)

1. In the Cloudflare dashboard go to **Workers & Pages → Create → Import a repository**
2. Select the `AryamansCODE/AryamansCODE` repo
3. Set **Root directory** to `spiderman-website`
4. Build settings: leave the build command **empty**, deploy command `npx wrangler deploy`
5. Every push auto-deploys to your live `*.workers.dev` URL

## Deploy from a terminal (alternative)

```bash
npx wrangler deploy
```

## Hero image

Generated with Higgsfield — Nano Banana Pro (2K, 16:9), served from Cloudinary's CDN.

---

*A fan-made tribute. Spider-Man and all related characters are property of Marvel.*

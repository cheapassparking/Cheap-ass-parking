# Cheap Ass Parking

> Don't pay a horse's price for parking.

A fast, mobile-friendly landing page for **Cheap Ass Parking** — the Booking.com of parking.
Built as a plain static site (HTML + CSS + JavaScript), so there's **no build step** and it
deploys to Vercel in about two minutes.

---

## What's in here

| File | What it does |
|------|--------------|
| `index.html` | The whole page: hero + search, parking categories, how it works, savings pitch, popular spots, the promise, CTA, footer. |
| `styles.css` | All styling (the "painted asphalt + road-line yellow" look). |
| `script.js` | Mobile menu, the "popular spots" cards, and the search form behavior. |
| `README.md` | This file. |

---

## See it on your computer first

You don't need anything installed. Just **double-click `index.html`** and it opens in your browser.

(Optional, if you have Python) run a local server so links behave exactly like the live site:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## Put it on GitHub

If you've never used GitHub, the easiest way is the website (no command line needed):

1. Go to **github.com**, sign in, and click **New repository**.
2. Name it `cheap-ass-parking`, leave it Public (or Private), and click **Create repository**.
3. On the new repo page, click **“uploading an existing file.”**
4. Drag in `index.html`, `styles.css`, `script.js`, and `README.md`.
5. Click **Commit changes.**

Prefer the command line? From this folder:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cheap-ass-parking.git
git push -u origin main
```

---

## Deploy to Vercel

1. Go to **vercel.com** and sign in **with your GitHub account**.
2. Click **Add New → Project**.
3. Pick the `cheap-ass-parking` repo and click **Import**.
4. Leave every setting on its default (Framework Preset: **Other**, no build command needed).
5. Click **Deploy.**

You'll get a live URL like `cheap-ass-parking.vercel.app` in under a minute. Every time you
push a change to GitHub, Vercel redeploys it automatically.

### Use your own domain
In your Vercel project: **Settings → Domains → Add**, then enter your domain (e.g.
`cheapassparking.com`) and follow the DNS steps Vercel shows you.

---

## Things you'll want to customize

These are the placeholders to swap for real content:

- **Popular spots** — edit the `SPOTS` list near the top of `script.js` with your real
  locations and prices.
- **The search button** — right now it validates input and scrolls to the sample listings.
  When your booking/search system is ready, wire the form submit in `script.js` to it.
- **"Sign in" and "List your space" links** — currently `#` placeholders in `index.html`.
  Point them at your real pages.
- **Our promise / reviews** — the "What you get" section holds honest promises, not fake
  reviews. Once you have real customer reviews, you can add them here.
- **Footer links** (About, Careers, Terms, Privacy, etc.) — point to real pages as you build them.
- **Contact / support** — add a real email or contact page.

---

## Notes

- No frameworks, no dependencies, no tracking. Loads fast.
- Fonts (Anton, Hanken Grotesk, Space Mono) load from Google Fonts.
- Responsive down to small phones; keyboard focus is visible; reduced-motion is respected.

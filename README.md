# TAG 443 Architectural Design College

Static website for TAG 443 College (The Academy of Guilds), Upington, Northern Cape, hosted on GitHub Pages:

**https://rossmelany405-rgb.github.io/Tag443/**

The site's content and images were recovered from the Wayback Machine captures of `tag443.co.za` (2013–2014) and rebuilt as plain, dependency-free HTML and CSS.

## Structure

```
index.html              Home
about/                  TAG 443 (history, affiliations)
academia/               Academia (structure, objectives, assessment)
gallery/                Gallery
contact/                Contact Us
programmes/             Full time and part time programmes
admission/              Admission and DHET registration
tagtalk/                Graduation ceremony 2012
competitions/           Archicad SADC 2013 results
404.html                Custom not-found page
assets/css/style.css    Single stylesheet
assets/js/main.js       Mobile menu toggle and homepage slider (site works without JS)
assets/img/             Images
sitemap.xml, robots.txt, .nojekyll
```

Every page is its own `index.html` in a folder, so URLs are clean (`/Tag443/academia/`). Internal links are relative, so the site works under the `/Tag443/` project path and on a custom domain. The exception is `404.html`, which uses `/Tag443/` absolute paths because GitHub serves it at any depth.

## Design and colour palette

The design keeps the original 2013 theme's colours. They are defined once as CSS custom properties at the top of `assets/css/style.css`.

| Token | Colour | Use |
|---|---|---|
| `--navy` / `--navy-deep` | `#08497e` / `#03355a` | Header menu bar, footer, buttons, logo ink |
| `--sky` | `#40a5e0` | Page glow, nav underline, focus rings |
| `--action` / `--link` | `#108de8` / `#0b6fc0` | Accents / text links |
| `--heading` | `#1f7dca` | Large post and page headings |
| `--green` | `#6aaf06` (text `#4d8000`) | Programmes card |
| `--orange` | `#e35e08` (text `#c24f05`) | TagTalk card, "Read more", calls to action |
| `--crimson` | `#e51646` (text `#c8102e`) | Admission card, required fields |
| `--page` | `#f0f5fb` | Page background |
| `--text` / `--muted` | `#536573` / `#6a7380` | Body text / dates and captions |

The bright colours are used as stripes, icons and backgrounds. Text in those colours uses the darker "text" shade, so every text colour meets WCAG AA contrast.

## Editing

There is no build step. Edit the HTML files directly. The header, navigation and footer are repeated on every page, so if you change one of them, change it on all pages.

If you add a page, also add it to `sitemap.xml` and to the navigation on every page.

## Local preview

```sh
# from the folder that contains Tag443/
python -m http.server 8000
# open http://localhost:8000/Tag443/
```

## Deployment

GitHub Pages serves the `main` branch from the repository root (Settings → Pages → Deploy from a branch → `main` / `/ (root)`). Every push to `main` goes live within about a minute.

### Custom domain

To serve the site at `tag443.co.za`, add a `CNAME` file with the domain, point the domain's DNS at GitHub Pages, and update the absolute URLs in `sitemap.xml`, `robots.txt`, the `canonical`/`og:` tags, and the `/Tag443/` paths in `404.html`.

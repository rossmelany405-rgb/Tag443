# TAG 443 Architectural Design College

Static website for TAG 443 College (The Academy of Guilds), Woodstock, Cape Town, hosted on GitHub Pages:

**https://rossmelany405-rgb.github.io/Tag443/**

The site's content and images were recovered from the Wayback Machine captures of `tag443.co.za` (2013–2014) and rebuilt as plain, dependency-free HTML and CSS.

## Structure

```
index.html              Home
about/                  TAG 443 (history, affiliations)
guilds/                 The Guilds
academia/               Academia (structure, objectives, assessment)
designs/                Designs (City of Cape Town tender)
gallery/                Gallery
workshop/               Workshop
contact/                Contact Us
programmes/             Full time and part time programmes
admission/              Admission and DHET registration
tagtalk/                Graduation ceremony 2012
competitions/           Archicad SADC 2013 results
404.html                Custom not-found page
assets/css/style.css    Single stylesheet
assets/js/main.js       Mobile menu toggle (site works without JS)
assets/img/             Images
sitemap.xml, robots.txt, .nojekyll
```

Every page is its own `index.html` in a folder, so URLs are clean (`/Tag443/academia/`). Internal links are relative, so the site works under the `/Tag443/` project path and on a custom domain. The exception is `404.html`, which uses `/Tag443/` absolute paths because GitHub serves it at any depth.

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

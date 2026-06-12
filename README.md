# Portfolio

Personal site and technical blog for [davidyeihyunlee.com](https://davidyeihyunlee.com).

## Local development

```bash
npm install
npm start
```

Build static output to `_site/`:

```bash
npm run build
```

Run SEO/link checks:

```bash
npm validate
```

## Deploy

Pushes to `main` build with Eleventy and deploy to GitHub Pages via GitHub Actions (source: **GitHub Actions** in repo Settings → Pages).

## Adding a blog post

1. Create `src/blogs/my-post.html` with front matter:

```yaml
---
title: Post Title
description: One-line summary for SEO and the blog index.
date: 2026-06-12
layout: layouts/blog-post.njk
permalink: /blogs/my-post.html
tags: posts
ogType: article
github: https://github.com/dlee6018/optional-repo
math: false
---
```

2. Add the article HTML inside `<main>...</main>`.
3. Push to `main`. The blog index and [sitemap](https://davidyeihyunlee.com/sitemap.xml) update automatically.

After deploy, optionally request indexing for the new URL in [Google Search Console](https://search.google.com/search-console). Social previews: [opengraph.xyz](https://www.opengraph.xyz).

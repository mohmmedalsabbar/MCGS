# MCGS SARL - Company Website

Official website for **MCGS SARL** (Mauritania Pour le Commerce General et Services), a multi-sector contractor based in Nouakchott, Mauritania.

**Live site:** [mcgsmr.com](https://mcgsmr.com)

## What the company does

MCGS SARL is a BAT2-certified contractor operating since 2019 in:

- Construction & public works (buildings, schools, mosques, bus stations)
- Hydraulics (water towers, HDPE pipelines, borehole connections)
- Solar energy (pumping systems, off-grid installations)
- Land development & agriculture (fencing, windbreaks)
- Import-export (construction materials, technical equipment)
- General services (civil engineering, surveying, plumbing)

## Website structure

```
MCGS/
  index.html       -- Single-page site (all sections)
  css/style.css    -- All styles, responsive design, RTL support
  js/script.js     -- Interactions, translations, slideshows
  images/          -- Project photos (JPG, optimized)
  photos/          -- Source/raw photos (not deployed)
  CNAME            -- Custom domain config for GitHub Pages
```

## Sections

| Section        | Description                                              |
|----------------|----------------------------------------------------------|
| Hero           | Company name, tagline, trust badges, CTA buttons         |
| About          | Company overview, founding info, core values              |
| Services       | 6 service cards in a horizontal slider                   |
| Projects       | 4 case studies with photo slideshows and project details  |
| Methodology    | 6-step work process timeline                             |
| Equipment      | 4 equipment categories with capability lists             |
| Certifications | BAT2, tax compliance, CNSS, trade register               |
| Partners       | Client types: government, agencies, NGOs, private sector |
| Contact        | WhatsApp CTA, contact form, address, phone, email        |
| FAQ            | 5 expandable questions and answers                       |

## Features

- **Trilingual** -- French (default), English, Arabic with full RTL support
- **Photo slideshows** -- Project galleries with prev/next arrows, dot indicators, image counter, and touch swipe on mobile
- **Responsive** -- Adapts to desktop, tablet, and phone (3 breakpoints: 1024px, 768px, 480px)
- **Services slider** -- Horizontal carousel for service cards with dots navigation
- **Contact form** -- Sends messages via WhatsApp API
- **Scroll animations** -- Fade-in, slide, and scale effects on scroll
- **Preloader** -- Animated loading screen with progress bar

## Projects showcase

The projects section displays completed case studies as tabbed content. **Grande Muraille Verte** (fencing & windbreaks) is the featured first project. Each project includes:

- Project title, status, and contract value
- Photo slideshow (swipeable on mobile)
- Client, location, duration, funding metadata
- Scope of work, key deliverables, and results

## How translations work

All translatable text uses `data-i18n` attributes in HTML. The `js/script.js` file contains a `translations` object with keys for `fr`, `en`, and `ar`. The language switcher buttons in the nav trigger `applyTranslations()` which updates all text content. Arabic activates RTL layout via `dir="rtl"` on `<html>`.

Placeholder text (form inputs) uses `data-i18n-ph` attributes.

## Deployment

The site is hosted on **GitHub Pages** with a custom domain (`mcgsmr.com`). The `CNAME` file points to `www.mcgsmr.com`.

To deploy changes:
1. Edit files locally
2. Commit and push to `main` branch
3. GitHub Pages automatically deploys from `main`

## Browser support

- Chrome, Firefox, Safari, Edge (latest versions)
- iOS Safari, Android Chrome (mobile)
- RTL layout tested in Arabic mode

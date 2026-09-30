# demand-good-public-health
Official website for DemandGoodQA — Public Health Micro-Skill Lab + Data/Template Vault

## About this repository

This repository contains the public marketing website for **DemandGoodQA**
(public brand: **Demand Good Public Health**), built as a static HTML/CSS/JS
site ready for deployment on a custom domain (`demandgoodqa.com`).

### Structure

- `index.html` — Home
- `about.html` — About (mission, vision, why micro-learning matters, values)
- `micro-skill-lab.html` — Public Health Micro-Skill Lab
- `template-vault.html` — Template Vault
- `pricing.html` — Pricing & membership plans
- `contact.html` — Contact
- `faq.html` — Frequently Asked Questions
- `privacy-policy.html`, `terms-of-service.html`, `refund-policy.html` — Legal pages
- `assets/css/style.css` — Shared design system & styles
- `assets/js/main.js` — Mobile navigation & FAQ accordion behavior

### Running locally

No build step is required. From the repository root, serve the directory with
any static file server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html` in your browser.

### Enrollment links

All calls-to-action route to the DemandGoodQA Thinkific portal:

- Micro-Skill Lab: https://courses.demandgoodqa.com/collections/public-health-micro-skill-lab
- Practitioner Plan: https://courses.demandgoodqa.com/bundles/demand-good-public-health-practitioner-plan
- Vault Pro Plan: https://courses.demandgoodqa.com/bundles/demand-good-public-health-vault-pro-plan
- Organizational Plan: https://courses.demandgoodqa.com/bundles/organizational-plan

### Deploying to Render

This site deploys as a [Render Static Site](https://render.com/docs/static-sites) using the `render.yaml` Blueprint at the repository root:

1. Push this repository to GitHub (already done).
2. In the [Render Dashboard](https://dashboard.render.com/), choose **New > Blueprint** and select this repository. Render will detect `render.yaml` automatically.
   - Alternatively, choose **New > Static Site**, point it at this repository, leave the build command empty, and set the publish directory to `.`.
3. Render will publish the site with no build step (it's plain HTML/CSS/JS).
4. Once deployed, go to the site's **Settings > Custom Domains** in Render and add `demandgoodqa.com` (and `www.demandgoodqa.com` if desired), then update your DNS records as instructed by Render.

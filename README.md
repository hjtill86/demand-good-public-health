# demand-good-public-health
Official website for DemandGoodQA — Public Health Micro-Skill Lab + Data/Template Vault

## About this repository

This repository contains the public marketing website for **DemandGoodQA**
(public brand: **Demand Good Public Health**), built as a static HTML/CSS/JS
site ready for deployment on a custom domain (`demandgoodqa.com`).

### Structure

- `index.html` — Home
- `about.html` — About (mission, vision, founder story, values)
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

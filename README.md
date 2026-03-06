# Ashley Brewer Books — Starter

A minimal Next.js + Tailwind starter configured for static export.

## Commands

```bash
npm install
npm run build
```

The production-ready static site will be generated in the `out/` folder.

## AWS Hosting Options

### Recommended
Use **AWS Amplify Hosting** for easiest deployment, HTTPS, CDN, and custom domain setup.

### Also Works
Use **S3 + CloudFront + Route 53** if you want lower-level AWS control.

## Notes for Static Export

This project uses `output: 'export'` in `next.config.ts`.
That means:

- Great for marketing pages and brochure sites
- Works well with interactive client-side UI
- Not suitable for traditional server-rendered Next.js features
- If you later need forms, search, or gated content, use a hosted service or add AWS APIs/serverless functions separately

## Immediate Next Steps

1. Replace placeholder email links
2. Add real illustration assets in `public/images`
3. Add a custom font once approved
4. Build the flashlight hero section
5. Build the Meet the Family page with click-to-open character modals

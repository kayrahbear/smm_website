# Hosting Notes

## Recommended deployment path
AWS Amplify Hosting

## Why
- Simple static hosting workflow
- HTTPS included
- CDN-backed delivery
- Easy custom domain connection
- Good fit for a marketing site that may evolve over time

## Alternative deployment path
S3 + CloudFront + Route 53

## Tradeoff summary
Amplify:
- Faster setup
- Easier deploys
- Better default experience

S3 + CloudFront:
- More manual control
- More AWS configuration work
- Useful if you want to manage every layer yourself

## Important static-export note
Interactive components still work because they run in the browser after the page loads.
Examples that are safe:
- Modals
- Carousels
- Hover effects
- Clickable family map
- Flashlight cursor effects

Features that would need extra support later:
- Server-side forms
- Search backed by a database
- Authenticated dashboards
- Dynamic author CMS without a separate backend

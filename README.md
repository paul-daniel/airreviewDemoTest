# AirReview React Demo Repo

This repository is a rich React TypeScript demo app used to test AirReview with a realistic pull request.

The `main` branch models a clean commerce operations console:

- order triage and fulfillment queue;
- customer health and account context;
- billing aging and invoice risk;
- inventory pressure and replenishment signals;
- analytics summaries;
- role-based access panels;
- typed service and utility layers.

The feature branch `feature/complex-review-scenario` introduces more than 20 file changes. Some are useful product work; others deliberately introduce issues across security, performance, reliability, accessibility, type safety, maintainability, and testing.

Useful commands:

```bash
npm install
npm run build
npm test

git switch feature/complex-review-scenario
airreview --base main --output
```

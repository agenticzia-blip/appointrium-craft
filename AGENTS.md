# Project Rules

- Keep package definitions in `src/data/pricingPlans.ts` so pricing and payment selections always use one source of truth.
- Keep the detailed student enrollment workflow separate from the lightweight payment confirmation workflow to avoid collecting duplicate onboarding data.
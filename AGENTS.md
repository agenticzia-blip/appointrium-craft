# Project Rules

- Keep package definitions in `src/data/pricingPlans.ts` so pricing and payment selections always use one source of truth.
- Keep the detailed student enrollment workflow separate from the lightweight payment confirmation workflow to avoid collecting duplicate onboarding data.
- Keep lecture definitions and the daily course schedule in `src/data/courseRoadmap.ts` so the roadmap view and schedule-rule tests share one source of truth.
- Resolve inherited package benefits through `getPlanFeatures` and reuse `PricingSection` for Courses so full package details stay consistent across views.
# Conversion Enhancements for FortizIQ

Below are high-impact additions to push visitors toward purchase, grouped by funnel stage. Pick any combination and I'll implement.

## 1. Trust & Credibility (reduce purchase anxiety)
- **Trust bar under Hero**: BBB, Norton Secured, SSL, "256-bit encryption", "US-based support" badges.
- **Money-back guarantee badge** (e.g. 30-day) prominently on Pricing cards.
- **Press / "As seen in" strip** (Forbes, TechCrunch logos if applicable).
- **Live counter**: "X,XXX Americans protected this month" (animated).
- **Real recovery story** mini case-study card near Pricing.

## 2. Urgency & Scarcity
- **Limited-time discount banner** (sticky top): "Save 20% — ends in 02:14:33" with countdown.
- **Annual plan toggle** on Pricing showing "Save $XX/yr" — pushes higher LTV.
- **Recent-signup toast** is already there; add "X people viewing this plan" social proof.

## 3. Risk Reversal
- **Free dark-web scan tool** (email input → results page) as lead magnet that funnels to paid plan.
- **"No credit card required to start"** microcopy if a trial exists, or strong guarantee text.
- **Comparison table**: FortizIQ vs LifeLock vs IdentityForce — feature checkmarks.

## 4. CTA & Friction Reduction
- **Sticky mobile bottom CTA bar** with "Get Protected — $21.99/mo" always visible.
- **Hero secondary CTA**: "See Plans" smooth-scroll for undecided visitors.
- **Plan recommender quiz** (3 questions → recommended plan).
- **One-tap checkout** prefill via query params from Pricing → checkout.

## 5. Personalization & Engagement
- **Geo-personalized headline**: "Identity theft up 34% in [State] this year".
- **Threat-stat ticker** is in place; add CTA inline ("Check if your email was leaked →").
- **Live chat / chatbot** widget for pre-purchase questions.

## 6. Email Capture & Retargeting
- **Exit-intent popup** already exists — A/B test offering a free Identity Risk Report PDF.
- **Lead magnet**: "2026 Identity Theft Survival Guide" PDF for email.
- **Abandoned-interest email**: capture email at quiz/scan → drip sequence (requires Cloud + email provider).

## 7. Social Proof Depth
- **Testimonials with photos + verified badge + recovery $ amount**.
- **Aggregate rating schema** (already partial) — add visible "4.8 ★ from 2,341 reviews".
- **Video testimonial** embedded above Pricing.

## 8. Analytics-Driven Optimization
- **A/B test framework** (PostHog or GrowthBook) on Hero headline + pricing.
- **Scroll-depth & section-view events** to find drop-off points.
- **Heatmap** via Clarity (already loaded?) — verify and review.

## 9. Performance & UX
- **Page speed audit** — LCP/CLS on mobile directly affect conversion.
- **Add `prefers-reduced-motion` paths** for accessibility.
- **Form/CTA accessibility audit** (focus rings, ARIA).

## 10. SEO/Content That Converts
- **Comparison landing pages**: `/vs/lifelock`, `/vs/identityforce`.
- **Blog/resource hub**: "What to do if your SSN is leaked" → CTA to plans.
- **State-specific pages**: "Identity theft protection in Texas".

---

## Recommended quick wins (highest ROI, ~1 build cycle)
1. Sticky mobile bottom CTA bar
2. Money-back guarantee badge on Pricing
3. Trust-badge strip under Hero
4. Annual/monthly pricing toggle with savings callout
5. Comparison table vs LifeLock/IdentityForce

Tell me which set to build (or pick individual items) and I'll implement.

# Aurora — Decisions Log

This file records important project decisions so future sessions do not repeatedly reopen settled questions without reason.

---

## Decision 1
**Decision:** Brand name is Aurora

**Status:** Current decision

**Reason:** Aurora fits the chosen visual direction extremely well: premium, purple-led, atmospheric, futuristic, and approachable.

**Alternatives Considered:** Auralis and other synthetic SaaS-style names

**Impact:** Brand, copy, visuals, and design language should align with the idea of aurora-like light and premium atmospheric motion.

---

## Decision 2
**Decision:** Aurora should use a mostly dark premium AI visual style

**Status:** Current decision

**Reason:** The desired references and stated preferences strongly favor a dark, premium, cutting-edge SaaS look rather than a light minimal startup aesthetic.

**Impact:** Marketing site should use darker backgrounds, atmospheric glow, bold type, and premium spacing.

---

## Decision 3
**Decision:** Purple is the primary accent color

**Status:** Current decision

**Reason:** Purple best matches the intended “aurora” mood, the premium AI direction, and the desired atmospheric identity.

**Impact:** Purple-led lighting, accents, and active states should be core to the visual system. Blue/indigo may support but should not dominate.

---

## Decision 4
**Decision:** The public site should be more dramatic than the dashboard

**Status:** Current decision

**Reason:** The homepage needs to hook users quickly and feel cutting-edge, while the dashboard needs to reduce friction and improve usability.

**Impact:** Use the rule “same design language, different intensity.” The site can be more cinematic; the app should be calmer.

---

## Decision 5
**Decision:** The dashboard should use a softer dark-gray productivity UI

**Status:** Current decision

**Reason:** This preserves brand consistency without overwhelming non-technical users or making the product feel harder to use.

**Impact:** Dashboard surfaces should lean graphite/charcoal rather than deep black with constant glow.

---

## Decision 6
**Decision:** Aurora is for non-technical beginners first

**Status:** Current decision

**Reason:** The product vision is centered on helping people modernize with AI without deep technical knowledge.

**Impact:** UX, copy, and onboarding should reduce intimidation and avoid jargon-heavy assumptions.

---

## Decision 7
**Decision:** Copy tone should be polished enterprise

**Status:** Current decision

**Reason:** This best fits the desired trust level and premium positioning while still keeping the product credible for professionals and businesses.

**Impact:** Avoid slang, exaggerated hype, and casual creator-only tone in core product pages.

---

## Decision 8
**Decision:** Aurora should be one product in one app/codebase

**Status:** Current decision

**Reason:** Keeping the website and dashboard unified simplifies brand continuity, auth, routing, and access logic.

**Alternatives Considered:** Separate marketing site and app

**Impact:** Public site and dashboard should be built in the same Next.js application.

---

## Decision 9
**Decision:** Front-end should be built before backend logic

**Status:** Current decision

**Reason:** Locking the product experience and visual direction early reduces rework and gives Antigravity a clearer target.

**Impact:** Build order is website shell first, then dashboard shell, then auth/backend/billing.

---

## Decision 10
**Decision:** Planned tech stack is Next.js + Vercel + Convex + Stripe

**Status:** Current decision

**Reason:** This stack fits the desired product architecture, deployment flow, payments, and future interactive platform goals.

**Impact:** Documentation and prompts should continue aligning to this stack unless explicitly changed.

---

## Decision 11
**Decision:** Access should eventually be entitlement-based

**Status:** Current decision

**Reason:** Entitlements are cleaner and more scalable than hardcoding access from isolated purchase checks.

**Impact:** Future backend architecture should map purchases/subscriptions into access rules for products and features.

---

## Decision 12
**Decision:** Initial build phases should use mock data only

**Status:** Current decision

**Reason:** Visual and UX refinement should happen before wiring in real systems.

**Impact:** Sprint A and Sprint B should stay front-end-focused until the product shape is locked.

---

## Decision 13
**Decision:** The project should maintain markdown-based memory files in the repo

**Status:** Current decision

**Reason:** Antigravity session memory is limited, so repo-based living docs provide continuity.

**Impact:** Root docs and `/docs` files should be read and updated every session.

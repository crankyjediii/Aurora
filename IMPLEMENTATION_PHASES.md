# Aurora — Implementation Phases

This file tracks the phased execution plan for Aurora. Update statuses as work progresses.

## Status Legend
- Not Started
- In Progress
- Blocked
- Review
- Complete

---

## Phase 0 — Planning and Project Memory
**Status:** In Progress

### Goal
Establish product direction, brand rules, build sequencing, and persistent repo-based memory for Antigravity sessions.

### Scope
- define Aurora product concept
- define design direction
- define public site vs dashboard split
- define phased build strategy
- create planning documents
- create markdown memory system in repo

### Deliverables
- product blueprint
- visual direction brief
- homepage wireframe brief
- Sprint A build prompt
- root docs and `/docs` memory files

### Exit Criteria
- planning docs are created
- memory files are in place
- Antigravity can be guided consistently across sessions

---

## Phase 1 — Marketing Site Shell
**Status:** Complete

### Goal
Build a polished front-end marketing website for Aurora using mock data only.

### Scope
- homepage
- pricing page
- library / resources page
- product detail page
- login page
- signup page
- shared responsive navbar/footer
- core reusable components

### Key Requirements
- mostly dark premium AI SaaS aesthetic
- purple-led visual identity
- strong cinematic hero
- polished enterprise tone
- responsive and production-quality front end
- no backend / no Stripe / no Convex yet

### Deliverables
- front-end site shell
- reusable public-site design system
- first-pass Aurora visual identity in code

### Exit Criteria
- brand feels visually locked enough to continue
- homepage structure is conversion-ready
- site does not feel generic or off-brand

---

## Phase 2 — Dashboard Shell
**Status:** In Progress

### Goal
Build the logged-in dashboard experience with mock data only.

### Scope
- dashboard home
- my library
- explore
- product detail page
- tool finder UI
- chat page UI
- billing shell
- settings shell
- onboarding flow
- shared dashboard layout and sidebar/topbar

### Key Requirements
- same design language as marketing site
- calmer graphite / dark-gray productivity UI
- reduced glow and spectacle
- stronger focus on readability and guidance

### Deliverables
- dashboard shell
- reusable dashboard component system
- product UX baseline

### Exit Criteria
- dashboard feels clearly related to brand
- dashboard is calmer and more functional than site
- UX flow feels approachable and organized

---

## Phase 3 — Auth and User State
**Status:** Not Started

### Goal
Make the application aware of the user and support onboarding persistence.

### Scope
- signup/login flow
- session handling
- onboarding state
- user profile basics
- persistent personalization data

### Deliverables
- working auth
- saved onboarding selections
- user-aware dashboard shell

### Exit Criteria
- users can sign up and return
- onboarding data affects user experience

---

## Phase 4 — Product Access and Entitlements
**Status:** Not Started

### Goal
Connect users to resources they own or are entitled to access.

### Scope
- products schema
- plans schema
- purchases/subscriptions mapping
- entitlements system
- locked/unlocked states
- downloads access model

### Deliverables
- access control foundation
- product ownership logic
- dashboard reflects entitlements accurately

### Exit Criteria
- owned resources unlock correctly
- plan-based access is represented cleanly

---

## Phase 5 — Stripe Billing
**Status:** Not Started

### Goal
Make Aurora monetizable with subscriptions and one-time purchases.

### Scope
- Stripe Checkout
- subscriptions
- one-time product purchases
- webhook handling
- billing portal
- post-purchase unlock logic

### Deliverables
- payment flow
- auto-unlock flow
- billing management UX

### Exit Criteria
- users can pay
- payments sync to access state
- billing can be managed reliably

---

## Phase 6 — Smart Tools and Assistant
**Status:** Not Started

### Goal
Increase product value and stickiness by adding interactive support.

### Scope
- in-app AI assistant
- tool finder logic
- token/cost calculator
- prompt helper
- resource recommendation logic

### Deliverables
- interactive support layer
- smart tools that extend beyond PDFs/downloads

### Exit Criteria
- Aurora feels more like a platform than a download library

---

## Phase 7 — Personalization, Analytics, and Optimization
**Status:** Not Started

### Goal
Improve retention, conversion, and long-term product quality.

### Scope
- better recommendations
- saved items
- upgrade prompts
- analytics instrumentation
- improved empty states
- lifecycle marketing hooks

### Deliverables
- stronger retention and upsell mechanisms
- usage insights
- refined product experience

### Exit Criteria
- product feels more adaptive and polished
- conversion/retention improvements are measurable

---

## Phase 8 — Team Features Expansion
**Status:** Not Started

### Goal
Expand Aurora into a more team-friendly platform.

### Scope
- organization model
- multi-seat plans
- shared resource access
- admin/billing roles
- team onboarding kits

### Deliverables
- team-level access patterns
- admin controls
- shared team workflows

### Exit Criteria
- Aurora supports more than solo use cleanly
- team plans are credible and usable

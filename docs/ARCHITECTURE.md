# Aurora — Architecture

## Architecture Summary

Aurora is intended to be built as a unified product with one primary application containing both the public website and the logged-in dashboard. The architecture should support a seamless transition from discovery to signup to purchase to resource access.

The preferred stack is:
- Next.js
- Vercel
- Convex
- Stripe

## Core Architectural Principles

### 1. One product, one codebase
Aurora should not begin as a disconnected marketing site and separate app unless a future scaling need forces that decision.

Reasons:
- shared design system
- simpler routing and branding
- easier entitlement checks
- simpler auth boundaries
- smoother user experience

### 2. Front-end-first execution
The product should be shaped in UI before full backend wiring.

Reasoning:
- locks brand direction earlier
- reduces rework on layout and UX
- makes product intent clearer before technical complexity grows

### 3. Entitlements as the access layer
The dashboard should not infer access directly from front-end purchase states. Access should eventually be driven by backend entitlements tied to user purchases and subscriptions.

### 4. Same design language, different intensity
The marketing site and dashboard should share brand DNA, but the dashboard must reduce spectacle and increase clarity.

## Planned Stack

### Frontend
**Next.js**
- single app for public site and dashboard
- reusable component system
- route structure for marketing + app sections
- scalable for future auth, billing, and dynamic data

### Hosting / Deployment
**Vercel**
- natural deployment path for Next.js
- easy preview deployments
- good fit for fast front-end iteration

### Backend / Data
**Convex**
Planned responsibilities:
- users
- profiles
- onboarding state
- products
- resource metadata
- entitlements
- saved items
- chat history later
- potentially file metadata / access records

### Billing
**Stripe**
Planned responsibilities:
- one-time purchases
- subscriptions
- billing customer state
- invoices
- customer portal
- webhook events that update access state

## Planned App Structure

Aurora should have two major functional areas inside the same application.

### Public-facing routes
Examples:
- `/`
- `/pricing`
- `/library`
- `/products/[slug]`
- `/login`
- `/signup`

### Dashboard routes
Examples:
- `/app`
- `/app/library`
- `/app/explore`
- `/app/products/[slug]`
- `/app/tool-finder`
- `/app/chat`
- `/app/billing`
- `/app/settings`
- `/app/onboarding`

## Data Model Direction

The exact schema is not finalized, but current conceptual entities include:
- users
- profiles
- organizations
- memberships
- products
- productCategories
- assets
- purchases
- subscriptions
- entitlements
- savedItems
- downloads
- chatSessions
- chatMessages

## Entitlement Model Concept

Eventually, access should be determined like this:
1. user signs up
2. user purchases a product or plan
3. Stripe event is received and verified
4. backend updates purchase/subscription state
5. backend grants or updates entitlements
6. dashboard reads entitlements to determine access

This model allows:
- one-time product purchases
- subscription-based library access
- team access later
- easier change management

## Public Site Architecture Priorities

The current public site should emphasize:
- strong hero section
- clean routing
- reusable marketing components
- resource/product discoverability
- polished conversion flow

It does not yet need:
- production billing logic
- full SEO architecture
- real personalization

## Dashboard Architecture Priorities

The current dashboard shell should emphasize:
- clarity
- consistent layout
- calm dark-gray productivity feel
- easy extension into real data later
- reusable app components

It does not yet need:
- full business logic
- real chat intelligence
- real billing integration

## File / Component Strategy

At a high level, Aurora should be organized around:
- reusable shared UI primitives
- marketing-specific sections/components
- dashboard-specific components/layouts
- route-level page composition
- future separation of mock data and real data layers

## Planning-First Development Inputs

Current source-of-truth inputs for early architecture work:
- PROJECT_CONTEXT.md
- IMPLEMENTATION_PHASES.md
- docs/DECISIONS.md
- Aurora Visual Direction Brief
- Aurora Homepage Wireframe Brief
- Aurora Sprint A Prompt

## Open Architecture Questions

Still to be finalized later:
- final auth provider path
- exact Convex schema details
- file storage implementation choice/details
- resource content delivery model
- chatbot tooling boundaries
- analytics stack
- email/CRM integration strategy

# Aurora

Aurora is a premium AI adoption platform for non-technical beginners, solopreneurs, small businesses, and lean teams. It helps users choose the right AI tools, understand what those tools do, use them more effectively, and build practical workflows with less confusion.

This repository is intended to serve as both the product codebase and the project memory system for Antigravity-driven development. The markdown files in the root and `/docs` folder should be treated as living documentation and updated as the project evolves.

## Core Product Summary

Aurora combines:
- practical AI education
- tool selection guidance
- prompt and workflow resources
- cost/token optimization help
- downloadable digital products
- a dashboard-based user experience
- future in-app AI support and personalization

## Audience

Primary audiences:
- non-technical beginners
- solopreneurs
- freelancers
- creators
- consultants
- small business owners
- lean teams

## Brand Direction

Aurora should feel:
- premium
- trustworthy
- intelligent
- approachable
- cutting-edge
- structured
- polished

Aurora should not feel:
- crypto/Web3
- gimmicky
- cartoonish
- overly technical
- generic startup template
- sterile enterprise software

## Design Direction

Marketing site:
- mostly dark premium AI SaaS aesthetic
- purple-led visual identity
- atmospheric aurora glow
- bold typography
- cinematic hero
- polished enterprise tone

Dashboard:
- same brand language, different intensity
- calmer graphite / dark-gray productivity UI
- reduced glow
- more structure and readability
- muted purple accents

## Recommended Workflow for Antigravity

At the beginning of each session, instruct Antigravity to read:
- `PROJECT_CONTEXT.md`
- `SESSION.md`
- `IMPLEMENTATION_PHASES.md`
- `docs/DECISIONS.md`
- `docs/ARCHITECTURE.md`

At the end of each session, instruct Antigravity to update:
- `SESSION.md`
- `IMPLEMENTATION_PHASES.md` if phase status changed
- `docs/DECISIONS.md` if decisions changed
- `docs/ARCHITECTURE.md` if technical architecture changed
- `docs/ROADMAP.md` if scope or sequencing changed

## Documentation Map

### Root files
- `README.md` — quick-start overview and workflow
- `PROJECT_CONTEXT.md` — stable source-of-truth product context
- `SESSION.md` — active handoff log for the current state of work
- `IMPLEMENTATION_PHASES.md` — phase-by-phase execution plan

### Docs folder
- `docs/ARCHITECTURE.md` — technical structure and system design
- `docs/DECISIONS.md` — key product and architecture decisions
- `docs/ROADMAP.md` — build roadmap and feature sequencing

## Current Priority

The current focus is the front-end-first build flow:
1. marketing site shell
2. dashboard shell
3. auth and onboarding
4. product access / entitlements
5. Stripe billing
6. smart tools and assistant
7. polish and optimization

## Session Kickoff Prompt

Use this at the start of an Antigravity session:

```md
Before making changes, read:
- PROJECT_CONTEXT.md
- SESSION.md
- IMPLEMENTATION_PHASES.md
- docs/ARCHITECTURE.md
- docs/DECISIONS.md
- docs/ROADMAP.md

Follow the current Aurora brand and product direction closely.
Do not redefine the product unless explicitly asked.

After completing work:
1. Update SESSION.md with what changed
2. Update IMPLEMENTATION_PHASES.md if phase status changed
3. Update docs/DECISIONS.md if any important decisions changed
4. Update docs/ARCHITECTURE.md if structure changed
5. Keep docs/ROADMAP.md aligned with the latest plan
```

## Status

Aurora is currently in planning and front-end definition mode. The immediate goal is to use the visual direction brief, homepage wireframe brief, and Sprint A build prompt to generate the marketing site in Antigravity.

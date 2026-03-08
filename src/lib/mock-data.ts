export const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Start exploring AI with curated beginner resources.",
    features: [
      "Access to Starter Tool Guides",
      "5 basic prompt templates",
      "Community forum access",
    ],
    cta: "Start Free",
    recommended: false,
  },
  {
    id: "solo",
    name: "Solo",
    price: "$19",
    period: "/month",
    description: "The complete toolkit for individual professionals.",
    features: [
      "All Premium Tool Guides",
      "Full Prompt System Library",
      "Cost & Token Calculators",
      "2 Workflow Kits per month",
      "Dashboard resource management",
    ],
    cta: "Start 14-Day Trial",
    recommended: true,
  },
  {
    id: "team",
    name: "Team",
    price: "$49",
    period: "/month",
    description: "Scale AI adoption across your entire organization.",
    features: [
      "Everything in Solo",
      "Up to 5 team seats",
      "Team Implementation Packs",
      "Shared resource workspaces",
      "Admin billing controls",
    ],
    cta: "Contact Sales",
    recommended: false,
  },
]

export const PRODUCT_CATEGORIES = [
  {
    id: "guides",
    title: "Tool Guides",
    description: "Step-by-step manuals for mastering specific AI tools.",
    icon: "BookOpen",
  },
  {
    id: "prompts",
    title: "Prompt Systems",
    description: "Engineered prompt libraries for consistent results.",
    icon: "TerminalSquare",
  },
  {
    id: "costs",
    title: "Cost & Token Resources",
    description: "Calculators and guides to optimize your AI spend.",
    icon: "Calculator",
  },
  {
    id: "workflows",
    title: "Workflow Kits",
    description: "Prefabricated systems to connect AI to your daily work.",
    icon: "Workflow",
  },
  {
    id: "teams",
    title: "Team Packs",
    description: "Resources for onboarding and scaling AI across staff.",
    icon: "Users3",
  },
]

export const PAIN_POINTS = [
  {
    id: 1,
    title: "Too Many Tools",
    description: "With hundreds of new AI apps launching weekly, it's impossible to know what actually works.",
    icon: "BoxSelect",
  },
  {
    id: 2,
    title: "Weak Prompts",
    description: "Staring at a blank chat box leads to generic, unhelpful outputs that waste your time.",
    icon: "MessageSquareDashed",
  },
  {
    id: 3,
    title: "Hidden Costs",
    description: "Unpredictable token pricing and overlapping subscriptions burn through budgets fast.",
    icon: "CreditCard",
  },
]

export const FEATURED_RESOURCES = [
  {
    id: "claude-pro-guide",
    title: "The Claude 3 Pro Guide",
    category: "Tool Guides",
    description: "Everything you need to master Anthropic's flagship model for long-form writing and coding.",
    image: "/mock-cover-claude.jpg", 
    price: "Included in Solo",
  },
  {
    id: "marketing-prompt-system",
    title: "Marketing Copy System",
    category: "Prompt Systems",
    description: "Copywriting prompts engineered for brand consistency and high conversion.",
    image: "/mock-cover-marketing.jpg",
    price: "Included in Solo",
  },
  {
    id: "agency-workflow",
    title: "Agency Operation Flow",
    category: "Workflow Kits",
    description: "Automate client drafting and reporting with this connected AI workflow.",
    image: "/mock-cover-agency.jpg",
    price: "$49 one-time",
  },
]

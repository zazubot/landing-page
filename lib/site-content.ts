export type NavItem = {
  href: string;
  label: string;
};

export type IntroTab = {
  label: string;
  title: string;
  description: string;
  features?: string[];
  image: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  bullets: string[];
};

export type PricingPlan = {
  id: "free" | "Monthly" | "Yearly";
  name: string;
  description: string;
  price: number;
  duration: string;
  featured?: boolean;
  paymentUrl: string | null;
  features: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  image: string;
  quote: string;
};

export type Location = {
  country: string;
  address: string;
  note: string;
};

export const siteName = "ZazuBot";
export const siteUrl = "https://zazubot.com";

export const primaryNav: NavItem[] = [
  { href: "/features", label: "Features" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export const footerColumns = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/join", label: "Book a demo" },
    { href: "/pricing", label: "Pricing and plans" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/become-a-partner", label: "Become a partner" },
    { href: "/careers", label: "Careers" },
  ],
  resources: [
    { href: "/urgent-support", label: "Urgent support" },
    { href: "/terms-of-service", label: "Terms of service" },
    { href: "/privacy-policy", label: "Privacy policy" },
  ],
};

export const heroContent = {
  eyebrow: "Powered by SFGCO",
  title: "Help, support, and sell with a data-driven AI agent.",
  description:
    "ZazuBot instantly helps your customers using AI-generated responses. Get 24/7 support, improve satisfaction, and convert more conversations into qualified leads.",
  startNowLabel: "Start now",
  watchDemoLabel: "Watch demo",
  pricingLabel: "Pricing table",
  docsLabel: "Documentation",
  demoUrl: "https://www.youtube.com/watch?v=gv8KYqrUSgA",
  appUrl: "https://app.zazubot.com",
  docsUrl: "https://docs.zazubot.com/",
};

export const introTabs: IntroTab[] = [
  {
    label: "Visual Builder",
    title: "Build AI chat journeys on your own terms without writing code.",
    description:
      "Design complex chatbot flows in a smooth drag-and-drop workspace. Manage logic, prompts, routing, and follow-ups from one place with full control over the building process.",
    image: "/images/intro/flow-1.png",
  },
  {
    label: "Multiple Channels",
    title:
      "Support customers across website, WhatsApp, live chat, and commerce channels.",
    description:
      "Deploy one AI workflow across your storefront, messaging apps, and CRM triggers. ZazuBot captures leads, resolves support requests, and keeps every channel in sync.",
    image: "/images/intro/multiple-channels.png",
  },
  {
    label: "Templates",
    title: "Launch with ready-to-use templates and customize them in minutes.",
    description:
      "Start from proven chatbot stories for support, sales, and onboarding. Each template is customizable, so you can adapt the flow to your own brand and process quickly.",
    image: "/images/intro/template.png",
    features: ["Free to use", "Wide choice", "Easy setup"],
  },
  {
    label: "Publish",
    title: "Match the chat widget to your brand and publish anywhere.",
    description:
      "Control how and where your chatbot appears on your website. Customize colors, launcher styles, and interaction patterns to deliver a consistent branded experience.",
    image: "/images/intro/branding.png",
  },
];

export const useCases = [
  {
    title: "Marketing",
    description:
      "Let your bot drive the conversation and turn more anonymous traffic into qualified pipeline.",
  },
  {
    title: "Support and Product",
    description:
      "Deliver 24/7 multichannel support with AI workflows that reduce repetitive work for your team.",
  },
  {
    title: "Sales",
    description:
      "Boost meetings and close rates with highly interested leads routed straight to the right rep.",
  },
];

export const benefitArticles = [
  {
    title: "Generate more qualified leads",
    description:
      "Get leads through conversations and qualify prospects automatically before they ever reach sales.",
  },
  {
    title: "Improve customer experience",
    description:
      "Offer personalized recommendations and support flows that adapt to each visitor's context.",
  },
  {
    title: "Help your customers 24/7",
    description:
      "Provide consistent assistance across channels so customers can resolve issues whenever they want.",
  },
  {
    title: "Resolve problems faster",
    description:
      "Use visuals, logic, and interactive forms to shorten resolution time for technical questions.",
  },
  {
    title: "Boost team productivity",
    description:
      "Automate repetitive questions so your team can focus on escalation handling and higher-value work.",
  },
  {
    title: "Get more leads on your site",
    description:
      "Add a chat widget in a few clicks and make it easier for visitors to reach you when intent is highest.",
  },
];

export const aiAvatars = [
  "/images/ai/ElevenLabs.jpeg",
  "/images/ai/mistral.jpg",
  "/images/ai/sheet.png",
  "/images/ai/openai.jpg",
  "/images/ai/whatsapp.png",
  "/images/ai/cal.png",
];

export const orbitLogos = [
  "/images/logo.png",
  "/images/logo-02.svg",
  "/images/logo-03.svg",
  "/images/logo-04.svg",
  "/images/logo-05.svg",
  "/images/logo-06.svg",
  "/images/logo-07.svg",
  "/images/logo-08.svg",
  "/images/logo-09.svg",
];

export const integrationTiles = [
  { name: "OpenAI", image: "/images/ai/openai.jpg" },
  { name: "ElevenLabs", image: "/images/ai/ElevenLabs.jpeg" },
  { name: "Mistral", image: "/images/ai/mistral.jpg" },
  { name: "Google Sheets", image: "/images/ai/sheet.png" },
  { name: "WhatsApp", image: "/images/ai/whatsapp.png" },
  { name: "Cal.com", image: "/images/ai/cal.png" },
  { name: "Zapier", image: "/images/ai/zapier.png" },
  { name: "Zendesk", image: "/images/ai/zendesk.png" },
  { name: "Meta", image: "/images/providers/metalogo.png" },
  { name: "CST", image: "/images/providers/citc_logo.png" },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Just for testing",
    price: 0,
    duration: "14 days",
    paymentUrl: null,
    features: [
      "Unlimited ZazuBots",
      "200 chats per month",
      "Webhooks",
      "Integrate with more than 10 platforms",
      "Branding removed",
      "Collect files from users",
      "Create folders",
      "Direct priority support",
      "WhatsApp integration",
      "Custom domain",
      "Priority support",
    ],
  },
  {
    id: "Monthly",
    name: "Monthly Plan",
    description: "Perfect for starters",
    price: 133,
    duration: "month",
    featured: true,
    paymentUrl: "https://secure.clickpay.com.sa/payment/link/46742/242921",
    features: [
      "Unlimited ZazuBots",
      "2,000 chats per month",
      "Extra chats at $10 per 500",
      "Webhooks",
      "Integrate with more than 10 platforms",
      "Branding removed",
      "Collect files from users",
      "Create folders",
      "Direct priority support",
      "WhatsApp integration",
      "Custom domain",
      "Priority support",
    ],
  },
  {
    id: "Yearly",
    name: "Yearly Plan",
    description: "Best value for growing teams",
    price: 1440,
    duration: "year",
    paymentUrl: "https://secure.clickpay.com.sa/payment/link/46742/242905",
    features: [
      "Unlimited ZazuBots",
      "10,000 chats per month",
      "Webhooks",
      "Integrate with more than 10 platforms",
      "Branding removed",
      "Collect files from users",
      "Create folders",
      "Direct priority support",
      "WhatsApp integration",
      "Custom domain",
      "Priority support",
    ],
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also request invoicing with agreed payment terms.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. You can cancel from your account settings at any time and keep access until the end of the paid billing period.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. The free plan gives you a 14-day testing window so you can validate flows before upgrading.",
  },
  {
    question:
      "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes. Contact the sales team with your details and we can discuss special pricing for eligible organizations.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Absolutely. You can upgrade or downgrade as your volume changes.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Laszlo Csomor",
    role: "Digital Marketing Expert",
    image: "/images/testimonial/laszlo-DUTJc4X9.jpeg",
    quote:
      "It is one of the best chatbot builders with intelligent features and drag-and-drop simplicity. Its UI and UX feel exceptionally polished.",
  },
  {
    name: "Oscar",
    role: "Founder and CEO",
    image: "/images/testimonial/oscar-BWCNOw-u.jpeg",
    quote:
      "Within five minutes of signing up you can already have your bot running thanks to the templates. I have used many tools, but none as simple and powerful.",
  },
  {
    name: "Kurnia Kwik",
    role: "Founder and CEO",
    company: "DigitalPointer.ID",
    image: "/images/testimonial/kurnia-C8dDlURd.jpeg",
    quote:
      "I cannot recommend this service enough. The support team is responsive, and the product delivers everything promised and more.",
  },
  {
    name: "Matt Schenck",
    role: "EVP, Admissions",
    company: "US - Africa MSSE",
    image: "/images/testimonial/1719085317222.jpeg",
    quote:
      "The feature richness and polish in this project is incredible. It feels like a mature product from a much larger team.",
  },
  {
    name: "Daniel Watt",
    role: "Chief Technology Officer",
    company: "Nutrition Integrated",
    image: "/images/testimonial/1672842206717.jpeg",
    quote:
      "I have become a bigger fan of low-code tools like this. The recommendation and workflow templates are genuinely useful.",
  },
  {
    name: "Magren Al Qahtani",
    role: "Executive Director",
    company: "Eayni",
    image: "/images/testimonial/1651619253737.jpeg",
    quote:
      "I used ZazuBot at my company and it cut our customer service workload in half. I created a fully functional chatbot in minutes.",
  },
];

export const featurePageContent = {
  heroTitle: "Enabling end-to-end customer service automation",
  heroSubtitle:
    "Learn about ZazuBot benefits that make your business stand out. Automate support, marketing, and sales with AI.",
  cards: [
    {
      title: "Easy-to-use APIs",
      description:
        "Simple, intuitive APIs streamline development and reduce implementation time from weeks to days.",
      bullets: [
        "Comprehensive documentation",
        "SDK support for multiple platforms",
        "Consistent request and response patterns",
      ],
    },
    {
      title: "Multiple AI Providers",
      description:
        "Access the best AI models from various providers through a single unified interface.",
      bullets: [
        "Seamless provider switching",
        "Model-agnostic implementations",
        "Comparative analytics across providers",
      ],
    },
    {
      title: "Visual Builder",
      description:
        "Preview and modify your chatbot in an intuitive visual editor.",
      bullets: ["Testing tool", "Flows", "Launch with confidence"],
    },
    {
      title: "Templates",
      description:
        "Choose a ready-to-use template from the library for an easier start.",
      bullets: ["Customer service", "Customer satisfaction", "Ecommerce sales"],
    },
    {
      title: "Data Collection and Workflows",
      description:
        "Collect user information, build forms and surveys, and route contacts into the right flow or export.",
      bullets: ["A/B testing", "Webhooks", "Zapier actions"],
    },
    {
      title: "Reports",
      description:
        "Track the number of chats and users, and identify the busiest periods across channels.",
      bullets: [
        "Usage trends",
        "Popular interactions",
        "Operational visibility",
      ],
    },
  ] satisfies FeatureCard[],
  comparisonRows: [
    {
      feature: "Multiple AI providers",
      ours: "10+ providers integrated",
      competitors: "Often limited to one or two providers",
    },
    {
      feature: "API simplicity",
      ours: "Simple, consistent APIs",
      competitors: "Higher implementation complexity",
    },
    {
      feature: "Global infrastructure",
      ours: "Built for global availability",
      competitors: "Limited regional support",
    },
    {
      feature: "Enterprise security",
      ours: "Compliance-first posture",
      competitors: "Partial or fragmented coverage",
    },
  ],
};

export const aboutContent = {
  heroTitle: "About ZazuBot",
  heroText:
    "We believe meaningful conversations are the foundation of successful relationships. Messaging is where people naturally engage, and businesses should meet them there with the same speed, relevance, and personality.",
  purposeTitle: "Our purpose",
  missionTitle: "Our mission",
  missionText:
    "Businesses should harness the dynamics of real conversations, because where people love to chat, conversions and customer loyalty grow.",
  visionTitle: "Our vision",
  visionText:
    "Move beyond scripted, transactional responses and give businesses the tools to craft lively, personalized conversations that reflect their own voice.",
  partnershipTitle: "Backed by SFGCO",
  partnershipText:
    "SFGCO has made a significant investment in ZazuBot, reflecting confidence in the platform's potential to transform how support, automation, and AI work together.",
  partnershipSupport:
    "That support positions ZazuBot at the forefront of automation-led growth and gives customers a strong long-term technology partner.",
  valuesTitle: "What we believe",
  valuesSubtitle: "Supercharge your business with ZazuBot intelligence.",
  valuesDescription: "These principles guide everything we build.",
  values: [
    {
      title: "Messaging APIs",
      description:
        "Implement event-based messaging for both synchronous and asynchronous communication across live chat, chatbots, and in-app messaging.",
    },
    {
      title: "Omnichannel APIs",
      description:
        "Funnel every channel into a single messaging experience for all-in-one communication and messaging super-apps.",
    },
    {
      title: "Website Widget",
      description:
        "Monitor and engage visitors through rich messages and apps for custom chat, analytics, and lead capture.",
    },
  ],
};

export const careersContent = {
  heroTitle: "Join our team at ZazuBot",
  heroText:
    "We are building the future of business communication. If you care about technology, innovation, and making a measurable impact, we want to hear from you.",
  whyTitle: "Why work with us?",
  reasons: [
    {
      title: "Innovative culture",
      description:
        "Work with AI and automation technologies in a collaborative, forward-thinking environment.",
    },
    {
      title: "Growth and learning",
      description:
        "We invest in professional development and give people room to grow their skills and careers.",
    },
    {
      title: "Inclusive team",
      description:
        "Join a diverse, supportive team where ideas matter and contributions create real product outcomes.",
    },
  ],
  applyTitle: "Ready to apply?",
  applyText:
    "Send your CV and a short introduction to our team. We are excited to meet you.",
  email: "hr@sfgco.sa",
};

export const locations: Location[] = [
  {
    country: "Saudi Arabia",
    address:
      "6710 Prince Turkey Street\nAl Yarmouk, Al Khobar 34423\nSaudi Arabia",
    note: "Headquarters",
  },
];

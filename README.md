# Zazubot Landing Page

A modern, customizable landing page built with [Next.js](https://nextjs.org/) and TypeScript. This project serves as the main marketing and informational site for Zazubot, featuring multiple layouts, company information, product features, pricing, and more.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- ⚡ Fast, SEO-friendly, and fully responsive
- 🧩 Modular component-based architecture
- 🎨 Customizable themes and styles (Tailwind CSS)
- 🏢 Company, product, and resource pages
- 💳 Pricing, payment success, and join flows
- 📄 Privacy policy and terms of service
- 🤝 Careers and partnership sections
- 🖼️ Rich media and testimonial support

## Project Structure

```
.
├── app/                # Next.js app directory (routes, layouts, pages)
│   ├── (company)/      # Company-related pages (about, careers, partners)
│   ├── (product)/      # Product features, pricing, join, payment, support
│   ├── (resources)/    # Legal and informational pages
│   ├── (default)/      # Default landing and layout
│   └── css/            # Main and additional CSS files
├── components/         # Reusable React components (UI, banners, hero, etc.)
├── public/             # Static assets (images, logos, favicon)
├── package.json        # Project metadata and scripts
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project documentation
└── ...                 # Other config and lock files
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) (optional, supports npm/yarn/pnpm)

### Installation

Clone the repository:

```bash
git clone https://github.com/zazubot/landing-page.git
cd landing-page
```

Install dependencies:

```bash
yarn install
# or
npm install
# or
pnpm install
```

## Development

Start the development server:

```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Building for Production

To build the project for production:

```bash
yarn build
# or
npm run build
# or
pnpm build
```

To start the production server:

```bash
yarn start
# or
npm start
# or
pnpm start
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

[MIT](LICENSE) <!-- Update this if a different license applies -->

## Acknowledgments

- Based on [Cruip's Tailwind Landing Page Template](https://github.com/cruip/tailwind-landing-page-template)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

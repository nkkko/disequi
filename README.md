# Disequi V2 Website

This is the source code for the Disequi company website, built with Next.js 15.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Create a `.env.local` file in the root directory with the following environment variables:

```
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_resend_audience_id
RESEND_FROM_EMAIL=your_verified_domain_email
RESEND_TO_EMAIL=your_resend_account_email
COMPANY_EMAIL=your_company_email
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern, minimalist design with green and black theme
- Blog with MDX support, including Mermaid diagrams
- Contact form with Resend email integration
- Newsletter subscription with Resend audience integration
- SEO optimized with OpenGraph, Twitter Cards, and structured data

## Environment Variables

The following environment variables are required for production:

- `RESEND_API_KEY`: Your Resend API key for sending emails
- `RESEND_AUDIENCE_ID`: Your Resend audience ID for newsletter subscriptions
- `RESEND_FROM_EMAIL`: Email address from your verified domain to use as "from" address
- `RESEND_TO_EMAIL`: Email address to receive contact form submissions (in test mode, must be the email associated with your Resend account)
- `COMPANY_EMAIL`: Your company's contact email displayed on the website

## Built With

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend for email services
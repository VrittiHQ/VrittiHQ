# Architecture

## Service Role
Public marketing website for Vritti. Waitlist, product info, company story. Deployed on Vercel.

## Directory Map
```
src/
├── app/           # Next.js App Router pages
├── components/    # UI components (hero, features, footer, etc.)
├── lib/           # Utilities
└── styles/        # Global CSS
```

## Key Patterns
- **Static-first:** Most pages are statically generated. No dynamic data fetching at runtime.
- **No backend dependency:** This site has zero connection to the backend API.
- **SEO optimized:** Every page has proper meta tags, OG images, and structured data.

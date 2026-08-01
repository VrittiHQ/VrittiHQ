// We must access process.env.NEXT_PUBLIC_* explicitly so Next.js can replace them at build time in client components.
export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "",
  appDisplayName: process.env.NEXT_PUBLIC_APP_DISPLAY_NAME || "",
  orgName: process.env.NEXT_PUBLIC_ORG_NAME || "",
  orgDomain: process.env.NEXT_PUBLIC_ORG_DOMAIN || "",
  appTagline: process.env.NEXT_PUBLIC_APP_TAGLINE || "",
  dashboardUrl: process.env.NEXT_PUBLIC_APP_URL || "",
};

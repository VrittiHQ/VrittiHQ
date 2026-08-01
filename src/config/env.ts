type EnvKey =
  | "NEXT_PUBLIC_APP_NAME"
  | "NEXT_PUBLIC_APP_DISPLAY_NAME"
  | "NEXT_PUBLIC_ORG_NAME"
  | "NEXT_PUBLIC_ORG_DOMAIN"
  | "NEXT_PUBLIC_APP_TAGLINE"
  | "NEXT_PUBLIC_APP_URL";

const readEnv = (key: EnvKey, fallback: string = ""): string => {
  const value = process.env[key];
  if (!value || value.trim().length === 0) {
    return fallback;
  }

  return value;
};

export const env = {
  appName: readEnv("NEXT_PUBLIC_APP_NAME"),
  appDisplayName: readEnv("NEXT_PUBLIC_APP_DISPLAY_NAME"),
  orgName: readEnv("NEXT_PUBLIC_ORG_NAME"),
  orgDomain: readEnv("NEXT_PUBLIC_ORG_DOMAIN"),
  appTagline: readEnv("NEXT_PUBLIC_APP_TAGLINE"),
  dashboardUrl: readEnv("NEXT_PUBLIC_APP_URL"),
};

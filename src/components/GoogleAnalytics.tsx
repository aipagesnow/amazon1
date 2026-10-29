import { consentScript } from "./consent-script";

const GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-571YTYX4S8";

// Consent Mode default denied + small Accept/Reject banner. GA4 only loads after Accept.
export function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <script
      id="ga4-consent"
      dangerouslySetInnerHTML={{ __html: consentScript(GA_ID) }}
    />
  );
}

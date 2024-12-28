import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://411f8951660471d29efa1f60fcd25055@o4508542501715968.ingest.us.sentry.io/4508542504534016",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
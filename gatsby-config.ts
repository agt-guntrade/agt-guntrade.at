import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        remote: {
          repository: "agt-guntrade/shop",
        },
        zitadel: {
          organizationId: "252746033782587395",
          clientId: "252746210698395651@services",
          authority: "https://accounts.cronit.io",
          redirectUri:
            process.env.NODE_ENV === "production"
              ? "https://agt-guntrade.at"
              : "http://localhost:8000",
          projectIds: [],
        },
        sentry: {
          org: "cronit",
          project: "agt-guntrade",
          dsn: "https://c0719152fd8297c15d5a3a8b181bfdb0@sentry.cronit.io/4",
        },
      },
    },
    `gatsby-jaen-mailpress`,
    `gatsby-plugin-postcss`,
  ],
};

export default config;

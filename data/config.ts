const config = {
  defaultTitle: "Ryan Naing",
  url:
    process.env.NODE_ENV !== "development"
      ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
      : "http://localhost:3040",
  defaultDescription: "I’m Ryan and I’m a software engineer!",
  googleAnalyticsID: "",
};

export default config;

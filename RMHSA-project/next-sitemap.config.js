module.exports = {
  siteUrl: "https://rmhsa-public.vercel.app", // Replace with your website's URL
  generateRobotsTxt: true, // Generate a robots.txt file
  sitemapSize: 5000, // Split sitemap if you have more than 5000 URLs
  changefreq: "daily", // Frequency of content updates
  priority: 0.7, // Default priority for pages
  exclude: ["/admin", "/api/*"], // Exclude specific pages or routes
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all user agents
      { userAgent: "*", disallow: ["/admin"] }, // Disallow specific routes
    ],
  },
};

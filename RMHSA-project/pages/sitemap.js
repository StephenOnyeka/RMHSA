export default async function sitemap() {
  try {
    // Fetch blog data from your API
    const response = await fetch("https://rmhsa-servered.vercel.app/api/blogs");
    const data = await response.json();

    // Map blog posts to sitemap URLs
    const blogUrls = data.blogs.map((blog) => ({
      loc: `/blogs/${blog._id}`, // Assuming blog._id is the unique identifier for each blog
    //   priority: 1.0, // Higher priority for individual blog posts
      priority: 0.8, // Lower priority for individual blog posts
    }));

    // Combine the main blogs page and individual blog URLs
    const urls = [
      {
        loc: "/blogs", // Main blogs page
        priority: 1.0, // Highest priority
      },
      // ...blogUrls, // Add individual blog URLs
    ];

    return urls;
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}

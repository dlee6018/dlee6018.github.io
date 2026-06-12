module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("site", {
    url: "https://davidyeihyunlee.com",
    name: "David Lee",
  });

  eleventyConfig.addCollection("sitemap", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter((item) => item.url && item.url !== "/404.html");
  });

  eleventyConfig.addCollection("postsSorted", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("posts")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return dateObj.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

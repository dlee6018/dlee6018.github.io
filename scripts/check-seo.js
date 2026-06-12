const fs = require("fs");
const path = require("path");

const required = ["<title>", 'name="description"', 'rel="canonical"', 'property="og:title"'];
const pages = [
  "_site/index.html",
  "_site/blogs/index.html",
  "_site/404.html",
  "_site/blogs/alpha-zero.html",
  "_site/blogs/luna-gpt.html",
];

for (const page of pages) {
  const html = fs.readFileSync(path.join(process.cwd(), page), "utf8");
  for (const token of required) {
    if (!html.includes(token)) {
      console.error(`Missing ${token} in ${page}`);
      process.exit(1);
    }
  }
}

const sitemap = fs.readFileSync(path.join(process.cwd(), "_site/sitemap.xml"), "utf8");
const postCount = (sitemap.match(/blogs\/.*\.html/g) || []).length;
if (postCount < 2) {
  console.error(`Expected at least 2 blog URLs in sitemap, found ${postCount}`);
  process.exit(1);
}

console.log("SEO checks passed.");

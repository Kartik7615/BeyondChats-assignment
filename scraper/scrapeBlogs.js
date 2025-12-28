const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article");

async function scrapeBlogs() {
  const baseUrl = "https://beyondchats.com";
  const url = `${baseUrl}/blogs/`;

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const blogCards = $("article.entry-card").slice(0, 5);

  for (let i = 0; i < blogCards.length; i++) {
    const el = blogCards[i];

    const title = $(el)
      .find("a.ct-media-container")
      .attr("aria-label");

    const relativeLink = $(el)
      .find("a.ct-media-container")
      .attr("href");

    const fullLink = relativeLink.startsWith("http")
      ? relativeLink
      : baseUrl + relativeLink;

    const articlePage = await axios.get(fullLink);
    const $$ = cheerio.load(articlePage.data);

    let content = "";
    $$(".entry-content p").each((i, p) => {
      content += $$(p).text().trim() + "\n\n";
    });

    await Article.create({
      title,
      originalUrl: fullLink,
      content
    });

    console.log(`✅ Saved: ${title}`);
  }

  console.log("🎉 Articles scraped with full content");
}

module.exports = scrapeBlogs;

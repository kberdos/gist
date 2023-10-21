import axios from "axios";
import cheerio from "cheerio";

const scrapeCategory = async (category) => {
    const  url = `https://www.reuters.com/${category}`;
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    let articles = [];
    
    $("li.story-collection__story__LeZ29").each((i, element) => {
        articles.push({
            title: $(element).find("h3").find("a").text(),
            summary: "",
            url: $(element).find("h3").find("a").attr("href"),
            source: "Reuters"
        });
    });

    console.log(articles);

    return articles;
}

console.log(await scrapeCategory("world"));
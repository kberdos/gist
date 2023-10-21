import axios from "axios";
import cheerio from "cheerio";

const scrapeCategory = async (category) => {
    const  url = `https://www.reuters.com/${category}`;
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    let articles = [];
    
    // scrape article titles and urls
    const elements = $("li.story-collection__story__LeZ29");

    for (let i = 0; i < elements.length; i++) {
        try {
            // extract article title and url
            let items = {
                title: $(elements[i]).find("h3").find("a").text(),
                summary: "",
                url: $(elements[i]).find("h3").find("a").attr("href"),
                source: "Reuters"
            };

            // update summary field
            items.summary = await scrapeArticle(`https://www.reuters.com${items.url}`);
        
            articles.push(items);
        } catch (err) {
            continue;
        }
    }

    return articles;
}

const scrapeArticle = async (url) => {
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    let articleText = [];

    $("p.text__text__1FZLe").each((i, element) => {
        articleText.push($(element).text());
    });

    return articleText.join(" ");
}

console.log(await scrapeCategory("world"));
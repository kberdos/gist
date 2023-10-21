import axios from "axios";
import cheerio from "cheerio";

const scrapeCategory = async (category) => {
    const  url = `https://www.reuters.com/${category}`;
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    // scrape article titles and urls
    const elements = $("li.story-collection__story__LeZ29");

    let promises = [];
    for (let i = 0; i < elements.length; i++) {
        promises.push(scrapeArticle(elements[i], $));
    }

    const articles = await Promise.all(promises);
    return articles.filter(article => article !== null);
}

const scrapeArticle = async (element, $) => {
    try {
        // extract article title and url
        let articleData = {
            title: $(element).find("h3").find("a").text(),
            summary: "",
            url: $(element).find("h3").find("a").attr("href"),
            source: "Reuters"
        };

        // update summary field
        const html = await axios.get(`https://www.reuters.com${articleData.url}`);
        const $$ = await cheerio.load(html.data);

        let articleText = [];

        $$("p.text__text__1FZLe").each((i, element) => {
            articleText.push($$(element).text());
        });

        articleData.summary = articleText.join(" ");
        
        return articleData;
    } catch (err) {
        return null;
    }
}

const scrapeReuters = async () => {
    let promises = [
        scrapeCategory("world"),
        scrapeCategory("business"),
    ];

    let articles = await Promise.all(promises);

    let data = {
        world: articles[0],
        business: articles[1],
    };

    return data;
}

export default scrapeReuters;
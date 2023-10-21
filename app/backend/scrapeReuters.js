import axios from "axios";
import cheerio from "cheerio";

const scrapeCategory = async (category) => {
    const  url = `https://www.reuters.com/${category}`;
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    // extract article elements
    const elements = $("li.story-collection__story__LeZ29");

    // asynchronously scrape each article
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
            article: "",
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

        articleData.article = articleText.join(" ");
        return articleData;
    } catch (err) {
        return null;
    }
}

const scrapeReuters = async () => {
    let promises = [
        scrapeCategory("world"),
        scrapeCategory("world/us"),
        scrapeCategory("business"),
        scrapeCategory("business/healthcare-pharmaceuticals/"),
        scrapeCategory("technology"),
        scrapeCategory("science"),
        scrapeCategory("lifestyle"),
        scrapeCategory("sports"),
    ];

    let articles = await Promise.all(promises);

    let data = {
        world: articles[0],
        us: articles[1],
        business: articles[2],
        health: articles[3],
        technology: articles[4],
        science: articles[5],
        lifestyle: articles[6],
        sports: articles[7],
    };

    return data;
}

export default scrapeReuters;
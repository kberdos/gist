import axios from "axios";
import cheerio from "cheerio";

const scrapeCategory = async (category) => {
    const  url = `https://www.nytimes.com/section/${category}`;
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    // extract article elements
    const elements = $("li.css-18yolpw");
    
    // asynchronously scrape each article
    let promises = [];
    for (let i = 0; i < elements.length; i++) {
        promises.push(scrapeArticle(elements[i], $));
    }

    const articles = await Promise.all(promises);
    
    return {
        articles: articles.filter(article => article !== null),
        category: category,
    };
}

const scrapeArticle = async (element, $) => {
    try {
        // extract article title, sub-title, and url
        let articleData = {
            title: $(element).find("h3").text(),
            article: "",
            summary: $(element).find("p").text(),
            url: $(element).find("a").attr("href"),
            source: "New York Times"
        };

        // update article field (commented out because it is not working yet)
        // const html = await axios.get(`https://www.nytimes.com${articleData.url}`);
        // const $$ = await cheerio.load(html.data);

        // let articleText = [];
        // $$(element).find("p.css-at9mc1").each((i, element) => {
        //         articleText.push($$(element).text());
        // });

        // articleData.article = articleText.join(" ");
        return articleData;
    } catch (err) {
        return null;
    }
}

const scrapeNYTimes = async () => {
    let promises = [
        scrapeCategory("world"),
        scrapeCategory("us"),
        scrapeCategory("science"),
        scrapeCategory("sports"),
        scrapeCategory("health"),
        scrapeCategory("business"),
        scrapeCategory("arts"),
        scrapeCategory("style"),
    ];

    let articles = await Promise.all(promises);

    let data = {
        // world: articles[0],
        // us: articles[1],
        // science: articles[2],
        // sports: articles[3],
        // health: articles[4],
        // business: articles[5],
        // arts: articles[6],
        // lifestyle: articles[7],
    };

    return data;
}

export default scrapeNYTimes;
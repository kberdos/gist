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
    return articles.filter(article => article !== null);
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
        scrapeCategory("politics"),
        scrapeCategory("science"),
        scrapeCategory("sports"),
        scrapeCategory("health"),
        scrapeCategory("nyregion"),
        scrapeCategory("business"),
        scrapeCategory("opinion"),
        scrapeCategory("arts"),
        scrapeCategory("books"),
        scrapeCategory("style"),
        scrapeCategory("food"),
        scrapeCategory("travel")
    ];

    let articles = await Promise.all(promises);

    let data = {
        world: articles[0],
        us: articles[1],
        politics: articles[2],
        science: articles[3],
        sports: articles[4],
        health: articles[5],
        ny: articles[6],
        business: articles[7],
        opinion: articles[8],
        arts: articles[9],
        books: articles[10],
        lifestyle: articles[11],
        food: articles[12],
        travel: articles[13],
    };

    return data;
}

export default scrapeNYTimes;
import axios from "axios";
import cheerio from "cheerio";

const scrapeCategory = async (category) => {
    const  url = `https://www.nytimes.com/section/${category}`;
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    let articles = [];
    
    $("li.css-18yolpw").each((i, element) => {
        articles.push({
            title: $(element).find("h3").text(),
            summary: $(element).find("p").text(),
            url: $(element).find("a").attr("href"),
            source: "New York Times"
        })
    });

    return articles;
}

const scrapeNYTimes = async () => {
    let data = {
        world: await scrapeCategory("world"),
        us: await scrapeCategory("us"),
        politics: await scrapeCategory("politics"),
        science: await scrapeCategory("science"),
        sports: await scrapeCategory("sports"),
        health: await scrapeCategory("health"),
        // ny: [],
        // business: [],
        // opinion: [],
        // arts: [],
        // books: [],
        // style: [],
        // food: [],
        // travel: [],
        // magazine: [],
        // realEstate: [],
    };

    return data;
}

export default scrapeNYTimes;
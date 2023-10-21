import axios from "axios";
import cheerio from "cheerio";

const scrapeNYTimes = async (category) => {
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

let data = {
    world: await scrapeNYTimes("world"),
    us: await scrapeNYTimes("us"),
    politics: await scrapeNYTimes("politics"),
    science: await scrapeNYTimes("science"),
    sports: await scrapeNYTimes("sports"),
    health: await scrapeNYTimes("health"),
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

console.log(data);

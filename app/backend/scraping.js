import axios from "axios";
import cheerio from "cheerio";

const scraper = async () => {
    const  url = "https://www.nytimes.com/section/world";
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    let articles = [];
    
    $("li.css-18yolpw").each((i, element) => {
        articles.push({
            title: $(element).find("h3").text(),
            summary: $(element).find("p").text(),
        })
    });

    console.log(articles);
}

scraper();

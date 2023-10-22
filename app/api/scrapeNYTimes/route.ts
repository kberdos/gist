import axios from "axios";
import cheerio from "cheerio";
import { CheerioAPI, Element } from "cheerio";
import { Article } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const scrapeCategory = async (category: string): Promise<Article[]> => {
  const url = `https://www.nytimes.com/section/${category}`;
  try {
    const html = await axios.get(url);
    // Handle the response data
    const $ = await cheerio.load(html.data);

    // extract article elements
    const elements = $("li.css-18yolpw");

    // asynchronously scrape each article
    let promises = [];
    for (let i = 0; i < elements.length; i++) {
      const article = await scrapeArticle(elements[i], $);
      if (article) {
        promises.push(article);
      }
    }

    const articles = await Promise.all(promises);
    return articles;
  } catch (error) {
    console.error("Axios network error:", error);
    return [];
    // Handle the error here or rethrow it to handle it further
  }
};

const scrapeArticle = async (element: Element, $: CheerioAPI) => {
  try {
    // extract article title, sub-title, and url
    let articleData: Article = {
      title: $(element).find("h3").text() ? $(element).find("h3").text() : "",
      article: "",
      imageUrl: $(element).find("img.css-rq4mmj").attr("src")
        ? $(element).find("img.css-rq4mmj").attr("src")
        : "",
      summary: $(element).find("p").text() ? $(element).find("p").text() : "",
      url:
        $(element).find("a").attr("href") !== undefined
          ? $(element).find("a").attr("href")
          : "",
      source: "New York Times",
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
};

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
    worldNews: articles[0],
    usNews: articles[1],
    science: articles[2],
    sports: articles[3],
    health: articles[4],
    business: articles[5],
    arts: articles[6],
    lifestyle: articles[7],
  };

  return data;
};

export async function POST(request: NextRequest) {
  return NextResponse.json({ data: await scrapeNYTimes() }, { status: 200 });
}

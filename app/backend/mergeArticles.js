import scrapeNYTimes from "./scrapeNYTimes.js";
import scrapeReuters from "./scrapeReuters.js";

const mergeArticles = () => {
    let promises = [scrapeNYTimes(), scrapeReuters()];
    const allArticles = Promise.all(promises);

    const NYTimesArticles = allArticles[0];
    const ReutersArticles = allArticles[1];

    let data = {
        world: NYTimesArticles.world + ReutersArticles.world,
        us: NYTimesArticles.us + ReutersArticles.us,
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

        world: articles[0],
        us: articles[1],
        business: articles[2],
        health: articles[3],
        sustainability: articles[4],
        technology: articles[5],
        science: articles[6],
        lifestyle: articles[7],
        sports: articles[8],
    }
}
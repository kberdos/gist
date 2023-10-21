import scrapeNYTimes from "./scrapeNYTimes.js";
import scrapeReuters from "./scrapeReuters.js";

const mergeArticles = async () => {
    let promises = [scrapeNYTimes(), scrapeReuters()];
    const allArticles = Promise.all(promises);

    const NYTimesArticles = allArticles[0];
    const ReutersArticles = allArticles[1];

    let data = {
        world: NYTimesArticles.world + ReutersArticles.world,
        us: NYTimesArticles.us + ReutersArticles.us,
        science: NYTimesArticles.science + ReutersArticles.science,
        technology: ReutersArticles.technology,
        business: NYTimesArticles.business + ReutersArticles.business,
        sports: NYTimesArticles.sports + ReutersArticles.sports,
        health: NYTimesArticles.health + ReutersArticles.health,
        lifestyle: NYTimesArticles.lifestyle + ReutersArticles.lifestyle,
        arts: NYTimesArticles.arts,
    }

    return data;
}

console.log(await mergeArticles());
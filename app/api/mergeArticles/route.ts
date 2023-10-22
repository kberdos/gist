// import { scrapeNYTimes } from "../scrapeNYTimes/route";
// import { scrapeReuters } from "../scrapeReuters/route";
// import { ScrapedData } from "@/types";
import { NextResponse } from "next/server";

const mergeArticles = async () => {
  // let promises = [scrapeNYTimes(), scrapeReuters()];
  // const allArticles = Promise.all(promises);

  // //@ts-ignore
  // const NYTimesArticles = allArticles[0];
  // //@ts-ignore
  // const ReutersArticles = allArticles[1];

  // let data = {
  //   world: NYTimesArticles.world + ReutersArticles.world,
  //   us: NYTimesArticles.us + ReutersArticles.us,
  //   science: NYTimesArticles.science + ReutersArticles.science,
  //   technology: ReutersArticles.technology,
  //   business: NYTimesArticles.business + ReutersArticles.business,
  //   sports: NYTimesArticles.sports + ReutersArticles.sports,
  //   health: NYTimesArticles.health + ReutersArticles.health,
  //   lifestyle: NYTimesArticles.lifestyle + ReutersArticles.lifestyle,
  //   arts: NYTimesArticles.arts,
  // };

  // let promises = [scrapeNYTimes()];
  // const allArticles = Promise.all(promises);
  // //@ts-ignore
  // const NYTimesArticles = allArticles[0];

  // let data = {
  //   world: NYTimesArticles.world,
  //   us: NYTimesArticles.us,
  //   science: NYTimesArticles.science,
  //   technology: [],
  //   business: NYTimesArticles.business,
  //   sports: NYTimesArticles.sports,
  //   health: NYTimesArticles.health,
  //   lifestyle: NYTimesArticles.lifestyle,
  //   arts: NYTimesArticles.arts,
  // };

  // return data;
  return 1;
};

export async function POST(request: any) {
  // const ny = await fetch("/app/api/scrapeNYTimes/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({}),
  // });
  // let promises = [ny];
  const ny = await fetch("../scrapeNYTimes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  // let promises = [ny];
  // const allArticles = Promise.all(promises);
  // //@ts-ignore
  // const NYTimesArticles = allArticles[0];

  // let data = {
  //   world: NYTimesArticles.world,
  //   us: NYTimesArticles.us,
  //   science: NYTimesArticles.science,
  //   technology: [],
  //   business: NYTimesArticles.business,
  //   sports: NYTimesArticles.sports,
  //   health: NYTimesArticles.health,
  //   lifestyle: NYTimesArticles.lifestyle,
  //   arts: NYTimesArticles.arts,
  // };
  let data = 1;
  return NextResponse.json({ data: data }, { status: 200 });
}

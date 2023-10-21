import { ScrapedData, Article } from "./types";

export const articleOne: Article = {
  title: "PENIS!!",
  summary:
    "Voluptate velit non non tempor. Est Lorem ea ipsum deserunt et non laboris eiusmod ex. In ut commodo veniam commodo nostrud. Minim anim anim ex incididunt in dolor id in culpa exercitation consequat nisi sint excepteur.",
  url: "https://PENIS.COM",
  source: "I MADE THAT SHIT UP",
  imageUrl:
    "https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg",
};

export const articleTwo: Article = {
  title: "random",
  summary: "blah blah blah",
  url: "https://random.com",
  source: "me",
  imageUrl:
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
};

export const articleThree: Article = {
  title: "hehe",
  summary: "hehehehehe",
  url: "https://hehe.com",
  source: "funny",
  imageUrl:
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",
};

export const scrapeDataOne: ScrapedData = {
  usNews: [articleOne],
  business: [articleOne, articleThree],
  technology: [
    articleOne,
    articleTwo,
    articleTwo,
    articleTwo,
    articleTwo,
    articleThree,
    articleOne,
  ],
  worldNews: [articleThree],
  science: [articleOne],
  fashion: [articleOne, articleTwo],
  sports: [],
  art: [articleOne, articleThree],
  health: [articleOne, articleOne, articleOne],
};

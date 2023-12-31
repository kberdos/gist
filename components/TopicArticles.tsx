import { ArticleComponent } from '@/components/ArticleComponent'
import { scrapeDataOne } from '@/dummyData';
import { Article, ScrapedData } from '@/types';
// import mergeArticles from "@/app/api/mergeArticles/route"
interface TopicArticleProps {
  topic: string;
  scrapedData: ScrapedData
}

export const TopicArticles = ({ topic, scrapedData }: TopicArticleProps) => {
  let articlesArr: Article[] = [];
  if (topic === "U.S. News") {
    articlesArr = scrapedData.usNews;
  } else if (topic === "World News") {
    articlesArr = scrapedData.worldNews;
  } else if (topic === "Sports") {
    articlesArr = scrapedData.sports;
  } else if (topic === "Business") {
    articlesArr = scrapedData.business;
  } else if (topic === "Science") {
    articlesArr = scrapedData.science;
  } else if (topic === "Arts") {
    articlesArr = scrapedData.arts;
  } else if (topic === "Technology") {
    articlesArr = scrapedData.technology;
  } else if (topic === "Lifestyle") {
    articlesArr = scrapedData.lifestyle;
  } else if (topic === "Health") {
    articlesArr = scrapedData.health;
  }
  const firstSix: Article[] =
    // pick 6 random elements from articlesArr
    articlesArr.length > 6 ? articlesArr.sort(() => Math.random() - Math.random()).slice(0, 6) : articlesArr;
  return (
    <div>
      <div className="text-xl text-nord-6 mx-16" id={topic}>
        {topic}
      </div>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
          {firstSix.map((article: Article, i: number) => {
            return (
              <ArticleComponent
                title={article.title}
                summary={article.summary}
                article={article.article}
                article_url={article.url ? article.url : ""}
                image_url={article.imageUrl ? article.imageUrl : ""}
                source={article.source}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

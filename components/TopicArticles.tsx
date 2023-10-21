import { ArticleComponent } from '@/components/ArticleComponent'
import { scrapeDataOne } from '@/dummyData';
import { Article } from '@/types';
interface TopicArticleProps {
    topic: string;
}

export const TopicArticles = ({ topic }: TopicArticleProps) => {
    const scrapedData = scrapeDataOne;
    let articlesArr: Article[] = [];
    if (topic === "U.S. News") {
        articlesArr = scrapedData.usNews;
    }
    else if (topic === "World News") {
        articlesArr = scrapedData.worldNews;
    }
    else if (topic === "Sports") {
        articlesArr = scrapedData.sports;
    }
    else if (topic === "Business") {
        articlesArr = scrapedData.business;
    }
    else if (topic === "Science") {
        articlesArr = scrapedData.science;
    }
    else if (topic === "Arts") {
        articlesArr = scrapedData.arts;
    }
    else if (topic === "Technology") {
        articlesArr = scrapedData.technology;
    }
    else if (topic === "Lifestyle") {
        articlesArr = scrapedData.lifestyle;
    }
    else if (topic === "Health") {
        articlesArr = scrapedData.health;
    }
    const firstSix: Article[] = articlesArr.length > 6 ? articlesArr.slice(0, 6) : articlesArr;
    return (
        <div>
            {firstSix.length > 0 &&
                (<div>
                    <div className="font-bold text-2xl text-nord-6 py-5 mx-16 mb-5">{topic}</div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-[90%]">
                            {firstSix.map((article: Article, i: number) => {
                                return (<ArticleComponent
                                    title={article.title}
                                    summary={article.summary}
                                    article_url={article.url}
                                    image_url={article.imageUrl}
                                    source={article.source} />)
                            })}
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

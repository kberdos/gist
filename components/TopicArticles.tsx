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
    else if (topic === "Art") {
        articlesArr = scrapedData.art;
    }
    else if (topic === "Technology") {
        articlesArr = scrapedData.technology;
    }
    else if (topic === "Fashion") {
        articlesArr = scrapedData.fashion;
    }
    else if (topic === "Health") {
        articlesArr = scrapedData.health;
    }
    const firstSix: Article[] = articlesArr.length > 6 ? articlesArr.slice(0, 6) : articlesArr;
    return (
        <div>
            <div className="text-xl text-nord-6">{topic}</div>
            <div>

            </div>
        </div>
    )
}
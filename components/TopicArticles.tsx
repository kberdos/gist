import { ArticleComponent } from '@/components/ArticleComponent'

interface TopicArticleProps {
    topic: string;
}

export const TopicArticles = ({ topic }: TopicArticleProps) => {

    return (
        <div>
            <div className="text-xl text-nord-6">{topic}</div>
            <div><ArticleComponent heading="" image_url="" summary="" article_url="" source=""></ArticleComponent></div>
        </div>
    )
}
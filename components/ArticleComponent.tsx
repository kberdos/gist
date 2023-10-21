
interface ArticleComponentProps {
  heading: string;
  summary: string;
  image_url: string;
  article_url: string;
  source: string;
}

export const ArticleComponent = ({
  heading,
  summary,
  image_url,
  article_url,
  source,
}: ArticleComponentProps) => {
  return (
    <div className="rounded-lg h-[350px] w-[350px] bg-nord-1">
      <div className="rounded-lg w-100 h-40">
        <img
          src={image_url}
          className="w-full h-full object-cover rounded-t-lg"
        ></img>
        <div>
          <a href={article_url} className="text-xl pl-3 pr-3 pt-3 text-nord-6">{heading}</a>
          <div className="text-sm pl-3 pr-3 pb-3 text-nord-6">{summary}</div>
        </div>
        <div>
          <div className="text-sm pl-3 pr-3 pb-3 text-nord-6">Source: {summary}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;

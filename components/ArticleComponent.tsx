import { useState, useEffect } from "react";
interface ArticleComponentProps {
  title: string;
  summary: string;
  image_url: string;
  article_url: string;
  source: string;
}

export const ArticleComponent = ({
  title,
  summary,
  image_url,
  article_url,
  source,
}: ArticleComponentProps) => {
  const [shortSummary, setShortSummary] = useState<string>("");
  const summaryLimit = 300;
  useEffect(() => {
    if (summary.length > summaryLimit) {
      setShortSummary(summary.slice(0, summaryLimit) + "...");
    } else {
      setShortSummary(summary);
    }
    console.log(shortSummary)
  }, [shortSummary])

  return (
    <div className="rounded-lg h-[380px] w-[350px] bg-nord-1 mb-5">
      <div className="rounded-lg w-100 h-40">
        <img
          src={image_url}
          className="w-full h-full object-cover rounded-t-lg"
        ></img>
        <div className="px-3 text-nord-6">
          <div className="text-xl mt-2 hover:underline">
            <a href={article_url}>{title}</a>
          </div>
          <p className="text-sm pb-3">{shortSummary}</p>
        </div>
        <div>
          <div className="text-sm px-3 pb-3 text-nord-6">Source: {source}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComponent;

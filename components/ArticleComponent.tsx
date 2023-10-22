"use client";
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
    console.log(shortSummary);
  }, [shortSummary]);

  return (
    <div className="rounded-xl shadow-xl bg-nord-1">
      <img
        src={image_url}
        className="rounded-t-lg w-full h-48 object-cover"
      ></img>

      <div className="flex flex-col p-4 text-nord-6">
        <div className="text-xl mt-1 hover:underline">
          <a href={article_url}>{title}</a>
        </div>
        <p className="text-sm mt-1">{shortSummary}</p>
      </div>
      <div className="text-sm p-4 mr-2 text-nord-6"> Source: {source}</div>
    </div>
  );
};

export default ArticleComponent;

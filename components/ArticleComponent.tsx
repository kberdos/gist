"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import defaultImage from "@/public/default_news.png";
interface ArticleComponentProps {
  title: string;
  summary: string;
  article: string;
  image_url: string;
  article_url: string;
  source: string;
}

const nytimesUrl = "https://www.nytimes.com/";

export const ArticleComponent = ({
  title,
  summary,
  article,
  image_url,
  article_url,
  source,
}: ArticleComponentProps) => {
  const [shortSummary, setShortSummary] = useState<string>("");
  const rephrasedSummary = summary ? summary : article
  const summaryLimit = 300;
  useEffect(() => {
    if (rephrasedSummary.length > summaryLimit) {
      setShortSummary(rephrasedSummary.slice(0, summaryLimit) + "...");
    } else {
      setShortSummary(rephrasedSummary);
    }
    console.log(shortSummary);
  }, [shortSummary]);

  return (
    <div className="rounded-xl shadow-xl bg-nord-1">
      {image_url ? (
        <img
          src={image_url}
          className="rounded-t-lg w-full h-48 object-cover"
        ></img>
      ) : (
        <Image
          src={defaultImage}
          alt="default image"
          className="rounded-t-lg w-full h-48 object-cover"
        />
      )}

      <div className="flex flex-col p-4 text-nord-6">
        <div className="text-xl mt-1 hover:underline">
          <a href={nytimesUrl + article_url}>{title}</a>
        </div>
        <p className="text-sm mt-1">{shortSummary}</p>
      </div>
      <div className="text-sm p-4 mr-2 text-nord-6"> Source: {source}</div>
    </div>
  );
};

export default ArticleComponent;

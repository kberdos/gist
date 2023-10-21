export interface ScrapedData {
  usNews: Article[];
  business: Article[];
  technology: Article[];
  worldNews: Article[];
  science: Article[];
  fashion: Article[];
  sports: Article[];
  art: Article[];
  health: Article[];
}

export interface Article {
  title: string;
  summary: string;
  url: string;
  source: string;
  imageUrl: string;
}

export interface Topics {
  usNews: boolean;
  business: boolean;
  technology: boolean;
  worldNews: boolean;
  science: boolean;
  fashion: boolean;
  sports: boolean;
  art: boolean;
  health: boolean;
}

export const defaultTopics: Topics = {
  usNews: false,
  business: false,
  technology: false,
  worldNews: false,
  science: false,
  fashion: false,
  sports: false,
  art: false,
  health: false,
};

export const allTopics: Topics = {
  usNews: true,
  business: true,
  technology: true,
  worldNews: true,
  science: true,
  fashion: true,
  sports: true,
  art: true,
  health: true,
};

export interface Article {}

export type PageTypes = "home" | "select" | "view";

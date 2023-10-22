export interface ScrapedData {
  usNews: Article[];
  business: Article[];
  technology: Article[];
  worldNews: Article[];
  science: Article[];
  lifestyle: Article[];
  sports: Article[];
  arts: Article[];
  health: Article[];
}

export const emptyScrapedData = {
  usNews: [],
  business: [],
  technology: [],
  worldNews: [],
  science: [],
  lifestyle: [],
  sports: [],
  arts: [],
  health: [],
};

export interface Article {
  title: string;
  summary: string;
  article: string;
  url: string | undefined;
  source: string;
  imageUrl: string;
}

export interface Topics {
  usNews: boolean;
  business: boolean;
  technology: boolean;
  worldNews: boolean;
  science: boolean;
  lifestyle: boolean;
  sports: boolean;
  arts: boolean;
  health: boolean;
}

export const defaultTopics: Topics = {
  usNews: false,
  business: false,
  technology: false,
  worldNews: false,
  science: false,
  lifestyle: false,
  sports: false,
  arts: false,
  health: false,
};

export const allTopics: Topics = {
  usNews: true,
  business: true,
  technology: true,
  worldNews: true,
  science: true,
  lifestyle: true,
  sports: true,
  arts: true,
  health: true,
};

export interface Article {}

export type PageTypes = "home" | "select" | "view";

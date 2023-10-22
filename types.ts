export interface ScrapedData {
  usNews: Article[];
  worldNews: Article[];
  business: Article[];
  technology: Article[];
  science: Article[];
  lifestyle: Article[];
  sports: Article[];
  arts: Article[];
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
  worldNews: boolean;
  business: boolean;
  technology: boolean;
  science: boolean;
  lifestyle: boolean;
  sports: boolean;
  arts: boolean;
  health: boolean;
}

export const defaultTopics: Topics = {
  usNews: false,
  worldNews: false,
  business: false,
  technology: false,
  science: false,
  lifestyle: false,
  sports: false,
  arts: false,
  health: false,
};

export const allTopics: Topics = {
  usNews: true,
  worldNews: true,
  business: true,
  technology: true,
  science: true,
  lifestyle: true,
  sports: true,
  arts: true,
  health: true,
};

export interface Article {}

export type PageTypes = "home" | "select" | "view";

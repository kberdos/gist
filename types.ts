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

export type PageTypes = "home" | "select" | "view";

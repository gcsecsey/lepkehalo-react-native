export type MolyBookDetails = {
  id: number;
  authors: Array<{ id: number; name: string }>;
  editors: Array<{ id: number; name: string }>;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  url: string;
  tags: Array<{ id: number; name: string }>;
  like_average: number;
  like_count: number;
  reviews_count: number;
  citations_count: number;
  year_of_publishing: number;
};

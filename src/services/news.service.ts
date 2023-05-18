import { INews } from "../@types/INews";
import { data as dbNews, addNews } from "../db/in-memory-news";

const getAllNews = () => dbNews;

const createNews = (news: Omit<INews, "updated_at">) => addNews(news);

const findNews = (id: string) => {
  return dbNews.find((news) => news.id == id);
};

const updateNews = (id: string, data: Omit<INews, "updated_at">) => {
  const index = dbNews.findIndex((news) => news.id === id);

  if (index >= 0) dbNews[index] = data;
};

const destroy = (id: string) => {
  const index = dbNews.findIndex((news) => news.id === id);

  if (index >= 0) dbNews.slice(index, 2);
};

export const NewsService = {
  getAllNews,
  createNews,
  findNews,
  updateNews,
  destroy,
};

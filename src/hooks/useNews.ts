import { INews } from "../@types/INews";
import { useCallback, useState } from "react";
import { NewsService } from "../services/news.service";

export const useNews = () => {
  const [news, setNews] = useState<INews>();

  const findNews = useCallback(async (id: string) => {
    const data = await NewsService.findNews(id);

    if (!data) throw new Error();

    setNews(data);
  }, []);

  const createNews = useCallback(async (news: Omit<INews, "updated_at">) => {
    NewsService.createNews(news);
  }, []);

  const updateNews = useCallback(
    async (id: string, news: Omit<INews, "updated_at">) => {
      NewsService.updateNews(id, news);
    },
    []
  );

  const deleteNews = useCallback(async (id: string) => {
    await NewsService.destroy(id);
  }, []);

  return {
    news,
    findNews,
    createNews,
    updateNews,
    deleteNews,
  };
};

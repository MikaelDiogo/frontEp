import { useParams } from "react-router-dom";
import { BackBar } from "../components/BackBar";
import { Footer } from "../components/Footer";
import { NewsContent } from "../components/NewsContent";
import { useEffect } from "react";
import { useNews } from "../hooks/useNews";
import { FilterHeader } from "../components/FilterHeader";
import { NavNews } from "../components/NavNews";
import { SecondNav } from "../components/SecondNav";
import "../pages/styles.css"

export function News() {
  const { newsId } = useParams();
  const { findNews, news } = useNews();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    (async () => findNews(newsId!))();
  }, []);

  return (
    <>
      <NavNews/>
      
      <NewsContent {...news} />
      <BackBar />
      <Footer />
    </>
  );
}

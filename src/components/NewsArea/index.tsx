import { data as news } from "../../db/in-memory-news";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NewsCard } from "./NewsCard";

import "./styles.css";
import { useState } from "react";
import { useFooter } from "../../context/linkFooterContext";

export const NewsArea = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useFooter();
  return (
    <div id="news" className="newsArea" ref={ref}>
      <h1>Todas as notícias</h1>
      <div className="newsCardArea">
        {news.slice(0, isOpen ? news.length : 4).map((news) => (
          <NewsCard title={news.title} content={news.content} id={news.id} />
        ))}
      </div>
      <button
        className="seeMoreButton"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <>
            <MdKeyboardArrowUp size={30} />
            Veja Menos
          </>
        ) : (
          <>
            <MdKeyboardArrowDown size={30} /> Veja Mais
          </>
        )}
      </button>
    </div>
  );
};

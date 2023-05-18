interface NewsCardProps {
  id: string | number;
  title: string;
  content: string;
}

import { Link } from "react-router-dom";
import "./styles.css";

export const NewsCard = ({ title, content, id }: NewsCardProps) => {
  return (
    <Link className="newsCard" to={`news/${id}`}>
      <div className="newsCardTitle">
        <h2>{title}</h2>
      </div>
      <p>{content.substring(0, 330)}[...]</p>
    </Link>
  );
};

import "./styles.css";
import { INews } from "../../@types/INews";

export const NewsContent = ({
  image,
  content,
  title,
  created_at,
}: Partial<INews>) => {
  const date = new Date(created_at!);

  return (
    <main className="newsContent">
      <div className="newsTitle">
        <div className="newsTextArea">
          <h1>{title}</h1>
        </div>
        <p>{`${date.getDate()} DE ${date
          .toLocaleDateString("pt-BR", { month: "long" })
          .toUpperCase()} DE ${date.getFullYear()}`}</p>
      </div>
      <div className="newsImage">
        <img src={image} />
      </div>

      {content?.includes("\n") ? (
        content?.split("\n").map((line, index) => (
          <p style={index == 1 ? { paddingTop: "1rem" } : undefined}>
            {line} <br />
          </p>
        ))
      ) : (
        <p>{content}</p>
      )}
    </main>
  );
};

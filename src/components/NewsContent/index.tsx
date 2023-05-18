import React from "react";
import "./styles.css";
import { BackBar } from "../BackBar";
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
        <p>{`${date.getDay()} DE ${date
          .toLocaleDateString("pt-BR", { month: "long" })
          .toUpperCase()} DE ${date.getFullYear()}`}</p>
      </div>
      <div className="newsImage">
        <img src={image} />
      </div>
      <p>{content}</p>
    </main>
  );
};

import { useEffect, useState } from "react";

import img41 from "../../../assets/imgs/img41.png";
import img2 from "../../../assets/imgs/img2.png";
import img3 from "../../../assets/imgs/img3.png";

import "./styles.css";

export const History = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((previous) => {
        if (imageIndex >= carrouselData.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const carrouselData = [img41];

  return (
    <div
      className="historyContainer"
      style={{
        backgroundImage: `url(${carrouselData[imageIndex]})`,
      }}
    >
      <p>Confira o nosso sistema de filtragem </p>
    </div>
  );
};

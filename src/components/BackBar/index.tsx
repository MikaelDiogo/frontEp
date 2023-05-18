import { RiArrowUpSLine } from "react-icons/ri";
import "./styles.css";

export function BackBar() {
  return (
    <div className="backBar">
      <div className="backBtn">
        <a href="#topOfPage">
          <span>
            Voltar ao Topo <RiArrowUpSLine size={20} />
          </span>
        </a>
      </div>
    </div>
  );
}

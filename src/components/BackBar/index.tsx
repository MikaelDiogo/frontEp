import { RiArrowUpSLine } from "react-icons/ri";
import "./styles.css";

export function BackBar() {
  return (
    <div className="backBar">
      <div className="backBtn">
        <a
          onClick={(e) => {
            e.preventDefault();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        >
          <span>
            Voltar ao Topo <RiArrowUpSLine size={20} />
          </span>
        </a>
      </div>
    </div>
  );
}

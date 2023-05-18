import { Managers } from "./Managers";
import { History } from "./History";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export const OrganizationContext = () => {
  const navigate = useNavigate();

  return (
    <div className="organizationContainer">
      <History />
      <div className="managersArea">
        <Managers
          manager="schoolManagement"
          onClick={() => navigate("/manager")}
        />
        <Managers manager="aboutUs" onClick={() => navigate("")} />
      </div>
    </div>
  );
};

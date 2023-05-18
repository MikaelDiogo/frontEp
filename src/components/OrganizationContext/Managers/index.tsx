import "./styles.css";

interface ManagersProps {
  manager: "studentUnion" | "schoolManagement" | "aboutUs";
  onClick: () => void;
}

export const Managers = ({ manager, onClick }: ManagersProps) => {
  const handleManager = () => {
    switch (manager) {
      case "schoolManagement":
        return <p className="firstmanager">Conheça nosso sistema de filtragem.</p>;
      case "aboutUs":
        return <p className="secondmanager">Movimento Nacional pela Vacinação tem foco prioritário na retomada nas altas coberturas vacinais do Brasil.</p>;
    }
  };

  return (
    <div className="managersContainer" onClick={onClick}>
      {handleManager()}
    </div>
  );
};

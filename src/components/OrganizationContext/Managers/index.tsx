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
        return <p className="secondmanager">Prefeito de Novo Oriente é eleito presidente do Consórcio de Saúde dos Sertões de Crateús.</p>;
    }
  };

  return (
    <div className="managersContainer" onClick={onClick}>
      {handleManager()}
    </div>
  );
};

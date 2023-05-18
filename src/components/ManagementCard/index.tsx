import "./style.css";

interface ManagementCardProps {
  img: any;
  name: string;
  responsability: string;
}

export const ManagementCard = ({
  img,
  name,
  responsability,
}: ManagementCardProps) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="areaText">
        <h2>{name}</h2>
        <p>{responsability}</p>
      </div>
    </div>
  );
};

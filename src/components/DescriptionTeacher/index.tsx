import "./styles.css";

interface DescriptionTeacherProps {
  coordinatorName: string | undefined;
  courseName: string | undefined;
  description: string | undefined;
  image: string | undefined;
}

export function DescriptionTeacher({
  coordinatorName,
  courseName,
  description,
  image,
}: DescriptionTeacherProps) {
  return (
    <div className="descriptionTeacher">
      <h1>{courseName}</h1>
      <div className="contentDescription">
        <img src={image} alt="Foto do coordenador" />
        <div className="descriptionsTexts">
          <h2>{coordinatorName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
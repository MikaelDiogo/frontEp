interface ObjectivesAndActingProps {
  objectiveCourse: string | undefined;
  actingAreas: string | undefined;
  image: string | undefined;
}

import "./styles.css";

export function ObjectivesAndActing({
  objectiveCourse,
  actingAreas,
  image,
}: ObjectivesAndActingProps) {
  return (
    <div className="objectivesAndActing">
      <div className="objectiveCourse">
        <h1>Objetivo do Curso</h1>
        <p>{objectiveCourse}</p>
      </div>
      <div className="actingAreas">
        <h1>Áreas de Atuação</h1>
        <p>{actingAreas}</p>
      </div>
      <div className="curricularComponents">
        <h1>Componentes Curriculares</h1>
        <div className="curricularComponentImage">
          <img src={image} alt="Componentes Curriculares" />
        </div>
      </div>
    </div>
  );
}

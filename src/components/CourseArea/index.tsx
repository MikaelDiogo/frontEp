import { Link } from "react-router-dom";
import { CourseBlock } from "./CourseBlock";
import "./styles.css";

export function CourseArea() {
  return (
    <div className="courseArea">
      <h1>Nossos Cursos</h1>
      <div className="blocksCoursesBlock">
        <Link to="/curso/informatica">
          <CourseBlock courseAreaName="Informática" />
        </Link>
        <Link to="/curso/enfermagem">
          <CourseBlock courseAreaName="Enfermagem" />
        </Link>
        <Link to="/curso/comercio">
          <CourseBlock courseAreaName="Comércio" />
        </Link>
        <Link to="/curso/administracao">
          <CourseBlock courseAreaName="Administração" />
        </Link>
      </div>
    </div>
  );
}

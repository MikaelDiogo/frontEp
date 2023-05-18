import { ContentSchoolManagement } from "../components/ContentSchoolManagement";
import { NavNews } from "../components/NavNews";

export function SchoolManagement() {
  return (
    <>
      <NavNews />
      <div style={{ padding: "6rem 12.2rem" }}>
        <ContentSchoolManagement />
      </div>
    </>
  );
}

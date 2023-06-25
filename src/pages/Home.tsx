import { NavBar } from "../components/NavBar";
import { SecondNav } from "../components/SecondNav";
import { OrganizationContext } from "../components/OrganizationContext/Index";
import { Approved } from "../components/Approveds";
import { Footer } from "../components/Footer";
import { CourseArea } from "../components/CourseArea";
import { StayIn } from "../components/StayIn";
import { Filter } from "./Filter";
import { NewsArea } from "../components/NewsArea";


export function Home() {
  return (
    <>
      <NavBar />
      <SecondNav />
      <OrganizationContext />
      <StayIn/>
      <Approved />
      <NewsArea/>
      
     
      <Footer />
    </>
  );
}

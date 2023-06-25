import { NavBar } from "../components/NavBar";
import { SecondNav } from "../components/SecondNav";
import { OrganizationContext } from "../components/OrganizationContext/Index";
import { SpecialContent } from "../components/SpecialContent";
import { Footer } from "../components/Footer";

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
      <SpecialContent />
      <NewsArea/>
      
     
      <Footer />
    </>
  );
}

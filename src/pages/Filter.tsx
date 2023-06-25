import { FilterHeader } from "../components/FilterHeader";
import { FilterMain } from "../components/FilterMain";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { NavNews } from "../components/NavNews";

export function Filter(){
  return(
    <>
      {/* <FilterHeader /> */}
      <NavNews/>
      <FilterMain />
      <Footer/>
    </>
  )
}
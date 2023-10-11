import { Outlet } from "react-router-dom";
import Footer from "../LayoutSite/Footer";
import Header from "../LayoutSite/Header";


function LayoutSite() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
  
  );
}
export default LayoutSite;



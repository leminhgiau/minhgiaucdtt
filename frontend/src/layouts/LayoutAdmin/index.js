import { Outlet } from "react-router-dom";
import Header from "../LayoutAdmin/Header";
import Footer from "../LayoutAdmin/Footer";


function LayoutAdmin() {
    return (
      <>
        <Header/>
      <section className="maincontent">
        <div className="container-fluid py-3">
          <Outlet/>
          
        </div>
      </section> 
      <Footer/>
      </>
    );
  }
  
  export default LayoutAdmin;
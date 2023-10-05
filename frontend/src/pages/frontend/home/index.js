import Slider from "../Slider/Slider";
import ProductHome from "./ProductHome";
import categoryservice from "../../../services/CategoryService";
import { useEffect, useState } from "react";
function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategories(result.data.data);
      });
    })();
  }, []);
  return ( 

    <section className="maincontent">
      <div className="container">
   
      <Slider/>
      {categories.map((category, index)=>{
        return <ProductHome category={category} key={index}/>
      })}
      
      </div>
    </section>
 

   );
}

export default Home;
import productservice from "../../../services/ProductService";
import { useEffect, useState } from "react";
import ProductItems from "../../../assets/components/frontend/ProductItems";
import { Link } from "react-router-dom";
import urlImage from "../../../Config";

function ProductHome(props) {
  const [products, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice
        .getProductHome(4, props.category.id)
        .then(function (result) {
          setCategory(result.data.products);
        });
    })();
  }, []);
  return (
    <section className="padding-bottom-sm">
      <header className="section-heading heading-line">
        <h4 className="title-section text-uppercase">{props.category.name}</h4>
      </header>
      <div className="row row-sm">
      <div className="row">
                {products.map(function (product, index) {
                  return <ProductItems product={product} key={index} />;
                })}
              </div>
      </div>
      
    </section>
  );
}

export default ProductHome;

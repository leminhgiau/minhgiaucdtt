import urlImage from "../../../Config";
import { Link } from "react-router-dom";
function ProductItems(props) {
  return (
    <div className="col-sm-3 mb-3">
      <div className="product-item border">
        <div className="product-image">
          <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
            <img
              src={urlImage + "product/" + props.product.image}
              className="img-fluid"
              alt="san pham"
            />
          </Link>
        </div>
        <div className="product-name p-2">
          <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
            <h3 className="text-center fs-5 product-name" >{props.product.name}</h3>
          </Link>
        </div>
        <div className="product-pice p-2 fs-4 ">
          {(() => {
            if (props.product.price_sale !== 0)
              return (
                <div className="row">
                  <div className="col-6">
                    <strong className="text-danger fs-5">
                      {props.product.price_sale}<span>đ</span>
                      <sup></sup>
                    </strong>
                  </div>
                  <div className="col-6 text-end">
                    <del className="text fs-5">{props.product.price}</del><span>đ</span>
                    <sup></sup>
                  </div>
                </div>
              );
            else
              return (
                <div className="row">
                  <div className="col-6">
                    <strong className="text-danger fs-5">
                      {props.product.price}
                      <sup></sup>
                    </strong>
                  </div>
                </div>
              );
          })()}
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
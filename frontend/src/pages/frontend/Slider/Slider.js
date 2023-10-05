import React from "react";
import {BsPhone} from "react-icons/bs"
import {TbDeviceIpad} from "react-icons/tb"
import {CgAppleWatch} from "react-icons/cg"
import {SiXiaomi} from "react-icons/si"
import {BiLogoStripe} from "react-icons/bi"

const Slider = () => (
  <section className="section-main padding-y">
    <main className="card">
      
        <div className="row">
          
              
          {/* col.// */}
          <div className="col-12">
            
            {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
            <div
              id="carousel1_indicator"
              className="slider-home-banner carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel1_indicator"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#carousel1_indicator" data-slide-to={1} />
                <li data-target="#carousel1_indicator" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../../assets/images/banners/girl3.jpg")}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../../assets/images/banners/girl22.jpg")}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../../assets/images/banners/girl11.jpg")}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carousel1_indicator"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel1_indicator"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
          </div>
          {/* col.// */}
          
          {/* col.// */}
        </div>
        {/* row.// */}

      {/* card-body.// */}
    </main>
    {/* card.// */}
  </section>
);
export default Slider;

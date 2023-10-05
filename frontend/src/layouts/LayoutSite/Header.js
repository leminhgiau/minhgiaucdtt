import { Component } from "react";
import {Link} from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            						<div class="contactinfo">
							<ul class="nav nav-pills">
								<li><a href="#"><i class="fa fa-phone"></i>0913344594</a></li>
								<li><a href="#"><i class="fa fa-envelope"></i> legiau0913@gmail.com</a></li>
							</ul>
              </div>
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-12">
                <Link to="http://bootstrap-ecommerce.com" className="brand-wrap">
                  <img className="logo" src={require("../../assets/images/logo1.jpg" )}/>
                </Link>
                {/* brand-wrap.// */}
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6">
                <form action="#" className="search-header  btn btn-danger">
                  <div className="input-group w-100 btn btn-light ">
                    <select
                      className="custom-select border-right"
                      name="category_name"
                    >
                      <option value>Fashion Chanel</option>
                      <option value="codex">Short</option>
                      <option value="codex">Shirt</option>
                      <option value="codex">T-Shirt</option>
                      <option value="codex">coat</option>
                      <option value="comments">jacket</option>
                      <option value="comments">pants</option>
                      <option value="content">sort</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bạn tìm gì"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-dark " type="submit">
                        <i className="fa fa-search" /> Search
                      </button>
                    </div>
                  </div>
                </form>
                {/* search-wrap .end// */}
              </div>
              {/* col.// */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="widgets-wrap float-md-right">
                  
                  
                  <div className="widget-header mr-3">
                    <Link to="/page-profile-orders" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-user" />
                      </div>
                      <small className="text"> Tài khoản  </small>
                    </Link>
                  </div>{" "}
                  <div className="widget-header mr-3">
                    <Link to="/page-profile-orders" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-star" />
                      </div>
                      <small className="text"> Danh sách  </small>
                    </Link>
                  </div>{" "}
                  <div className="widget-header mr-3">
                    <Link to="/page-profile-orders" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-phone" />
                      </div>
                      <small className="text"> Online  </small>
                    </Link>
                  </div>{" "}

                  <div className="widget-header">
                    <Link to="/page-shopping-cart" className="widget-view">
                      <div className="icon-area">
                        <i className="fa fa-shopping-cart" />
                      </div>
                      <small className="text"> Giỏ hàng </small>
                    </Link>
                  </div>
                </div>
                {/* widgets-wrap.// */}
              </div>
              {/* col.// */}
            </div>
            {/* row.// */}
          </div>
          {/* container.// */}
        </section>
        {/* header-main .// */}
        
      </header>
    );
  }
}

export default Header;

import { Link } from "react-router-dom";

function Header() {
        
    return (
        <section className="header bg-black">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                        <Link className="navbar-brand text-white" to="/admin">
                            Quản trị
                        </Link>
                        <button 
                            className="navbar-toggler" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>
                                <Link class="nav-link text-white" to="/admin/menu">
                                    MENU
                                </Link>
                            </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle text-white  " 
                                        href="#"
                                        role="button" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                        SẢN PHẨM
                                    </Link>
                                    
                                    <ul className="dropdown-menu">

                                        <li>
                                            <Link className="dropdown-item" to="/admin/product">
                                                Sản Phẩm
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/admin/category">
                                                Danh mục
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <Link className="dropdown-item" to="/admin/brand">
                                                Thương hiệu
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle text-white  " 
                                        href="#"
                                        role="button" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        >
                                        OUTSITE
                                    </Link>
                                    
                                    <ul className="dropdown-menu">

                                        <li>
                                            <Link className="dropdown-item" to="/admin/topic">
                                                Bài viết
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/admin/post">
                                                Chi tiết bài viết
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/admin/slider">
                                                Slider
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/admin/page">
                                                Trang đơn
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <Link class="nav-link text-white" to="/admin/order">
                                    ĐƠN HÀNG
                                </Link>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" href="#">
                                        
                                    </Link>
                                </li>
                                <li class="nav-item">
                            <Link class="nav-link text-white" to="/admin/user">
                                NGƯỜI DÙNG
                            </Link>
                            </li>

                            <li>
                                <Link class="nav-link text-white" to="/admin/contact">
                                    LIÊN HỆ
                                </Link>
                            </li>

                            

                            </ul>
                            <form className="d-flex text-white" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn " type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Header;



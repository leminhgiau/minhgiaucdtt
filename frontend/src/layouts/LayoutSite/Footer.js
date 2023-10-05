import { Component } from "react";
import {Link} from "react-router-dom";
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return(
        <footer className="section-footer bg-dark">
            <div className="container">
                <section className="footer-top padding-y-lg text-black">
                    <div className="row">
                        <aside className="col-md col-6">
                            <h6 className="title">HỖ TRỢ KHÁCH HÀNG</h6>
                            <ul className="list-unstyled">
                                <li>
                                    
                                    <Link href="#">Phương thức thanh toán</Link>
                                </li>
                                <li>
                                    
                                    <Link href="#">Chính sách bảo hành - đổi trả</Link>
                                </li>
                                <li>
                                    
                                    <Link href="#">Giải pháp mua hàng online</Link>
                                </li>
                               
                            </ul>
                        </aside>
                        <aside className="col-md col-6">
                            <h6 className="title">HỆ THỐNG CỬA HÀNG</h6>
                            <ul className="list-unstyled">
                                <li>
                                    
                                    <Link href="#">- Cơ sở 1: Số 215 Giáp Nhất, Nhân Chính, Thanh Xuân, Hà Nội <br/>
                                        Hotline: 0818.215.215</Link>
                                </li>
                                <li>
                                    
                                    <Link href="#">- Cơ sở 2: 208 Xã Đàn, Đống Đa, Hà Nội<br/>
                                        Hotline: 0815.208.208</Link>
                                </li>
                                <li>
                                    
                                    <Link href="#">- Cơ sở 3: 583 Lê Hồng Phong, Phường 10, Quận 10, tp Hồ Chí Minh<br/>
                                        Hotline: 0825.583.583</Link>
                                </li>
                                <li>
                                    
                                    <Link href="#">- Cơ sở 4: 258 Hoàng Văn Thụ, Phường 4, Quận Tân Bình, tp Hồ Chí Minh<br/>
                                        Hotline: 0399.555.258</Link>
                                </li>
                                
                            </ul>
                        </aside>
                        
                        
                        
                    </div>
                    {/* row.// */}
                </section>
                {/* footer-top.// */}
                <section className="footer-bottom text-center">
                    
                    <p className="text-black"> © DIENTHOAIHAY.VN All Rights Reserved </p>
                    <br />
                </section>
            </div>
            {/* //container */}
        </footer>
        );
    }
}

export default Footer;
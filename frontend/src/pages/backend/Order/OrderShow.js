import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import orderservice from "../../../services/OrderService";
import productservice from "../../../services/ProductService";
import urlImage from "../../../Config";

function OrderShow() {

    const {id} = useParams("id"); //"id" trong routes
    const [order,setOrder]=useState([]);
    const [orderdetail,setOrderdetail]=useState([]);
    const [products,setProducts]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservice.getById(id).then(function(result){//// show controller 
                setOrder(result.data.data);
                setOrderdetail(result.data.order_detail);
            });
        })();
        (async function(){
            await productservice.getAll().then(function(result){//// show controller 
                setProducts(result.data.data);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT ĐƠN HÀNG</strong></div>
                        <div className="col-md-6 text-end " >
                            <button className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <Link to="/admin/order" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                    <tr>
                            <td>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>Tên người đặt</td>
                            <td>{order.name}  </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{order.email}  </td>
                        </tr>
                        <tr>
                            <td>Số điện thoại</td>
                            <td>{order.phone}  </td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td>{order.address}  </td>
                        </tr>
                        <tr>
                            <td>Ghi chú</td>
                            <td>{order.note}  </td>
                        </tr>
                      
                    
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{order.status}  </td>
                        </tr>
                    </tbody>
                 </table>
                <br/>
                <div><h5>Sản phẩm đã đặt</h5></div>
               
                
                 <table className="table table-striped table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderdetail.map(function(order,index){
                            return products.map((product)=>{
                                if(order.product_id===product.id){
                                    return(
                                        <tr key={index}>

                                        <td>
                                            <img src={urlImage +'product/'+ product.image} width={50}/>
                                        </td>
                                        <td>
                                            {product.name}
                                        </td>
                                        <td>
                                            {order.price}
                                        </td>
                                        <td>
                                            {order.qty}
                                        </td>
                                        <td>
                                            {order.amount}
                                        </td>

                                    </tr>
                                    );
                                }

                            })
                            
                        })}
                       
                    </tbody>
                </table>
             </div>

        </div>
     );
}

export default OrderShow;
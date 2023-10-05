import {Link} from "react-router-dom";
import {FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import orderservice from "../../../services/OrderService";
import { useEffect, useState } from "react";
import urlImage from "../../../Config";

function OrderList(){
    const [orders, setOrder] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
      (async function () {
        await orderservice.getAll().then(function (result) {
          setOrder(result.data.data);
        });
      })();
    }, [status_delete]);
    function orderDelete($id) {
        orderservice.remove($id)
            .then(function (res) {
                setStatus_delete(res.data.data.id);
                alert(res.data.message);
            });
    }
   
    return(
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">ĐƠN HÀNG</strong>
                    </div>
                </div>
            </div>
            <div className="card-body text-center">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tên người đặt</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Ghi chú</th>
                            <th>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function(order,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                
                                <td>
                                    {order.name}
                                </td>
                                <td>
                                    {order.email}
                                </td>
                                <td>
                                    {order.phone}
                                </td>
                                <td>
                                    {order.address}
                                </td>
                                <td>
                                    {order.note}
                                </td>
                                
                                <td>
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+order.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => orderDelete(order.id)}><FaTrash /></button>
                                </td>
                                </tr>
                            );
                        })}
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default OrderList;



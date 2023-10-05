import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import contactservice from "../../../services/ContactService";
function ContactShow() {

    const {id} = useParams("id"); //"id" trong routes
    const [contact,setContact]=useState([]);
    useEffect(function(){
        (async function(){
            await contactservice.getById(id).then(function(result){//// show controller 
                setContact(result.data.contact_data);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT LIÊN HỆ</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+contact.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/*   <th>#</th>
                            <th>ID</th>
                            <th>User_id</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Chủ đề</th>
                            <th>Nội dung</th>
                            <th>Ngày tạo</th>
                            <th>Chức năng</th>
                    </tr> */}
                 </thead>
                 <tbody>
                    <tr>
                            <td>ID</td>
                            <td>{id}  </td>
                        </tr>
                        <tr>
                            <td>ID người dùng</td>
                            <td>{contact.user_id}  </td>
                        </tr>
                        <tr>
                            <td>Tên</td>
                            <td>{contact.name}  </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{contact.email}  </td>
                        </tr>
                        <tr>
                            <td>Số điện thoại</td>
                            <td>{contact.phone}  </td>
                        </tr>
                        <tr>
                            <td>Tên</td>
                            <td>{contact.name}  </td>
                        </tr>
                        <tr>
                            <td>Chủ đề</td>
                            <td>{contact.title}  </td>
                        </tr>
                      
                        <tr>
                            <td>Sắp Xếp</td>
                            <td>{contact.sort_order}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{contact.metakey}  </td></tr><tr><td>Metadesc</td>
                            <td>{contact.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{contact.status}  </td>
                        </tr>
                    </tbody>
                 </table>
             </div>

        </div>
     );
}

export default ContactShow;
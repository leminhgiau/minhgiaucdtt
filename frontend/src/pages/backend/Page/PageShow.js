import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import pageservice from "../../../services/PageService";
import urlImage from "../../../Config";

function PageShow() {

    const {id} = useParams("id"); //"id" trong routes
    const [page,setPage]=useState([]);
    useEffect(function(){
        (async function(){
            await pageservice.getById(id).then(function(result){//// show controller 
                setPage(result.data.data);
            });
        })();
    },[]);

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/page/update/"+page.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/page" className="btn btn-sm btn-info me-2">
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
                            <td>Tiêu đề</td>
                            <td>{page.title}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{page.slug}  </td>
                        </tr>
                        <tr>
                            <td>Nội dung</td>
                            <td>{page.content}  </td>
                        </tr>
                       
                        
                        <tr>
                            <td>Metakey</td>
                            <td>{page.metakey}  </td></tr><tr><td>Metadesc</td>
                            <td>{page.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{page.status}  </td>
                        </tr>
                    </tbody>
                 </table>
             </div>

        </div>
     );
}

export default PageShow;
import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import pageservice from "../../../services/PageService";
import { useEffect, useState } from "react";
import urlImage from "../../../Config";

function PageList(){
    const [pages, setPage] = useState([""]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
      (async function () {
        await pageservice.getAll().then(function (result) {
            setPage(result.data);
        });
      })();
    }, [status_delete]);
    function pageDelete($id) {
        pageservice.remove($id)
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
                        <strong className="text-primary">TRANG ĐƠN</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/page/create">
                            <FaPlus/>Thêm
                        </Link>
                        </div>
                </div>
            </div>
            <div className="card-body text-center">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tiêu đề</th>
                            <th>Nội dung</th>
                            <th>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {pages.map(function(page,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                
                                <td>
                                    {page.title}
                                </td>
                                <td>
                                    {page.content}
                                </td>
                                
                                
                                <td>
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/page/show/"+page.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/page/update/"+page.id}>
                                        <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => pageDelete(page.id)}><FaTrash /></button>
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
export default PageList;



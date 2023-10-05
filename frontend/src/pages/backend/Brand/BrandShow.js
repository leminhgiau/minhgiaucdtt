import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import brandservice from "../../../services/BrandService";
import urlImage from "../../../Config";

function BrandShow() {

    const {id} = useParams("id"); //"id" trong routes
    const [brand,setBrand]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getById(id).then(function(result){//// show controller 
                setBrand(result.data.data);
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
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/"+brand.id}>
                               <FaEdit/> </Link>
                            <button className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info me-2">
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
                            <td>Tên Thương Hiệu</td>
                            <td>{brand.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{brand.slug}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{width:200}}className="img-fluid" src={urlImage+'brand/'+brand.image} alt={brand.name} /></td>
                        </tr>
                        <tr>
                            <td>Sắp Xếp</td>
                            <td>{brand.sort_order}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{brand.metakey}  </td></tr><tr><td>Metadesc</td>
                            <td>{brand.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{brand.status}  </td>
                        </tr>
                    </tbody>
                 </table>
             </div>

        </div>
     );
}

export default BrandShow;
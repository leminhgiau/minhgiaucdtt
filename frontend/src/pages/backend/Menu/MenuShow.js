import { Link,useNavigate, useParams } from "react-router-dom";
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from "react";
import menuservice from "../../../services/MenuService";
function MenuShow() {
    const navigate = useNavigate();

    const { id } = useParams("id")
    const [menu, setmenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getById(id).then(function (result) {
                setmenu(result.data.menus)
            });
        })();
    }, [])
    function menuDelete(id) {
        menuservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate("/admin/menu", { replace: true });

        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Chi tiết danh mục</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success me-1" to="/admin/menu">
                            về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/" + menu.id}>
                            <FaRegEdit /> Sửa
                        </Link>
                        <button onClick={() => menuDelete(menu.id)} className="btn btn-sm btn-danger">
                            <FaTrash /> Xóa
                        </button>

                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên Trường</th>
                            <th>Gía Trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>    
                            <th>Name</th>
                            <th>{menu.name}</th>
                        </tr>
                        <tr>
                            <th>Link</th>
                            <th>{menu.link}</th>
                        </tr>
                        <tr>
                            <th>Table_id</th>
                            <th>{menu.table_id}</th>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <th>{menu.type}</th>
                        </tr>
                        <tr>
                            <th>Created_by</th>
                            <th>{menu.created_by}</th>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <th>{menu.status}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default MenuShow;

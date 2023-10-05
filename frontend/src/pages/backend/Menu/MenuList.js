import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from "react";
import menuservice from "../../../services/MenuService";
function MenuList() {
    const [statusdel, setStatusDelete] = useState([]);
    // const Category = ListCategory.Category;
    const [menus, setmenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setmenu(result.data.menus)
            });
        })();
    }, [statusdel])
    function menuDelete(id) {
        menuservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id)
        })
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">QUẢN LÝ MENU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/menu/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 50 }} className="text-center">#</th>
                                <th>Tên</th>
                                <th>Link</th>
                                
                                <th style={{ width: 130 }} className="text-center">Loại menu</th>
                              
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menus.map(function (menu, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td>{menu.name}</td>
                                        <td>{menu.link}</td>
                                    
                                        <td>{menu.type}</td>
                             
                                       
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/menu/show/" + menu.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/"+menu.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={() => menuDelete(menu.id)} className="btn btn-sm btn-danger">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MenuList; 
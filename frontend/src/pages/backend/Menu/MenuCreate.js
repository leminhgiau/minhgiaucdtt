import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuService";
function MenuCreate() {
    const [menu, setmenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setmenu(result.data.menus)
            });
        })();
    }, [])
    const Navigate = new useNavigate();
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [table_id, setTable_id] = useState(0);
    const [type, setType] = useState();
    const [status, setStatus] = useState(2);

    // const image = document.querySelector("#image");



    async function menuStore(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("table_id", table_id);
        menu.append("type", type);
        menu.append("status", status);
        // menu.append("image", image.files[0]);
        // if (image.files.length == 0) {
        //     menu.append("image", "");
        // }
        // else {
        //     menu.append("image", image.files[0]);
        // }

        await menuservice.create(menu).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/menu', { replace: true });
        });

    }

    return (
        <form onSubmit={menuStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">THÊM MENU</strong>

                        </div>
                        <div className="col-md-6 text-end" >
                            <Link to="/admin/menu" className="btn btn-sm btn-info me-3">
                                Quay lại
                            </Link>
                            <button className="btn btn-sm btn-success " type="submit">Lưu</button>

                        </div>
                    </div>
                </div>
                <div className="card-body"> 
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3">
                            <label htmlFor="name">Tên Menu</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Tên Đường Dẫn</label>
                            <input type="text" name="name" value={link} onChange={(e) => setLink(e.target.value)} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Loại Menu</label>
                            <input type="text" name="name" value={type} onChange={(e) => setType(e.target.value)} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">ID bảng</label>
                            <input type="text" name="name" value={table_id} onChange={(e) => setTable_id(e.target.value)} className="form-control" />
                        </div>
                  
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="sort">Trạng Thái</label>
                            <select name="sort" value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                <option value="1">Xuất Bản</option>
                                <option value="2">Chưa Xuất Bản</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </form>
    );
}

export default MenuCreate; 
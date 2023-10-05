
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuService";
function MenuUpdate() {
  const navigate = useNavigate();

  //khai báo state
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [table_id, setTableId] = useState(0);
  const [status, setStatus] = useState(1);
  //chi tiết mẫu tin có id
  const { id } = useParams("id");
  useEffect(function () {
    (async function () {
      await menuservice.getById(id).then(function (result) {
        const tmp = result.data.menus;
        setName(tmp.name);
        setLink(tmp.link);
        setType(tmp.type);
        setStatus(tmp.status);
        setTableId(tmp.table_id);
      });
    })();
  }, []);
  //Lấy danh sách

  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setMenus(result.data.menus);
      });
    })();
  }, []);
  async function menuEdit(event) {
    event.preventDefault();
    // const image = document.querySelector("#image");
    var menu = new FormData();
    menu.append("name", name);
    menu.append("link", link);
    menu.append("type", type);
    menu.append("table_id", table_id);
    menu.append("status", status);

    //update
    await menuservice.update(menu,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/menu", { replace: true });
    });
  }
  return (
    <form onSubmit={menuEdit} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm mục</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/menu" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
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
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="parent_id">Danh Mục Cha</label>
                            <select name="table_id" value={table_id} className="form-control" onChange={(e) => setTableId(e.target.value)}>
                                <option value="0">Danh Mục Cha</option>
                                {menus.map(function (menu, index) {
                                    return (
                                        <option key={index} value={menu.id}>{menu.name}</option>
                                    )
                                })}
                            </select>
                        </div>
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

export default MenuUpdate;
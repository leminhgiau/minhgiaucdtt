import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";

function CategoryCreate() {
    const navigate =useNavigate();
    const [name, setName] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metekey, setMetakey] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);

    async function categoryStore(event){
        event.preventDefault();
        const image = document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("metekey", metekey);
        category.append("metadesc", metadesc);
        category.append("parent_id", parent_id);
        category.append("sort_order", sort_order);
        category.append("status", status);
        category.append("image", image.files[0]);
        await categoryservice.create(category)
        .then(function(res){
            alert(res.data.message)
            navigate('/admin/category' , {replace: true});
        });
    }

    return (
        <form onSubmit={categoryStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM DANH MỤC
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/category" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên danh mục</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metekey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metekey" value={metekey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label><select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select onChange={(e) => setSortOrder(e.target.value)} value={sort_order} name="sort-order" className="form-control">
                                    <option value="0">None</option>
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default CategoryCreate;
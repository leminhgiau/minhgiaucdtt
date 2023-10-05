import { useState } from "react";
import { Link } from "react-router-dom";
import pageservice from "../../../services/PageService";

function PageCreate() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');
    const [metakey, setMetakey] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [status, setStatus] = useState(1);

    async function pageStore(event){
        event.preventDefault();
        var page = new FormData();
        page.append("title",title);
        page.append("slug",slug);
        page.append("content",content);
        page.append("metakey", metakey);
        page.append("metadesc", metadesc);
        page.append("status", status);
        await pageservice.create(page)
        .then(function(res){
            alert(res.data.message)
        })
    }

    return (
        <form onSubmit={pageStore} method="page">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                THÊM TRANG ĐƠN
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/page" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tiêu đề</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Nội dung</label>
                                <input onChange={(e) => setContent(e.target.value)} type="text" name="content" value={content} className="form-control" />
                            </div>
                        

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
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

export default PageCreate;


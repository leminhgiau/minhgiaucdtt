import { Link,useParams,useNavigate } from "react-router-dom";
import pageservice from "../../../services/PageService";
import { useEffect,useState } from "react";


function PageUpdate() {
    //
    const {id} = useParams("id");
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);
    useEffect(function(){
        (async function(){
            await pageservice.getById(id).then(function(result)
            {
                const tmp=result.data.data  ;
                setTitle(tmp.title)
                setContent(tmp.content)
                setMetakey(tmp.metakey)
                setMetadesc(tmp.metadesc)
                setStatus(tmp.status)
       
            });
        })();
    },[]);
    //
    const navigate=useNavigate();
    const [pages, setPages] = useState([]);
    useEffect(function () {
        (async function () {
        await pageservice.getAll().then(function (result) {
            setPages(result.data.data);
        });
        })();
    }, []);
    

    async function pageEdit(event) 
    {
        event.preventDefault();
        var page = new FormData();
        page.append("title", title);
        page.append("metakey", metakey);
        page.append("content",content);
        page.append("metadesc", metadesc);
        page.append("status", status);
       
        await pageservice.update(page,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/page',{replace:true});
        });
    }
    
    return (
        <form onSubmit={pageEdit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">SỬA BÀI VIẾT</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/page" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3"><label htmlFor="name">Tiêu đề</label>
                <input
                  type="text"
                  name="name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3"><label htmlFor="name">Nội dung</label>
                <input
                  type="text"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                />
              </div>
             
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Mô tả</label>
                <textarea
                  name="metadesc"
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
            
              
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}className="form-control"
                  >
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
  
  export default PageUpdate;
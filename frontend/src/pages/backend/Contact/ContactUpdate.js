import { Link,useParams,useNavigate } from "react-router-dom";
import contactservice from "../../../services/ContactService";
import { useEffect,useState } from "react";

function ContactUpdate() {
    //
    const {id} = useParams("id");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [status, setStatus] = useState(1);
    useEffect(function(){
        (async function(){
            await contactservice.getById(id).then(function(result)
            {
                const tmp=result.data.contact_data  ;
                setName(tmp.name)
                setTitle(tmp.title)
                setPhone(tmp.phone)
                setEmail(tmp.email)
                setContent(tmp.content)
                setMetakey(tmp.metakey)
                setMetadesc(tmp.metadesc)
                setStatus(tmp.status)
            });
        })();
    },[]);
    //
    const navigate=useNavigate();
    const [contacts, setContacts] = useState([]);
    useEffect(function () {
        (async function () {
        await contactservice.getAll().then(function (result) {
            setContacts(result.data.contact_data);
        });
        })();
    }, []);
    

    async function contactEdit(event) 
    {
        event.preventDefault();
        var contact = new FormData();
        contact.append("title", title);
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("content", content);
        contact.append("metakey", metakey);
        contact.append("metadesc", metadesc);
       
        contact.append("status", status);
    
        await contactservice.update(contact,id).then(function (res) {
            alert(res.data.message);
            navigate('/admin/contact',{replace:true});
        });
    }
    
    return (
        <form onSubmit={contactEdit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">SỬA LIÊN HỆ</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/contact" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3"><label htmlFor="name">Tên</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3"><label htmlFor="name">Số điện thoại</label>
                <input
                  type="text"
                  name="name"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3"><label htmlFor="name">Email</label>
                <input
                  type="text"
                  name="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                            <div className="md-3">
                                <label >Tiêu đề</label>
                                <textarea
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control">
                                </textarea>
                            </div>
                            <div className="md-3">
                                <label >Nội dung</label>
                                <textarea
                                    name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="form-control">
                                </textarea>
                            </div>

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
  
  export default ContactUpdate;
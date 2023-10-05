import {Link} from "react-router-dom";
import {FaPlus,FaRegEye,FaEdit,FaTrash} from 'react-icons/fa';
import topicservice from "../../../services/TopicService";
import { useEffect, useState } from "react";


function TopicList(){
    const [topics, setTopic] = useState([]);
    const [status_delete, setStatus_delete] = useState([]);
    useEffect(function () {
      (async function () {
        await topicservice.getAll().then(function (result) {
          setTopic(result.data.data);
        });
      })();
    }, [status_delete]);
    function topicDelete($id) {
        topicservice.remove($id)
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
                        <strong className="text-primary">ĐỀ TÀI</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/topic/create">
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
                            <th>Tên đề tài</th>
                            <th>Slug</th>
                            <th>Từ khóa</th>
                            <th>Mô tả</th>
                            <th>Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(function(topic,index){
                            return(
                                <tr key={index}>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                
                                <td>
                                    {topic.name}
                                </td>
                                <td>
                                    {topic.slug}
                                </td>
                                <td>
                                    {topic.metakey}
                                </td>
                                <td>
                                    {topic.metadesc}
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/topic/show/"+topic.id}>
                                        <FaRegEye/>
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/"+topic.id}>
                                        <FaEdit/>
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => topicDelete(topic.id)}><FaTrash /></button>
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
export default TopicList;



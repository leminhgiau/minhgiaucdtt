import axios from "axios";


const httpAxios = axios.create({
    baseURL: 'http://localhost/backend/public/api/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });
export default httpAxios; 

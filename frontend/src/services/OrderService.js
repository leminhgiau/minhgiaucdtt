import httpAxios from '../httpAxios'

function getAll(){
    return httpAxios.get('order/index');
}

function getById(id){
    return httpAxios.get(`order/show/${id}`);
}

function getByPosition(position){
    return httpAxios.get(`order_list/${position}`);
}
function remove(id) {
    return httpAxios.delete(`order/destroy/${id}`);
}
const orderservice = {
    getByPosition:getByPosition,
    getAll:getAll,
    getById:getById,
    remove:remove
}
export default orderservice;
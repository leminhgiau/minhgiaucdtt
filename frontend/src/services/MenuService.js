import httpAxios from "../httpAxios";
function getAll() {
   return httpAxios.get('menu/index');
}
function getById(id) {
    return httpAxios.get(`menu/show/${id}`);
}
function create(menu) {
    return httpAxios.post('menu/store',menu);
}
function update(menu,id) {
    return httpAxios.post(`menu/update/${id}`,menu);
}
function remove(id) {
    return httpAxios.delete(`menu/destroy/${id}`);
}
const menuservice={
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default menuservice;
import httpAxios from "../httpAxios";

function getAll() {
  return httpAxios.get(`page/index`);
}
function getAll_rev() {
  return httpAxios.get(`page/index_rev`);
}
function getById(id) {
  return httpAxios.get(`page/show/${id}`);
}
function create(page) {
  return httpAxios.post("page/store", page);
}
function remove(id) {
  return httpAxios.delete(`page/destroy/${id}`);
}
function update(page, id) {
  return httpAxios.post(`page/update/${id}`, page);
}
function getBySlug(slug) {
  return httpAxios.get(`page/getBySlug/${slug}`);
}

const pageservice = {
  getAll_rev: getAll_rev,
  getBySlug: getBySlug,
  getAll: getAll,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default pageservice;

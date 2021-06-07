import api from "./api";

const getAll = () => {
  return api.get("/api/v1/projects");
};

const create = data => {
  return api.post("/api/v1/projects", data);
};

const update = data => {
  return api.post("/api/v1/projects/edit", data);
};

const findByTitle = title => {
  return api.get(`/api/v1/projects?title=${title}`);
};

// const remove = id => {
//   return api.delete(`/api/v1/projects/${id}`);
// };

export default {
  getAll,
  create,
  update,
  findByTitle,
  // remove,
};

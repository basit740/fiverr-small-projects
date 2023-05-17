import api from "./api";

export function getRoles() {
  return api
    .get("/roles")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function getRole(id) {
  return api
    .get(`/roles/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function createRole(roleData) {
  return api
    .post("/roles", roleData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function updateRole(id, roleData) {
  return api
    .put(`/roles/${id}`, roleData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function deleteRole(id) {
  return api
    .delete(`/roles/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

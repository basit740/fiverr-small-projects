import api from "./api";

export function getAdministrators() {
  return api
    .get("/administrators")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function getAdministrator(id) {
  return api
    .get(`/administrators/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function createAdministrator(administratorData) {
  return api
    .post("/administrators", administratorData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function updateAdministrator(id, administratorData) {
  return api
    .put(`/administrators/${id}`, administratorData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function deleteAdministrator(id) {
  return api
    .delete(`/administrators/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

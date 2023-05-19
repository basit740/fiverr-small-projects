import api from "./api";

export function getRooms() {
  return api
    .get("/rooms")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function getRoom(id) {
  return api
    .get(`/rooms/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function createRoom(roomData) {
  return api
    .post("/rooms", roomData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function updateRoom(id, roomData) {
  return api
    .put(`/rooms/${id}`, roomData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function deleteRoom(id) {
  return api
    .delete(`/rooms/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

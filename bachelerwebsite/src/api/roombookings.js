import api from "./api";

export function getRoomBookings() {
  return api
    .get("/roombookings")
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function getRoomBooking(id) {
  return api
    .get(`/roombookings/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function createRoomBookings(roomBookingsData) {
  return api
    .post("/roombookings", roomBookingsData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function updateRoomBookings(id, roomBookingsData) {
  return api
    .put(`/roombookings/${id}`, roomBookingsData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function deleteRoomBookings(id) {
  return api
    .delete(`/roombookings/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

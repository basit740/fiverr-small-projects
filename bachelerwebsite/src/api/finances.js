import api from "./api";

export function getFinances() {
  return api
    .get(`/finances`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function getFinanceCategories() {
  return api
    .get(`/financeCategories`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export function createFinance(invoiceData) {
  return api
    .post("/finances", invoiceData)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

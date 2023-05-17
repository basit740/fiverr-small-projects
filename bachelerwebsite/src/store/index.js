import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./reducers/authSlice";
import adminSlice from "./reducers/adminSlice";
import categoriesSlice from "./reducers/categoriesSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    categories: categoriesSlice,
  },
});

export default store;

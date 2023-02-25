import { configureStore } from "@reduxjs/toolkit";

//Import Reducers
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

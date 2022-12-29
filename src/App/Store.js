import { configureStore } from "@reduxjs/toolkit";
import dataWilayahReducer from "./features/data-wilayah/dataWilayahSlice";

const store = configureStore({
  reducer: {
    dataWilayah: dataWilayahReducer,
  },
});

export default store;

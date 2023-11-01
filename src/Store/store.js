import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
// export const store = configureStore({
//   reducer: authReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({
//       serializableCheck: false,
//     });
//   },
// });

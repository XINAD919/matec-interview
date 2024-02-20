// import { configureStore } from "@reduxjs/toolkit";
// import eventsReducer from "./events/slice";

// const persistanceLocalStorageMiddleware = (store:any) => (next:any) => (action:any) => {
//   next(action);
//   localStorage.setItem("__redux__state__",JSON.stringify(store.getState()));
// };

// export const store = () => {
//   return configureStore({
//     reducer: {
//       events: eventsReducer,
//     },
//     middleware: [persistanceLocalStorageMiddleware],
//   });
// };

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof store>;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

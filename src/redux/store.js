import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit"

import moviesReducer from "./reducers/moviesReducer";
const store=configureStore({
  reducer:{
    movie:moviesReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store;
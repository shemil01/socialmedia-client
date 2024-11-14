import { configureStore } from "@reduxjs/toolkit";
// import {userReducer} from "./slices/userSlice";
import userReducer from './slices/userSlice'
import searchReducer from './slices/searchSlice'
// import postReducer from "./slices/postSlice";
// import requestReducer from "./slices/requestSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        search: searchReducer,
        // posts:postReducer,
        // requests:requestReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
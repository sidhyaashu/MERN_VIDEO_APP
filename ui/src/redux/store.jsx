import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx"

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})




//storage
    // -- user (store configStore)
        // --- currentUser,loading error
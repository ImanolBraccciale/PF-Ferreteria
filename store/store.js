import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        valores: Slice.reducer
    }
})

export default store 
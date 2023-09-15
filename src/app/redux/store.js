import { configureStore } from "@reduxjs/toolkit";
import Slice from "./features/slice";


export default configureStore ({
    reducer:{
        valores:Slice.reducer
    }
})
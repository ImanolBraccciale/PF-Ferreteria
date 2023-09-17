import { configureStore } from "@reduxjs/toolkit";
import Slice from "./features/sliceSuplier";


export default configureStore ({
    reducer:{
        valores:Slice.reducer
    }
})
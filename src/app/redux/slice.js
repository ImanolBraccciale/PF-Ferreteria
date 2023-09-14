import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "valores",
    initialState: {
        productos: "gabi, dani",
    },
    reducers: {
        getProduct: (state, action) => {
            state.productos = action.payload;
        },
    },
});

export const { getProduct } = slice.actions;

export default slice.reducer;

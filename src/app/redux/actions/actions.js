import { GET_BY_ID, GET_SUPPLIERS, POST_SUPPLIERS, GET_ALL_PRODUCTS, DELETE_DETAIL } from "./actionsTypes";
import axios from "axios";

export const getSuppliers = () => {
    return async (dispatch) => {
        try {
            const response = await axios('/api/suppliers')
            console.log('info desde el action ', response.data);
            return dispatch({
                type: GET_SUPPLIERS,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }

}

export const postSuppliers = (supplier) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('/api/suppliers', supplier)
            return dispatch({
                type: POST_SUPPLIERS,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export function getProductById(id) {
    return async dispatch => {
        const response = await axios(`/api/products?id=${id}`);
        dispatch({
            type: GET_BY_ID,
            payload: response.data,
        });
    };
}

export const detailDelete = () => {
    return {
        type: DELETE_DETAIL,
        payload: {}
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("/api/products");
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};


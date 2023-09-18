<<<<<<< HEAD
import { GET_BY_ID, GET_SUPPLIERS, POST_SUPPLIERS, GET_ALL_PRODUCTS, DELETE_DETAIL } from "./actionsTypes";
=======
import { GET_BY_ID, GET_SUPPLIERS, POST_SUPPLIERS, GET_ALL_PRODUCTS, ORDER_BY } from "./actionsTypes";
>>>>>>> 76df8a3eb0ad196030b1559a5697d9c97350998f
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

export const getProductById = (id) => {
    
    return async (dispatch) => {
        try {
            console.log('desde el action pero arriba');
            const {data} = await axios.get(`/api/products?id=${id}`)
            console.log('desde el action', data );
            return dispatch({
                type: GET_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const detailDelete = () =>{
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


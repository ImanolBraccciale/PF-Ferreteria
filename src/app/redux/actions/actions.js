import { GET_BY_ID, GET_SUPPLIERS, POST_SUPPLIERS, GET_ALL_PRODUCTS, DELETE_DETAIL, ORDER_BY, FILTER_BY_GROUP, GET_TAGS, GET_NAMES} from "./actionsTypes";
import axios from "axios";

export const getSuppliers = () => {
    return async (dispatch) => {
        try {
            const response = await axios('/api/suppliers')
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
            const { data } = await axios.get(`/api/products?id=${id}`)
            console.log('desde el action', data);
            return dispatch({
                type: GET_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
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

export const orderBy = (payload) => {
    return {
        type: ORDER_BY,
        payload,
    };
};

export const filterByProd = (payload) => {
    return {
        type: FILTER_BY_GROUP,
        payload,
    };
};

export const getTags = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/tag");
            return dispatch({
                type: GET_TAGS,
                payload: data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const getProductByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`api/products?name=${name}`
            );
            return dispatch({
                type: GET_NAMES,
                payload: data,
            });
        } catch (err) {
            return dispatch({
                type: GET_NAMES,
                payload: []
            })
        }
    };
};

import { GET_BY_ID, GET_SUPPLIERS, POST_SUPPLIERS, GET_ALL_PRODUCTS, DELETE_DETAIL, ORDER_BY, FILTER_BY_GROUP, GET_TAGS, GET_NAMES, POST_USERS, CREDENTIAL, GET_USER_BY_EMAIL, POST_TAG, FILTER_BY_SUPPLIERS, POST_PRODUCTS } from "./actionsTypes";
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
    console.log(supplier);
    return async (dispatch) => {
        try {
            const { data } = await axios.post('api/suppliers', supplier);
            return dispatch({
                type: POST_SUPPLIERS,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const postUsers = (user) => {
    return async (dispatch) => {
        try {
            console.log(user);
            const response = await axios.post('/api/user', user)
            return dispatch({
                type: POST_USERS,
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
            return dispatch({
                type: GET_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getUserByEmail = (emailUser) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/user?emailUser=${emailUser}`)
            return dispatch({
                type: GET_USER_BY_EMAIL,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const credential = (emailUser, passwordUser) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`/api/user?emailUser=${emailUser}&passwordUser=${passwordUser}`)
            console.log(data);
            return dispatch({
                type: CREDENTIAL,
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

export const postProducts = (product) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('/api/products', product);
            return dispatch({

                type: POST_PRODUCTS,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}


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

export const filterBySuppliers = (payload) => {
    return {
        type: FILTER_BY_SUPPLIERS,
        payload,
    };
};


export const getTags = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("/api/tag");
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

export const postTags = (tag) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('api/tag', tag);
            return dispatch({
                type: POST_TAG,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}
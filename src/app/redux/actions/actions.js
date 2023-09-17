import { GET_SUPPLIERS, POST_SUPPLIERS } from "./actionsTypes";
import axios from "axios";

export const getSuppliers = () => {
    return async (dispatch) => {
        try {
            const response = await axios('/api/suppliers')
            console.log('info desde el action ',response.data);
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
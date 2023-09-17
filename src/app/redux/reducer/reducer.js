import { GET_SUPPLIERS, POST_SUPPLIERS } from "../actions/actionsTypes"

const initialState = {
    allSuppliers: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIERS:
            console.log('estos son los proveedores: ',state.allSuppliers);
            return {
                ...state,
                allSuppliers: action.payload
            }

        case POST_SUPPLIERS:
            return {
                ...state,
                allSuppliers: [...state.allSuppliers, action.payload]
            }

        default:
            return state
    }
}

export default reducer
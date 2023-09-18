import { GET_SUPPLIERS, POST_SUPPLIERS, GET_BY_ID, GET_ALL_PRODUCTS, ORDER_BY} from "../actions/actionsTypes"

const initialState = {
    allSuppliers: [],
    productDetail: {},
    allProducts: [],
    products: [],

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIERS:
            console.log('estos son los proveedores: ', state.allSuppliers);
            return {
                ...state,
                allSuppliers: action.payload
            }

        case POST_SUPPLIERS:
            return {
                ...state,
                allSuppliers: [...state.allSuppliers, action.payload]
            }
        case GET_BY_ID:
            return {
                ...state,
                productDetail: action.payload
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                products: action.payload
            };

        default:
            return state
    }
}

export default reducer
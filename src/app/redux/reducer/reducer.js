<<<<<<< HEAD
import { GET_SUPPLIERS, POST_SUPPLIERS, GET_BY_ID, GET_ALL_PRODUCTS, DELETE_DETAIL } from "../actions/actionsTypes"
=======
import { GET_SUPPLIERS, POST_SUPPLIERS, GET_BY_ID, GET_ALL_PRODUCTS, DELETE_DETAIL, ORDER_BY, FILTER_BY_GROUP, GET_TAGS, GET_NAMES} from "../actions/actionsTypes"
>>>>>>> 9949d98c7eb97afc3ca6290f7a09a7d80d124dc3

const initialState = {
    allSuppliers: [],
    productDetail: [],
    allProducts: [],
    products: [],
    tags: [],

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
            console.log('este es el id del product: ', state.productDetail);
            return {
                ...state,
                productDetail: action.payload
            }
        case DELETE_DETAIL:
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
        case GET_NAMES: //para mi searchbar
            return {
                ...state,
                allProducts: action.payload
            };

        case ORDER_BY:
            let productCopy = [...state.allProducts]; //hago una copia de mi estado importante
            let ordenamiento

            switch (action.payload) {
                case 'All':
                    ordenamiento = [...state.allProducts];
                    break;
                case 'A-Z':
                    ordenamiento = productCopy.sort(function (a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        }
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1
                        }
                        return 0;
                    });
                    break;
                case 'Z-A':
                    ordenamiento = productCopy.sort(function (a, b) {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1;
                        }
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                        }
                        return 0;
                    })
                    break;
                case 'MenorPrecio':
                    ordenamiento = productCopy.sort(function (a, b) {
                        return a.price - b.price
                    })
                    break;
                case 'MayorPrecio':
                    ordenamiento = productCopy.sort(function (a, b) {
                        return b.price - a.price
                    })
                    break;

                default:
                    ordenamiento = productCopy
                    break;
            }
            return {
                ...state,
                allProducts: ordenamiento,
                products: ordenamiento
            };

        case FILTER_BY_GROUP:
            let aux = [];
            if (action.payload) {
                aux = state.products.filter(product => {
                    return product.TagId === action.payload;
                });
            } else {
                aux = state.products;
            }

            return {
                ...state,
                allProducts: aux,
            };


        case GET_TAGS:
            return {
                ...state,
                tags: action.payload,
            };


        default:
            return state
    }
}

export default reducer

import { GET_SUPPLIERS, POST_SUPPLIERS, GET_BY_ID, GET_ALL_PRODUCTS, DELETE_DETAIL, ORDER_BY, FILTER_BY_GROUP, GET_TAGS, GET_NAMES, POST_USERS, CREDENTIAL, GET_USER_BY_EMAIL } from "../actions/actionsTypes"

const initialState = {
    allProducts: [],
    products: [],
    allSuppliers: [],
    allUsers: [],
    etiquetas: [],
    productDetail: [],
    user: {},
    estado: false

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
        case POST_USERS:
            return {
                ...state,
                allUsers: [...state.allUsers, action.payload]
            }

        case CREDENTIAL:
            return {
                ...state,
                estado: action.payload
            }

        case GET_USER_BY_EMAIL:
            console.log(action.payload);
            return {
                ...state,
                user: action.payload
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
            const filteredProducts = action.payload === "all"? state.products : state.products.filter(product => {
                return product.group.includes(action.payload);
            });

            return {
                ...state,
                allProducts: filteredProducts,
            };


        case GET_TAGS:
            return {
                ...state,
                etiquetas: action.payload,
            };


        default:
            return state
    }
}

export default reducer

import { GET_SUPPLIERS, POST_SUPPLIERS, GET_BY_ID, GET_ALL_PRODUCTS, DELETE_DETAIL, ORDER_BY, FILTER_BY_GROUP, GET_TAGS, GET_NAMES, FILTER_BY_SUPPLIERS, POST_TAGS} from "../actions/actionsTypes"

const initialState = {
    allProducts: [],
    products: [],
    allSuppliers: [],
    suppliers: [],
    etiquetas:[],
    productDetail: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIERS:
            return {
                ...state,
                allSuppliers: action.payload,
                suppliers: action.payload
            }

        case POST_SUPPLIERS:
            return {
                ...state,
                allSuppliers: [...state.allSuppliers, action.payload],
                suppliers: [...state.suppliers, action.payload]
            }
        case GET_BY_ID:
            
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
        case GET_NAMES: 
            return {
                ...state,
                allProducts: action.payload
            };
        case ORDER_BY:
            let productCopy = [...state.allProducts];
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
                products: ordenamiento
            };

        case FILTER_BY_GROUP:
            let aux = [];
            let filtrado
            if(action.payload) {
                aux = state.allProducts
                filtrado = aux.filter(e => {
                    console.log("aaaa")
                    return e.rubro?.includes(action.payload)
                })
                console.log(filtrado);
            };
            return {
                ...state,
                products: filtrado

            }
            case FILTER_BY_SUPPLIERS:
            let aux1 = [];
            let filtradoSup
            if(action.payload) {
                aux1 = state.allSuppliers
                filtradoSup = aux1.filter(e => {
                    return e.supplier?.includes(action.payload)
                })
                console.log(filtradoSup);
            };
            return {
                ...state,
                allSuppliers: filtradoSup,
                suppliers: filtradoSup
            }
            
        case GET_TAGS:
            return {
                ...state,
                etiquetas: action.payload,
            };

        case POST_TAGS:
                return {
                    ...state,
                    etiquetas: [...state.etiquetas, action.payload],
                }    

        default:
            return state
    }
}

export default reducer

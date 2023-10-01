import {
  POST_PRODUCTS,
  GET_SUPPLIERS,
  POST_SUPPLIERS,
  GET_BY_ID,
  GET_ALL_PRODUCTS,
  DELETE_DETAIL,
  ORDER_BY,
  FILTER_BY_GROUP,
  GET_TAGS,
  GET_NAMES,
  FILTER_BY_SUPPLIERS,
  CREDENTIAL,
  USERCREDENTIALS,
  GET_USER_BY_EMAIL,
  POST_USERS,
  POST_TAG,
  POST_REVIEW,
  GET_REVIEW,
  GET_REVIEW_BY_ID,
  GET_RUBRO,
  GET_ALL_CART_ITEM_PRODUCTS,
} from "../actions/actionsTypes";

const initialState = {
  allProducts: [],
  products: [],
  allSuppliers: [],
  allUsers: [],
  etiquetas: [],
  productDetail: [],
  user: {},
  credential_user: {},
  estado: false,
  suppliers: [],
  rubro: [],
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUPPLIERS:
      return {
        ...state,
        allSuppliers: action.payload,
        suppliers: action.payload,
      };

    case POST_SUPPLIERS:
      return {
        ...state,
        allSuppliers: [...state.allSuppliers, action.payload],
        suppliers: [...state.suppliers, action.payload],
      };
    case POST_USERS:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    case CREDENTIAL:
      return {
        ...state,
        estado: action.payload,
      };

    case USERCREDENTIALS:
      return {
        ...state,
        credential_user: action.payload,
      };

    case GET_USER_BY_EMAIL:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        products: [...state.products, action.payload],
      };

    case GET_BY_ID:
      return {
        ...state,
        productDetail: action.payload,
      };
    case DELETE_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };
    case GET_NAMES:
      return {
        ...state,
        products: action.payload,
      };
    case POST_TAG:
      return {
        ...state,
        etiquetas: [...state.etiquetas, action.payload],
      };
    case ORDER_BY:
      let productCopy = [...state.products];
      let ordenamiento;

      switch (action.payload) {
        case "All":
          productCopy = [...state.allProducts];
          break;
        case "A-Z":
          ordenamiento = productCopy.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          break;
        case "Z-A":
          ordenamiento = productCopy.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return 1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            return 0;
          });
          break;
        case "MenorPrecio":
          ordenamiento = productCopy.sort(function (a, b) {
            return a.price - b.price;
          });
          break;
        case "MayorPrecio":
          ordenamiento = productCopy.sort(function (a, b) {
            return b.price - a.price;
          });
          break;

        default:
          ordenamiento = productCopy;
          break;
      }
      return {
        ...state,
        products: ordenamiento,
      };

    case FILTER_BY_GROUP:
      let aux = [];
      let filtrado;
      if (action.payload) {
        aux = state.products;
        filtrado = aux.filter((e) => {
          return e.group?.includes(action.payload);
        });
        console.log(filtrado);
      }
      return {
        ...state,
        products: filtrado,
      };
    case FILTER_BY_SUPPLIERS:
      let aux1 = [];
      let filtradoSup;
      if (action.payload) {
        aux1 = state.products;
        filtradoSup = aux1.filter((e) => {
          return e.supplierName?.includes(action.payload);
        });
        console.log(filtradoSup);
      }
      return {
        ...state,
        products: filtradoSup,
      };

    case GET_TAGS:
      return {
        ...state,
        etiquetas: action.payload,
      };
    case GET_RUBRO:
      return {
        ...state,
        rubro: action.payload,
      };

    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      console.log("newItem", newItem)

      var existItem = state.cartItems.find(function (elem) {
        return elem.Name === newItem.Name;
      });

      console.log("existItem", existItem)

      state.cartItems.map((item) =>
            console.log("item", item)
          )

      //una condicion para actualizar si existe el item o guardar si no existe
      const cartItems = existItem
        ? state.cartItems.map((item) =>
            item.Name === existItem.Name ? newItem : item
          )
        : //de lo contrario si no existe entonces guardamos el primero
          [...state.cartItems, newItem];

      return { ...state, cartItems: { ...state.cartItems, cartItems } };
    }

    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "GET_ALL_CART_ITEM_PRODUCTS":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

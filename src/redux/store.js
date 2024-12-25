//import @reduxjs/toolkit comonent
import { configureStore } from "@reduxjs/toolkit";

//import all reducer
import { productReducer } from "./reducers/productReducer";
import { authReducer } from "./reducers/authReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";

// configuringstore and export as well
export const store = configureStore({
    reducer: {
        productReducer,
        authReducer,
        cartReducer,
        orderReducer
    }
});
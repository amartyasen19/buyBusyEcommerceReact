//import @reactjs/toolkit component
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 

// import action from cartrreducer
import { setCart } from "./cartReducer";

// import firebase 
import { db } from "../../firebaseinit";

//import firebase action
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

// import react-tostify
import { toast } from 'react-toastify';

// initial state
const INITIAL_STATE = {
    orders: []
}

//purchase
export const purchase = createAsyncThunk("orders/purchase",
    async ({carts, orders}, thunkAPI) => {
        //setting date for order
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const date = currentDate.getDate();

        const orderDate = `${date.toString()}/${month.toString()}/${year.toString()}`;

        //make order in object
        const newOrder = { date: orderDate, order: carts };
        //set order in order array
        thunkAPI.dispatch(checkOut(newOrder));
        toast.success("Item Purchased");

        //set updated order to database also
        const updatedOrders = [...orders, newOrder];
        const users = collection(db, "users");
        const querySnapshot = await getDocs(users);
        querySnapshot.forEach(async (user) => {
            const userId = user.id;
            const useRef = doc(db, "users", userId);
            await updateDoc(useRef, {
                orders: updatedOrders,
                carts: []
            });
        })

        //set cart empty after order purchased
        thunkAPI.dispatch(setCart([]));
    }
)
// Reducer
const orderSlice = createSlice({
    name: "orders",
    initialState: INITIAL_STATE,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        checkOut: (state, action) => {
            state.orders.push(action.payload);
        }
    }
})
//export reducer
export const orderReducer = orderSlice.reducer;
//export actions
export const { checkOut, setOrders } = orderSlice.actions;
//export selector(states)
export const orderSelector = (state) => state.orderReducer;
//pages
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Cart from './Components/Cart/cart';
import Order from "./Components/order/order";

//imort style
import styles from "./App.module.css";

import { store } from "./redux/store"

// router
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

//custom context
import { UserContextProvider } from "./userContext";

// import helmate app
import { Helmet } from 'react-helmet';

// import provider from react-reduc
import { Provider } from "react-redux";

// import auth from authcontestprovider
import { AuthContextProvider } from "./redux/provider/authContestProvider";

function App() {
  //routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UserContextProvider>
          <Navbar />
          <Home />
        </UserContextProvider>
      )
    },
    {
      path: "/login",
      element: (
        <UserContextProvider>
          <Navbar />
          <Login />
        </UserContextProvider>
      )
    },
    {
      path: "/signup",
      element: (
        <UserContextProvider>
          <Navbar />
          <SignUp />
        </UserContextProvider>
      )
    },
    {
      path: "/cart",
      element: (
        <AuthContextProvider>
          <UserContextProvider>
            <Navbar />
            <Cart />
          </UserContextProvider>
        </AuthContextProvider>
      )
    },
    {
      path: "/orders",
      element: (
        <AuthContextProvider>
          <UserContextProvider>
            <Navbar />
            <Order />
          </UserContextProvider>
        </AuthContextProvider>

      )
    }

  ])
  return (
    <Provider store={store}>
      <div className={styles.main}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Busy Buy</title>
          <meta name="description" content="Busy buy is an e-commerce website where we purchase any items." />
        </Helmet>

        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;

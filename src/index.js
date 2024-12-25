import React from 'react';
import ReactDOM from 'react-dom/client';
// import index style
import './index.css';
// import app component
import App from './App';
// import tostcontainer
import { ToastContainer} from 'react-toastify';
//import tostify style
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ToastContainer/>
    <App />
  </React.Fragment>
);

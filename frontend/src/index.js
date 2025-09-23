import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
}from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      {/* Add more routes as needed */}
      {/* <Route path="/cart" element={<CartScreen />} /> */}
      {/* <Route path="/signin" element={<SignInScreen />} /> */}
      {/* <Route path="/register" element={<RegisterScreen />} /> */}
      {/* <Route path="/shipping" element={<ShippingScreen />} /> */}
      {/* <Route path="/payment" element={<PaymentScreen />} /> */}
      {/* <Route path="/place-order" element={<PlaceOrderScreen />} /> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/features/store.jsx';
import Cart from './components/Cart.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import Checkout from './redux/features/checkout.jsx';
import ProductList from './components/ProductList.jsx';
import Error from './components/ErrorComponent.jsx';
import { lazy } from 'react';
import Checkout from './redux/features/checkout.jsx';
const ProductDetail=lazy(()=>import("./components/ProductDetail.jsx"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<ProductList/>
      },
      {
        path: "/productdetail",
        element: <ProductList/>
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"checkout",
        element:<Checkout/>
      }
    
    ],
    errorElement:<Error/>
  },
 ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

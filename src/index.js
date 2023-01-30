import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import Aboutus from './Aboutus';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import TestHeader from './TestHeader';
import Hometest from './Hometest';
import LoginPage from './Page/LoginPage';
import Registration from './Page/Registration';


import { Provider } from 'react-redux'
import store from './store'
import UserEntryPage from './Page/UserEntryPage';

const router = createBrowserRouter([
  {
    path:'',
    element:<Header/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        element:<HomePage/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'aboutus',
        element:<Aboutus/>,
        errorElement:<ErrorPage/>,
      },
      
      {
        path:'login',
        element:<LoginPage/>,
        errorElement:<ErrorPage/>,
      },
      
      {
        path:'signup',
        element:<Registration/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'userentrypage',
        element:<UserEntryPage/>,
        errorElement:<ErrorPage/>
      }

    ]
  },
  {
    path:"test",
    element:<TestHeader/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'hometest',
        element:<Hometest/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

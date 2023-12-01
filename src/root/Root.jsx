import React from 'react'
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from '../layouts/mainLayout/MainLayout';
import Error from '../layouts/error/Error';
import PrivateRoute from './../privateRoute/PrivateRoute';
import Login from './../layouts/login/Login';
import Register from './../layouts/login/Register';
import AddFood from './../layouts/addFood/AddFood';
import useFeatureData from '../hooks/useFeatureData';
import Home from '../layouts/home/Home';
import AvailableFood from '../layouts/availableFood/AvailableFood';
import FooDetails from './../layouts/fooDetails/FooDetails';
import ManageMyFood from './../layouts/manageMyFood/ManageMyFood';
import FoodUpdate from './../layouts/foodUpdate/FoodUpdate';
import ManageSingleFood from '../layouts/manageSingleFood/ManageSingleFood';
import MyFoodRequest from '../layouts/myFoodRequest/MyFoodRequest';


  
  const Root = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement : <Error/>,
      children:[
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/availablefood",
          element:<AvailableFood/>
        },
        {
          path:"/managemyfood",
          element:<PrivateRoute><ManageMyFood/></PrivateRoute>
        },
        {
          path:"/myfoodrequest",
          element:<PrivateRoute><MyFoodRequest/></PrivateRoute>
        },
        {
          path: "/foodetails/:foodId",
          element:<PrivateRoute><FooDetails/></PrivateRoute>,
          loader: ({ params }) => {
            console.log(params);
            return fetch(`https://foodonation.vercel.app/foodetails/${params.foodId}`);
          },
    
        },
        {
          path: "/singlefoodetails/:foodId",
          element:<PrivateRoute><ManageSingleFood/></PrivateRoute>,
          
    
        },
        {
          path: "/foodupdate/:foodId",
          element:<PrivateRoute><FoodUpdate/></PrivateRoute>,
          loader: ({ params }) => {
            console.log(params);
            return fetch(`https://foodonation.vercel.app/foodetails/${params.foodId}`);
          },
    
        },
        {
          path:"/addfood",
          element:<PrivateRoute><AddFood/></PrivateRoute>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signUp",
          element:<Register/>
        }]
    }
  ]);

export default Root

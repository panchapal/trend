import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../ShareModule/Header/Header.jsx';
import Footer from '../ShareModule/Footer/Footer.jsx';
import Loader from '../Loader/Loader.jsx';
import { lazy,Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { check_token } from '../Redux/authSlice.js';
const Home=lazy(()=>import("../Components/Home/Home.jsx"));
const About = lazy(()=> import("../Components/About/About.jsx"));
const Women = lazy(()=> import ("../Components/Women/Women.jsx"));
const Store = lazy(()=> import("../Components/Store/Store.jsx"))
const Contact = lazy(()=>import("../Components/Contact/Contact.jsx"))
const Register=lazy(()=> import("../Components/Register/Register.jsx"))
const Login =lazy(()=> import("../Components/Login/Login.jsx"))
const CreateProduct =lazy(()=> import("../Curd/CreateProduct/CreateProduct.jsx"))
const ShowProduct = lazy(()=> import("../Curd/ShowProduct/ShowProduct.jsx"))
const EditProduct = lazy(()=> import("../Curd/EditProduct/EditProduct.jsx"))
const UserDetails =lazy(()=> import("../Components/UserDetails/UserDetails.jsx"))
export default function Rout(){
    const dispatch=useDispatch();

    const PublicRouteNames=[
        {
            path:"/register",
            Component:<Register/>
        },
        {
            path:"/login",
            Component:<Login/>
        }
    ];

    const PrivateRouteNames=[
        {
            path:"/",
            Component:<Home/>
        },
        {
            path:"/about",
            Component:<About/>
        },
        {
            path:"/women",
            Component:<Women/>
        },
        {
            path:"/store",
            Component:<Store/>
        },
        {
            path:"/contact",
            Component:<Contact/>
        },
        
        { path: '/createproduct', Component: <CreateProduct /> },
        { path: '/showProduct', Component: <ShowProduct /> },
        {path:'/edit/:id' ,Component:<EditProduct/>},
        {path:'userdetails', Component:<UserDetails/>},
        
    ];
    useEffect(()=>{
        dispatch(check_token()) 
     },[dispatch])
     
    function PrivateRoute({children}){
        const token = localStorage.getItem("token")|| sessionStorage.getItem("token");

        return token !== null && token!== undefined?(
            children
        ):(
            <Navigate to="/login"/>
        )
    }
    return(
        <>
        <Suspense fallback={<Loader/>}>
        <Router>
            <Header/>
            <Routes>
      { PublicRouteNames?.map((route,index)=>{
        return(
            <Route key={index+1}
            exact path = {route.path} element={route.Component}>
            </Route>
        )
      }) }

      { PrivateRouteNames?.map((route,index)=>{
        return(
            <Route key={index+2}
            path = {route.path} 
            element={<PrivateRoute>{route.Component}</PrivateRoute>
            }
            />
        )
      }) }
            </Routes>
            <Footer/>
        </Router>
        </Suspense>
        </>
    )

}

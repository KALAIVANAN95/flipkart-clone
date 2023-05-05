import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import './App.css';
import Navbar from './components/Navbar/Navbar';

import supabase from './supabase';
import { useDispatch } from 'react-redux';
import { setUser } from './slices/userSlice';

function App() {

 const dispatch = useDispatch()



  //ref aaanaalum data clear aahama iruku supabase kodukura function

  const getUser = async () =>{
    const {data,error}=await supabase.auth.getSession()
   // console.log(data.session.user);
   if(data.session){
    dispatch(setUser(data.session.user))
   }
   
  }

  useEffect(()=>{
    getUser()
  },[])
  return (
   <>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />  
    <Route path='/products' element={<Products/>} />
    <Route path='/productdetails/:id' element={<ProductDetails/>}/>
    <Route path='/cart' element={<Cart/>} />

   </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;

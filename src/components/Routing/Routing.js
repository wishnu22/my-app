import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'

import Help from '../Help/Help'
import Hero from '../Hero/Hero'
import Login from '../Login/Login'
import Search from '../Search/Search'
import Sidebar from '../Sidebar/Sidebar'

function Routing() {
  return (
    <div>
           <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            <Route path="/help" element={<Help />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/menu" element={<Sidebar/>} />
            </Routes>
 </div>
  )
}

export default Routing
import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import AddUser from './Pages/AddUser'
import EditUser from './Pages/EditUser'
import SingleUser from './Pages/SingleUser'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
      <div className='reason'>
         <BrowserRouter>
            <div className='right'><Navbar/></div>
            <div className='disturb'>
               <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/add/user' element={<AddUser/>}/>
               <Route path='/edit/:id' element={<EditUser/>}/>
               <Route path='/user/:id' element={<SingleUser/>}/>
            </Routes>
            </div>
         </BrowserRouter>   
      </div>
  )
}

export default App
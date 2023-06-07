import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Styles/Singleuser.css'
const SingleUser = () => {
  const {id} = useParams()
  const [user, setUser] =useState({
    firstName: " ",
    lastName: " ",
    email:  " ",
    gender: " ",
    profile: " ",
    phoneNumber:" "

  })

  const {firstName, lastName, email,gender, profile,phoneNumber} = user

  useEffect(()=>{
     loadUser()
  }, [])
  const loadUser=async()=>{
    const res = await axios.get(`http://localhost:3005/users/${id}`)
    setUser(res.data)

  }
  return (
    <div className='packaging'>
         <div className='subordinate'>
         <h3>First Name:</h3>
         <h3>Last Name:</h3>
         <h3>Email:</h3>
         <h3>Gender:</h3>
         <h3>Profile:</h3>
         <h3>Phone Number:</h3>
         </div>
         <div className='last'>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{email}</h3>
        <h3>{gender}</h3>
        <h3>{profile}</h3>
        <h3>{phoneNumber}</h3>
         </div>
    </div>
  )
}

export default SingleUser
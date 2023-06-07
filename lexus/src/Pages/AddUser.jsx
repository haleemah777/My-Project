import React, {useState} from 'react'
import '../styles/AddUser.css'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const AddUser = () => {
  let {id}=useParams()
  let navigate = useNavigate()
  const [user, setUser] =useState({
    
    firstName: " ",
    lastName:  " ",
    email: " ",
    gender: " " ,
    phoneNumber:" "
  })

  const [error, setError] = useState(false)

  const {firstName, lastName, email,gender,phoneNumber} = user
  const handleInput=(e)=>{
       setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
     if(firstName.trim().length===0 || lastName.trim().length===0 || email.trim().length===0 || gender.trim().length===0  || phoneNumber.trim().length===0 ){
      setError(true)
     }else{
      setError(false)
      await axios.post("http://localhost:3005/users", user)
      navigate("/")
     }  
  }

  return (
    <div className='add-users'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={firstName} onChange={handleInput}/>
            {error && firstName.trim().length===0 ? 
              <label>First name can not be empty</label>
              :
              " "
            }
           
            <input type="text" name="lastName" value={lastName} onChange={handleInput}/>
               {error && lastName.trim().length===0 ?
                <label>Last name can  not be empty</label>
                :
                " "
              }
           
            <input type="email" name="email" value={email} onChange={handleInput}/>
               {error && email.trim().length===0 ? 
                <label>Email can not be empty</label>
                :
                " "
              }

<input type="gender" name="gender" value={gender} onChange={handleInput}/>
               {error && gender.trim().length===0 ? 
                <label>Gender can not be empty</label>
                :
                " "
              }

            <input type="number" name="phoneNumber" value={phoneNumber} onChange={handleInput}/>
               {error && phoneNumber.trim().length===0 ? 
                <label>phoneNumber can not be empty</label>
                :
                " "
              }
           
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUser
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import  {Link} from  'react-router-dom'
import { useParams } from 'react-router-dom'
import '../styles/Home.css'
import { AiFillEye } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

const Home = () => {
  let {id} = useParams()
  const [users, setUsers]  = useState([])
  
  useEffect(()=>{
    loadUser()
  }, [])
  
  const loadUser =async()=>{
    const result =  await axios.get("http://localhost:3005/users")
    setUsers(result.data)
  }

  const deleteUser=async(id)=>{
     await axios.delete(`http://localhost:3005/users/${id}`)
     loadUser()
  }

   
  const output = users.map((user)=>{
    return(
     <tr className='row-body' key={user.id}> 
         
         <td>{user.firstName}</td>
         <td>{user.lastName}</td>
         <td>{user.gender}</td>
         <Link to= {`/user/${user.id}`}><td className='view'><AiFillEye/></td></Link>
         <Link  to={`/edit/${user.id}`}><td className='edit'><AiFillEdit/></td></Link>
         <td className='delete' onClick={(id)=>deleteUser(user.id)}><AiFillDelete/></td>
         </tr>
    )
   })
     
  return (
    <div className='home-content'>
      <div className='greeting'>
        Welcome on board  Halimat Adelanwa-Adeosun!
      </div>
      
      <div className='Total'>Total Users:{users.length}</div>
        <table>
           <thead className='thead'>
              <tr className='row-head'>
              
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Gender</th>
                 <th>View</th>
                 <th>Edit</th>
                 <th>Delete </th>
              </tr>
           </thead>
           <tbody>
             {output}
           </tbody>
        </table>
    </div>
  )
}

export default Home
import React, {useState, useEffect, useContext} from 'react'
import axios from "axios"
import { store } from '../App';
import { Link, Navigate } from 'react-router-dom';

const Myprofile = () => {
    const [token, setToken] = useContext(store);
    const [userdata, setUserdata]= useState(null);

    const userlogout = ()=>{
        setToken(null);
    }

    useEffect(()=> {
        axios.get("http://localhost:5000/myprofile", {
          headers : {
            "x-token" : token
          }
        }).then(res => setUserdata(res.data)).catch(err => console.log(err))
      },[])

    if(!token){
        return <Navigate to="/login"/>
    }

  return (
    <div>
        <div style={{textAlign:"right", marginRight:"15px"}}>
        <h1><Link to="/getuserdetails" className='btn btn-info' style={{marginTop:"80px"}}>Users List</Link></h1>
        </div>
        
        {userdata && 
        <div>
            <div className="card" style={{width: "22rem", padding:"5px"}}>
                <img style={{width:"100%", height:"300px"}} src="https://www.w3schools.com/howto/img_avatar.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{textTransform:"capitalize", fontSize:"20px", fontWeight:"bolder"}}>user : <span style={{color:"red"}}>{userdata.username}</span></h5>

                    <h5 className="card-text" style={{fontSize:"20px", fontWeight:"bolder"}}>Email : <span style={{color:"red"}}>{userdata.email}</span></h5>

                    <h5 className="card-text" style={{fontSize:"20px",  fontWeight:"bolder"}}>Password : <span style={{color:"red"}}>{userdata.password}</span></h5>

                    <button style = {{marginLeft:"50px"}} className='btn btn-danger' onClick={()=>userlogout()}>Logout</button>

                </div>
            </div>
        </div>
        }
    </div>
    
  )
}

export default Myprofile
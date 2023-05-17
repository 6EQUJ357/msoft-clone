import React, {useContext, useState} from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import { store } from '../App'
import { Link, Navigate } from 'react-router-dom'


const Login = () => {

  const [token, setToken] = useContext(store);


  const formik = useFormik({
    initialValues:{
      email : "", 
      password : "",
    },
    validationSchema:  Yup.object({
      email : Yup.string().email("valid email").required("email required"),
      password : Yup.string().required("password required"),
      
    }),
    onSubmit:(values)=> { 
      axios.post("http://localhost:5000/userlogin", values).then((res)=>{
        setToken(res.data.token);
 
          // console.log(xcv)
        // setToken(xcv)
      }).catch(err =>console.log(err))         
      
    }
  })

  
  if(token) {
    return  <Navigate to="/" />
    
  }

  return ( 
    <div className='form_handles' style={{position:"relative", zIndex:"10"}}>
      
      <div className='form_child_login'>
        <div>
          <h1 className='form_login_h'>LOGIN</h1>
        </div>

        <div className='form_child_form'>
          <form onSubmit={formik.handleSubmit} autoComplete = "off"> 


            <input className='inpp' type='email'name='email' value={formik.values.email} placeholder='Email' onChange={formik.handleChange}/>
            {formik.errors.email ? <small style={{color:"red", fontWeight:"bolder" , fontSize:"15px"}}>{formik.errors.email}</small>:null}
            <br />

            <input className='inpp' type='password'name='password' value={formik.values.password} placeholder='Password' onChange={formik.handleChange}/>
            {formik.errors.password ? <small style={{color:"red", fontWeight:"bolder", fontSize:"15px"}}>{formik.errors.password}</small>:null}
      
            <br /><br />
            <input type='submit' value="Login" className='btn btn-primary active'/>
            <br />
          <Link to="/createaccount" style={{textDecoration:"none", color:"aquamarine",marginLeft:"80px"}}><i class="fa-solid fa-arrow-right" style={{color:"aqua"}}></i> Create Account</Link>               
          &emsp; &emsp; <Link to="/" style={{textDecoration:"none", color:"aquamarine"}}>Home</Link>

          <br />
          </form> 

        </div>
      </div>
     
      
    </div>
  )
}

export default Login
import React from 'react'
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Link } from 'react-router-dom'

const Create_account = () => {

  const formik = useFormik({
    initialValues:{
      username : "",
      email : "", 
      password : "",
      conform_password : ""
    },
    validationSchema:  Yup.object({
      username : Yup.string().required("name required"),
      email : Yup.string().email("valid email").required("email required"),
      password : Yup.string().required("password required"),
      conform_password : Yup.string().required("password required").oneOf([Yup.ref("password"),null], "password must match")
      
    }),
    onSubmit:(values)=> {
      axios.post("http://localhost:5000/createuserdetails",values).then(res =>alert(res.data)).catch(err=>console.log(err))
      
      
    }
  })
  return (
    <div className='form_handle' style={{position:"relative", zIndex:"10"}}>
      
      <div className='form_child'>
        <div>
          <h1 className='form_child_h'>create account</h1>
        </div>

        <div className='form_child_form'>
          <form onSubmit={formik.handleSubmit} autoComplete='off'>
            <input className='inp' type='text'name='username' value={formik.values.username} placeholder='Name' onChange={formik.handleChange}/>
            {formik.errors.username ? <small style={{color:"red", fontWeight:"bolder", fontSize:"15px"}}>{formik.errors.username}</small>:null}
            <br />

            <input className='inp' type='email'name='email' value={formik.values.email} placeholder='Email' onChange={formik.handleChange}/>
            {formik.errors.email ? <small style={{color:"red", fontWeight:"bolder" , fontSize:"15px"}}>{formik.errors.email}</small>:null}
            <br />

            <input className='inp' type='password'name='password' value={formik.values.password} placeholder='Password' onChange={formik.handleChange}/>
            {formik.errors.password ? <small style={{color:"red", fontWeight:"bolder", fontSize:"15px"}}>{formik.errors.password}</small>:null}
            <br />

            <input className='inp' type='password'name='conform_password' value={formik.values.conform_password} placeholder='Conform Password' onChange={formik.handleChange}/>
            
            {formik.errors.conform_password ? <small style={{color:"red", fontWeight:"bolder", fontSize:"15px"}}>{formik.errors.conform_password}</small>:null}
            <br /><br />
            <input type='submit' value="Register" className='btn btn-primary'/>
            <br />
            <Link to="/login" style={{textDecoration:"none", color:"aquamarine", marginLeft:"80px"}}>Login</Link> &emsp;&emsp;&emsp;
            <Link to="/" style={{textDecoration:"none", color:"aquamarine"}}>Home</Link>

          </form>

        </div>
      </div>
     
      
    </div>
  )
}

export default Create_account 
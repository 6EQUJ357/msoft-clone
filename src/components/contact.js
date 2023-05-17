import React, {useState, useContext, useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"
import "../App.css";
import Footer from './footer';
import { store } from '../App';
import { Navigate } from 'react-router-dom'
import axios from "axios"
import emailjs from "@emailjs/browser"



const Contact = () => {
  const [token, setToken] = useContext(store)


  const [data, setData] = useState(null);

  

  const formik = useFormik({
    initialValues:{
      name : "",
      email : "",
      ph_number : "",
      message : ""
    },
    validationSchema : Yup.object({
      name : Yup.string().required("Name Required"),
      email : Yup.string().email("invalid email").required("Email Required"),
      ph_number : Yup.number().required("Mobile number Required").min(10),
      message : Yup.string()
    }),
    onSubmit:()=> {
      emailjs.sendForm('service_6Equj5', 'template_qg1n5wn', "#form", 'f2Ixqtw375bzdyfv8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("your message was received...\n thank you for supporting us...");
    }, 
  //   validate:(values)=> {
  //       let errors = {};
  //       if(!values.name) {
  //         errors.name = "";
  //       }
  //       if(!values.email) {
  //         errors.email = "";
  //       }
  //       return errors;
  //   }
   })

   useEffect(()=> {
    axios.get("http://localhost:5000/contact", {
      headers : {
        "x-token" : token
      }
    }).then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  if(!token) {
    return <Navigate to ="/login" />
  }

  return (
    <div className='restaurant_contact_box' style={{position:"absolute", top:"70px"}}>

      <div className='contact_container'>
        <div className='contact'>
          <h1 className='contact_h'>contact us</h1>
          <hr className='contact_hr'/>
          <p className='contact_p'>we love hearing from you! Here are some simple ways to get in touch with us...</p>
        </div>

      </div>

      <div style={{"height":"400px", "padding":"30px", "margin":"30px", "marginLeft":"130px"}}>

        <div className='restaurant_contact_orange'>
          
          <div className='restaurant_contact_address'>
            <i class="fa-solid fa-location-dot fontawesome symbol"></i>
            <span className='qw'>Address</span><br/><span className='qw2'>Msoft WebTechnologies</span><br/><span className='qw3'>801,Manjeera Majestic,<br />KPHB,Hyderabad.</span>
          </div>
          <br/>
          <div className='restaurant_contact_call'>
            <i class="fa-solid fa-phone fontawesome symbol"></i>
            <span className='cal'>Call Us</span><br/><span className='cal2'>(+91) 9618 624 866</span>
          </div>
          
          <div className='restaurant_contact_email'>
            <i class="fa-solid fa-envelope fontawesome symbol"></i>
            <span className='em'>Email</span><br/><span className='em2'>info@msoftwebtechnologies.com</span>
          </div>

        </div>

        <div className='restaurant_contact_orange black'>
            <p className='timing'>Work Hours</p>
            <p className='timings'>Monday &emsp;&emsp;&nbsp;&nbsp;: 9am-6pm</p>
            <p className='timings'>Tuesday &emsp;&emsp;&nbsp;: 9am-6pm</p>
            <p className='timings'>Wednesday &emsp;: 9am-6pm</p>
            <p className='timings'>Thursday &emsp;&emsp;: 9am-6pm</p>
            <p className='timings'>Friday &emsp;&emsp;&emsp;&nbsp;: 9am-6pm</p>
            <p className='timings'>Saturday &emsp;&emsp;: 9am-6pm</p>
            <p className='timings'>Sunday &emsp;&emsp;&emsp;: closed</p>
        </div>
      </div>

      <div className='touch'>
        <h1>get in touch</h1>
        <div className='touch_pa'><p>Give us a call or drop your requirement by anytime, we will contact you.</p></div>

        <form className='forms' onSubmit={formik.handleSubmit} id='form'>
          <input className='input_name' type="text" name='name' placeholder='Name' value={formik.values.name} onChange = {formik.handleChange}/><br/>
          {formik.errors.name?<small style={{color:"red", fontWeigh:"bolder", marginLeft:"-220px", fontSize:"15px", textShadow:"2px 2px 3px black"}}>{formik.errors.name}</small>:null}

          <br/><br/>
          <input className='input_email' type="email" name='email' placeholder='Email address' value={formik.values.email} onChange = {formik.handleChange}/><br/>
          {formik.errors.email?<small style={{color:"red", fontWeigh:"bolder", marginLeft:"-220px", fontSize:"15px", textShadow:"2px 2px 3px black"}}>{formik.errors.email}</small>:null}

          <br/><br/>

          <input className='input_email' type="tel" name='ph_number' placeholder='Mobile Number' value={formik.values.ph_number} onChange = {formik.handleChange}/><br/>
          {formik.errors.ph_number?<small style={{color:"red", fontWeigh:"bolder", marginLeft:"-150px", fontSize:"15px", textShadow:"2px 2px 3px black"}}>{formik.errors.ph_number}</small>:null}

          <br/><br/>
          <textarea placeholder='Message' className='input_messaga' name='message' value={formik.values.message} onChange={formik.handleChange}></textarea>
          <br />
          <input className='input_submit' type = "submit" value = "submit"/>
        </form>
        
      </div>


      <Footer/>

    </div>
    
  )
}

export default Contact














     

import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import {useFormik} from "formik"
import * as Yup from "yup"
import emailjs from "@emailjs/browser"
import { store } from '../App'

const Footer = () => {
    const [token, setToken] = useContext(store);

    const setTokens =()=>{
        setToken(null)
        alert("are you sure your logout...");
    }

    const formik = useFormik({
        initialValues:{
            email :""
        },
        validationSchema:Yup.object({
            email: Yup.string().email("invalid email").required("email required")
        }),

        onSubmit:(values)=>{
            emailjs.sendForm('service_6Equj5', 'template_ap5qkmr', "#subscribeform", 'f2Ixqtw375bzdyfv8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert("thank you for subscribe...");
        }
                    
         
    })
  return (
    <div>
        <div className='footer_container'>
            <div className='footer1'>

                <h1 className='footer_head'>About us</h1>
                <p>Msoft Web Technologies is an Organization,We are into developing,designing websites,digital marketing and developing mobile apps. we are very passionate about this industry and always ready to implement new technology trends.we provide Excellent services to our clients and their bussiness requirements according to Global Standards...<span ><Link className='footer_Link' to ="/aboutus" >more info</Link></span></p>
            </div>

            <div className='footer2'>

                <address style={{marginTop:"30px"}}>
                Our Contacts <br/>
                Msoft WebTechnologies, <br/>
                801,Manjeera Majestic, <br/>
                KPHB, <br/>
                Hyderabad,Telangana. <br/>
                <span style={{cursor:"pointer", color:"blue"}}>+91 9618 624 866</span> <br/>
                <span style={{cursor:"pointer",  color:"blue"}}>info@msoftwebtechnologies.com </span><br/>
                </address>
                <Link to="/" style={{textDecoration:"none", color:"aquamarine"}}>Home</Link>
                <button style={{border:"none", color:"aquamarine", backgroundColor:"transparent", display:"block", marginLeft:"180px"}} onClick={()=> setTokens()}>Logout</button>


            </div>
            <div className='footer3'>
                <h1 className='footer3_h1'>News letter</h1>
                <p>Subscribe to our newsletter and stay up to date with the latest news and deals!</p>

                <form id = "subscribeform" onSubmit={formik.handleSubmit} className='form'>
                    <input  type='email' placeholder='mail@gmail.com' name='email' value={formik.values.email} onChange={formik.handleChange}/>
                    <input type='submit' value="Subscribe"/><br/>
                    {formik.errors.email ? <small style={{color:"red"}}>{formik.errors.email}</small>: null}
                </form>
            </div>

        </div>

        <div style={{display:"flex", backgroundColor:"lime", padding:"10px"}}>
            <div style={{width:"30%", fontWeight:"bolder"}}>
           <span> ALL Rights Reserved. </span>| <Link to ="/termsofservice" style={{textDecoration:"none"}}>Terms of Service</Link>
            </div>

            <div style={{width:"40%", display:"flex", fontWeight:"bolder", fontSize:"30px", justifyContent:"center"}}>

                <div className='icon' ><a href="#"><i class="fa-brands fa-facebook"></i></a></div>
                <div  className='icon'><a href="#"><i class="fa-brands fa-google"></i></a></div>
                <div  className='icon'> <a href="#"><i class="fa-brands fa-whatsapp"></i></a></div>
           
            </div>

            <div style={{width:"30%", fontWeight:"bolder"}}>Powered by: <a href='https://msoftwebtechnologies.com' style={{textDecoration:"none"}}>msoftwebtechnologies.com</a></div>
        </div>
    </div>
  )
}

export default Footer
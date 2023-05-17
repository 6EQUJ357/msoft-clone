import React, {useState, useContext, useEffect} from 'react'
import Footer from './footer'
import "../App.css"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from "axios"
import { store } from '../App'


const AboutUs = () => {

const [token, setToken] = useContext(store)

  const [data, setData] = useState(null);

  useEffect(()=> {
    axios.get("http://localhost:5000/aboutus", { 
      headers : {
        "x-token" : token
      }
    }).then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  if(!token) {
    return <Navigate to ="/login" />
  }
  return (
    <div style={{position:"absolute", top:"70px"}}>
      <center>
      <img src='https://msoftwebtechnologies.com/assets/images/about_us.png' alt='not displayed' style={{width:"95%", height:"350px", margin:"10px"}}/>

      </center>

      <div className='about_container'>
        <div className='content' style={{position:"absolute", top:"70px"}}>
          <h1 className='about_h1'>OUR STORY</h1>
          <p className='about_p1'>Msoft Web Technologies is an Organization,We are into developing,designing Websites,Digital Marketing and Developing Mobile Apps. we are very passionate about this industry and always ready to implement new technology trends.We provide Excellent services to our clients and their business requirements according to Global Standards.</p>

          <p className='about_p2'>Our Founder and CEO has 15+ years of experience in various Business.He started this company with a mission and vision . He believes in quality and client statisfaction.Msoft has a strong technical and Creative team who develop projects and deliver all web applications and mobile apps to clients in short duration.</p>
        </div>

       
          <img className='about_imgg' src='https://msoftwebtechnologies.com/assets/images/ceo.jpg' alt='not displayed' />
        

        <div>
            <Link to = "/services" className='btn btn-warning bbt'>Services</Link>
            <Link to ="/" className='btn btn-danger bbt'>Home</Link>
        </div>
      </div>

      <Footer/>
    </div>
    
  )
}

export default AboutUs
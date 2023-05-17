import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer'
import { store } from '../../App'
import { Navigate } from 'react-router-dom'


const Mobile_application = () => {

  const [token, setToken] = useContext(store);

  if(!token) {
    return <Navigate to ="/login" />
  }
  return (
    <div style={{position:"absolute", marginTop:"70px"}}>
      <img className = "ser_web_img1" src='https://msoftwebtechnologies.com/services/assets/images/mapp.png' alt='not displayed...'/>

      <h2 style={{color:"red", marginLeft:"30px"}}>Mobile APP Development</h2>

      <div style={{display:"flex"}}>
        <div style={{width:"50%", padding:"20px", fontWeight:"bolder"}}>
          <p >In the current years mobile phone clients have expanded . The majority of the hunts are currently done on versatile. Also, to catch everyone's eye and to get business you ought to have a versatile application. In that way you are coming to the majority and your items are more discussed now. Without a versatile application your business may stay unnoticed and subsequently will influence your business. Msoft Webtechnologies offers propelled benefits in the field of portable application improvement crosswise over different stage. We consider three key attributes that is whenever access, personalization and relevant utilize offered by versatile stage. We can develop best mobile application for your bussiness as your requirements.</p>

          <p style={{fontWeight:"bolder"}}><i class="fa-solid fa-check" style={{color:"red"}}></i>&emsp;Android App developments</p>
        </div>

        <div style={{width:"50%", display:"flex", alignItems:"center", flexDirection:"column"}}>
          <Link to="/" className='llink'><i class="fa-solid fa-greater-than" style={{color:"black"}}></i>&emsp;Web Development</Link>
          <Link to="/" className='llink'><i class="fa-solid fa-greater-than" style={{color:"black"}}></i>&emsp;SEO</Link>
          <Link to="/" className='llink'><i class="fa-solid fa-greater-than" style={{color:"black"}}></i>&emsp;Android Mobile App</Link>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Mobile_application
import React, {useContext} from 'react'
import Footer from '../footer'
import { store } from '../../App'
import { Navigate } from 'react-router-dom'


const Digital_application = () => {
  const [token, setToken] = useContext(store);

  if(!token) {
    return <Navigate to ="/login" />
  }
  return (
    <div style={{position:"absolute", marginTop:"70px"}}>
      <img className = "ser_web_img1" src='https://msoftwebtechnologies.com/services/assets/images/dm.png' alt='not displayed...'/>

      <div className='digicontainer'>

        <div className='digicontent'>
          <h3>Digital Marketing</h3>
          <p className='pp'>Why digital marketing is require for business?</p>

          <p>Any business requires advertisement for its development. advertisement includes conveying the presence of your business to the greatest number of individuals and furthermore to persuade them to purchase your products and get services. TV, Radio and Newsprint ads, Hoardings, Fliers, Leaflets, Direct Marketing are a portion of the customary techniques for business advertisement. In the new thousand years, Investment for those is very high and low ROI.</p>

          <p>The web is the most effective medium for business advertisement as billions of individuals approach it and they are the potential gatherings of people to get interchanges with respect to your items and administrations. Observe the appended chart; this is information discharged by World Bank about web utilization. You will find that web utilization has expanded quickly in India. Obviously the web is a successful medium to publicize and advance your items as an ever increasing number of individuals are getting to it. Additionally since the use of cell phones has expanded exponentially over the most recent couple of years, the web ends up versatile and is an extremely helpful instrument for the shopper additionally expanding its utilization. It would be ideal if you see the connected chart. This will influence us to acknowledge why is computerized advertising essential to organizations. You will see that Digital Advertising is the quickest developing media in World. This pattern will proceed later on and consequently it will be basic for organizations to go computerized. Any correspondence or exchange with your clients through the Internet or Digital Channels can be characterized as Digital Marketing. we will see the different ideas and devices in Digital Marketing and how Digital Marketing helps business. We will likewise give the means in executing a Digital Marketing venture. Advanced Marketing is a quickly developing and changing field with tremendous degree for development. There are not set standards of Digital Marketing like different branches of information. We give fundamental ideas and apparatuses in Digital Marketing. After which you need to for all intents and purposes execute the same. At that point Digital Marketing can be conveyed by 'doing' and 'attempting' the ideas and instruments. So wishing you the best in your Digital Marketing venture.</p>

        </div>

        <div className='digiimg'>
          <img className='digiimg1' src='https://msoftwebtechnologies.com/services/images/digitalmarketing.png' alt='not displayed...'/>
          <img src='https://msoftwebtechnologies.com/services/assets/images/dm3.jpg' alt='not displayed...'/>
        </div>
      </div>

      <div style={{display:"flex", width:"50%", flexDirection:"column", margin:"5px 0px 20px 50px", color:"red", fontWeight:"bolder"}}>
            <div>
            <span style={{width:"50%", fontSize:"20px"}}><i class="fa-solid fa-check check"></i> SEO</span>
            <span style={{width:"50%",marginLeft:"115px", fontSize:"20px"}}><i class="fa-solid fa-check check"></i> Email Marketing</span> 
            </div>

            <div>
            <span style={{width:"50%", fontSize:"20px"}}><i class="fa-solid fa-check check"></i> Adwords</span>
            <span style={{width:"50%",marginLeft:"70px" , fontSize:"20px"}}><i class="fa-solid fa-check check"></i>Social Media Marketing</span>
            </div>
                  
    
          </div>

      <Footer/>
      
    </div>

    
  )
}

export default Digital_application
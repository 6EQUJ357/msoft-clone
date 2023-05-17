import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer'
import { store } from '../../App'
import { Navigate } from 'react-router-dom'


const Web_application = () => {
  const [token, setToken] = useContext(store);

  if(!token) {
    return <Navigate to ="/login" />
  }
  return (
    <div style={{padding:"10px",position:"absolute", marginTop:"70px"}}>
      
      <img className='ser_web_img1' src='https://msoftwebtechnologies.com/services/images/webdevelopment1.jpg' alt='not displayed'/>
      
    
      <div className="card cardbor">
        <h2 className="card-header ser_web_h"> Web Designing and Web Development</h2>
          <div className="card-body">
            <p className="card-text cardtext"><span>Msoftwebtechnologies</span> always ready to do web design ,development of a website, and eCommerce website. We design and create websites for business peoples to drive customers in to sales or their targets, Msoft have been delivering number of websites for various businesses around the world. Our professional team is ready to turn your ideas into reality. we are always ready to do whatever your project demands, we can deliver your project on time and give quality service.</p>

          </div>
      </div>

      <div className="card cardbor">
        <h2 className="card-header ser_web_h"> Is Website Need for Our Bussiness?</h2>
          <div className="card-body">
            <p className="card-text cardtext">Dou you have a business and don't have a site? On the off chance that you said yes, it's nearly as though your business doesn't exist. In this cutting edge period, individuals and organizations are on the web for data. For what reason do you think individuals visit a site? It's principally to discover data. What's more, in case you're in the business world, data is basic. You need a site for your clients. It needs to contain data about what you can improve the situation them.</p>

          </div>
      </div>

      <div className="card cardbor">
        <h2 className="card-header ser_web_h">Less budget</h2>
          <div className="card-body">
            <p className="card-text cardtext">In earlier, business people advertise their product or services gone through printed media, radio, and television. It's expensive! Investing in advertising is necessary, but it takes higher budget. But we have solution that is,Having a website will make promoting your business less budget.</p>

          </div>
      </div>


      <div className="card cardbor">
        <h2 className="card-header ser_web_h">Promoting</h2>
          <div className="card-body">
            <p className="card-text cardtext">A website is more friendly when it comes to advertising and marketing. There are lots of ways to advertise your products or services through the internet. One example is Facebook ads, an advertising feature offered through Facebook. Another one is called SEO. This is a major advantage for your business. Having a good SEO service provider can boost the ranking of your website which quickly results in increased sales and higher profits.</p>
          </div>
      </div>


      <div className="card cardbor">
        <h2 className="card-header ser_web_h">Increase Customers</h2>
          <div className="card-body">
            <p className="card-text cardtext">Most businesses have local popularity, but what about potential customers outside their city? A website can help you generate more customers. Not just outside your city, but worldwide. The internet offers a global community. With a website, your business will be visible around the world.</p>
          </div>
      </div>


      <div className="card cardbor">
        <h2 className="card-header ser_web_h">Accessibility</h2>
          <div className="card-body">
            <p className="card-text cardtext">Have you ever experienced having to turn customers away because it’s closing time? Well, you don’t have to close the doors of your website. An online site can be visited any time of the day or night. People will look to your site instead of going to your shop because it is more accessible. Just make sure to post enough information about your products and services.</p>
          </div>
      </div>
     
      <div className="card cardbor">
        <h2 className="card-header ser_web_h">Access to Info</h2>
          <div className="card-body">
            <p className="card-text cardtext">Did you know that if you own a website, you can actually track everything that is happening on it? You can even look for information that will tell you how many people visited your site, or how many people messaged or emailed you. You can access the progress of your website and view all its pages. You can even make an update anytime, making it much less expensive than printed material.</p>
          </div>

          <div style={{display:"flex", width:"50%", flexDirection:"column", margin:"5px 0px 20px 50px", color:"red", fontWeight:"bolder"}}>
            <div>
            <span style={{width:"50%", fontSize:"20px"}}><i class="fa-solid fa-check check"></i> Static Websites</span>
            <span style={{width:"50%",marginLeft:"100px", fontSize:"20px"}}><i class="fa-solid fa-check check"></i> E-Commerce Websites</span> 
            </div>

            <div>
            <span style={{width:"50%", fontSize:"20px"}}><i class="fa-solid fa-check check"></i> Dynamic Websites</span>
            <span style={{width:"50%",marginLeft:"70px" , fontSize:"20px"}}><i class="fa-solid fa-check check"></i>All Web Applications</span>
            </div>
                  
    
          </div>

          <Link to ="/services/priceinfo" className = "btn btn-warning" style={{margin:"0px 0px 20px 90px"}}>Price Info</Link>
      </div>    

      <Footer/>

    </div>
       

 
  )
}

export default Web_application
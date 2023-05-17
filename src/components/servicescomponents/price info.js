import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"
import Footer from '../footer'
import { store } from '../../App'
import { Navigate } from 'react-router-dom'


const Price_info = () => {
  const [token, setToken] = useContext(store);

  if(!token) {
    return <Navigate to ="/login" />
  }
  return (
    <div style={{position:"absolute", marginTop:"70px"}}>
    <div style={{display:"flex"}}>

     <div className="card" style={{width: "17rem" }}>

        {/* price 1 */}
        <div className="card-body pricehead">
          <h2 className="card-title">Statics Website</h2>
          <p className="card-text">Silver</p>
        </div>

        <div className="card-body pricehead1">
          <h2 className="card-title">Rs. <span style={{fontSize:"50px", textAlign:"center"}}>4</span>950/-</h2>
          <p className="card-text">Silver</p>
        </div>

        <ul className="list-group list-group-flush priceul">
          <li className="list-group-item priceli"><i class="fa-solid fa-tags pricei"></i>4 to 5 pages</li>
          <li className="list-group-item priceli"><i class="fa-sharp fa-solid fa-star-of-life pricei"></i>Domain name Registration</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-heart-circle-plus fa-beat pricei"></i>Hosting</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-envelope-circle-check fa-shake pricei"></i>2 Email Accounts</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-file-signature fa-fade pricei"></i>Contact Form</li>
        </ul>
        <div className="card-body" style={{padding:"105px 30px 30px 30px", textAlign:"center", backgroundColor:"coral", fontWeight:"bolder"}}>
          
          <p className="card-text">This is for one year after you have to pay renewal fee aprox. 2500/- for year</p>
          <Link to ="/contact" className="btn btn-info pricelink">Contact Now</Link>
        </div>

      </div>

    {/* price 2 */}
    <div className="card pricecars" style={{width: "17rem"}}>

        <div className="card-body pricehead">
          <h2 className="card-title">Statics Website</h2>
          <p className="card-text">Gold</p>
        </div>

        <div className="card-body pricehead1">
          <h2 className="card-title">Rs. <span style={{fontSize:"50px", textAlign:"center"}}>7</span>950/-</h2>
          <p className="card-text">Gold</p>
        </div>

        <ul className="list-group list-group-flush priceul">
          <li className="list-group-item priceli"><i class="fa-solid fa-tags pricei"></i>4 to 5 pages</li>
          <li className="list-group-item priceli"><i class="fa-sharp fa-solid fa-star-of-life pricei"></i>Domain name Registration</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-heart-circle-plus fa-beat pricei"></i>Hosting</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-envelope-circle-check fa-shake pricei"></i>5 Email Accounts</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-file-signature fa-fade pricei"></i>Contact Form</li>
          <li className="list-group-item priceli"><i class="fa-brands fa-rocketchat pricei"></i>Chat Box</li>
        </ul>
        <div className="card-body" style={{padding:"65px 30px 30px 30px", textAlign:"center", backgroundColor:"coral", fontWeight:"bolder"}}>
          
          <p className="card-text">This is for one year after you have to pay renewal fee aprox. 2500/- for year</p>
          <Link to ="/contact" className="btn btn-info pricelink">Contact Now</Link>
        </div>

      </div>

      {/* price 3 */}
      <div className="card pricecars" style={{width: "17rem"}}>

        <div className="card-body pricehead">
          <h3 className="card-title">Dynamic Website</h3>
          <p className="card-text">Silver</p>
        </div>

        <div className="card-body pricehead1">
          <h2 className="card-title">Rs. <span style={{fontSize:"50px", textAlign:"center"}}>12</span>950/-</h2>
          <p className="card-text">Silver</p>
        </div>

        <ul className="list-group list-group-flush priceul">
          <li className="list-group-item priceli"><i class="fa-solid fa-tags pricei"></i>5 to 8 pages</li>
          <li className="list-group-item priceli"><i class="fa-sharp fa-solid fa-star-of-life pricei"></i>Domain name Registration</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-heart-circle-plus fa-beat pricei"></i>Hosting</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-envelope-circle-check fa-shake pricei"></i>10 Email Accounts</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-file-signature fa-fade pricei"></i>Contact Form</li>
          <li className="list-group-item priceli"><i class="fa-brands fa-rocketchat pricei"></i>Chat Box</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-user-secret pricei"></i>Admin Panel</li>
        </ul>
        <div className="card-body" style={{padding:"30px", textAlign:"center", backgroundColor:"coral", fontWeight:"bolder"}}>
          
          <p className="card-text">This is for one year after you have to pay renewal fee aprox. 2500/- for year</p>
          <Link to ="/contact" className="btn btn-info pricelink">Contact Now</Link>
        </div>

      </div>

      {/* price 4 */}
      <div className="card pricecars" style={{width: "17rem"}}>

        <div className="card-body pricehead">
          <h3 className="card-title">Dynamic Website</h3>
          <p className="card-text">Gold</p>
        </div>

        <div className="card-body pricehead1">
          <h2 className="card-title">Rs. <span style={{fontSize:"50px", textAlign:"center"}}>14</span>950/-</h2>
          <p className="card-text">Gold</p>
        </div>

        <ul className="list-group list-group-flush priceul">
          <li className="list-group-item priceli"><i class="fa-solid fa-tags pricei"></i>5 to 8 pages</li>
          <li className="list-group-item priceli"><i class="fa-sharp fa-solid fa-star-of-life pricei"></i>Domain name Registration</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-heart-circle-plus fa-beat pricei"></i>Hosting</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-envelope-circle-check fa-shake pricei"></i>20 Email Accounts</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-file-signature fa-fade pricei"></i>Contact Form</li>
          <li className="list-group-item priceli"><i class="fa-brands fa-rocketchat pricei"></i>Chat Box</li>
          <li className="list-group-item priceli"><i class="fa-solid fa-user-secret pricei"></i>Admin Panel</li>
        </ul>
        <div className="card-body" style={{padding:"30px", textAlign:"center", backgroundColor:"coral", fontWeight:"bolder"}}>
          
          <p className="card-text">This is for one year after you have to pay renewal fee aprox. 2500/- for year</p>
          <Link to ="/contact" className="btn btn-info pricelink">Contact Now</Link>
        </div>

      </div>
     
    </div>

      <p style={{fontWeight:"bolder", color:"red", marginLeft:"20px"}}>For E-COMMERCE websites,WEB Applications ,SEO,Adwords,Mobile Apps and any other web related Apllication please call <span style={{color:"green", cursor:"pointer"}}>961 862 4866</span> or send mail to support<span style={{color:"green", cursor:"pointer"}}>@msoftwebtechnologies.com</span> with your requirements.Our Executive will contact you and send Quotation to you.</p>

      <Footer/>
    </div> 
  )
}

export default Price_info
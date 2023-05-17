import React, {useContext, useState} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { store } from '../App'

const Nav = () => {
    const [token,setToken] = useContext(store);
    
    const setTokens = ()=>{
        
        if(window.confirm("are you sure your want to logout...")){
            setToken(null)
        }
        else{
            setToken(token);
        }
    //     if(confirm("are you sure your want to logout...")){

    //     if(token ){
    //     setToken(null);
    //     }
    // }
    }

  return (
    <div className='nav_container'>

        {/* nav start */}
        <div className='nav_container_start'>
            <div className='logos'>
                <div className='logo logo1'>M</div>
                <div className='logo logo2'>S</div>
                <div className='logo logo3'>O</div>
                <div className='logo logo4'>F</div>
                <div className='logo logo5'>T</div>
            </div>

            <div className='com_name'>web technologies</div>
        </div>


        {/* nav middle */}
        <div className='nav_container_middle'>
            <ul className='nav_container_middle_ul'>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/galary" className='link'> Galary</Link></li> 
                <li><Link to="/contact" className='link'>Contact</Link></li>
                <li><Link to="/aboutus" className='link'>About Us</Link></li>
                <li><Link to="/myprofile" className='link'>My Profile</Link></li>
                <li className='parenthover'>
                    <Link to="/services" className='link'>Services <i className="fa fa-caret-down"></i></Link>
                    <div className='service_comp'>
                    <Link to="/services/webapplication" className='lnk'>Web Application</Link>
                    <Link to ="/services/mobileapplication"  className='lnk'>Mobile  Application</Link>
                    <Link to ="/services/digitalmarketing"  className='lnk'>Digital Marketing</Link>
                    <Link to ="/services/webhosting"  className='lnk'>Web Hosting</Link>
                    <Link to ="/services/bulksms"  className='lnk'>Bulk SMS</Link>
                    <Link to ="/services/contentwriting"  className='lnk'>Content Writing</Link>
                    <Link to ="/services/priceinfo"  className='lnk'>Price Info</Link>
                    </div>
                </li>
                
                <li><Link to="/createaccount" className='link'>Create Account</Link></li>
                {token ? <li><button className='link'style={{border:"none", backgroundColor:"transparent"}} onClick={()=> setTokens()}>Logout</button></li> : <li><Link to="/login" className='link'>Login</Link></li>}
                
                
            </ul>
        </div>


        {/* nav end
        <div className='nav_container_end'>

            <div>
            <i class="fa-solid fa-phone"></i> : +91 9618 624 866
            </div>

            <div>
            <i class="fa-solid fa-envelope"></i> : info@msoftwebtechnologies.com
            </div>
        </div> */}


    </div>
  )
}

export default Nav
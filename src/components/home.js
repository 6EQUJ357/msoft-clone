import React, {useContext, useEffect,useState} from 'react'
import Nav from './nav'
import "../App.css"
import { Link } from 'react-router-dom'
import { store } from '../App'
import axios from "axios"

const Home = () => {
  let [token, setToken] = useContext(store);
  let [data,setData] = useState(null);
  useEffect(()=>{
    axios.get("http://localhost:5000/myprofile",{
      headers : {
        "x-token" : token
      }
    }).then(res => setData(res.data)).catch(err=>console.log(err));
  },[])
  
  return (
    <div className='home_container'>
      <div>
        <img className = "img" src='https://wallpaperaccess.com/full/1393237.jpg' alt='not displayed...'/>
      </div>

      <Nav />

      <div style={{ position:"absolute", top:"100px", right:"100px"}}>
        <img src='https://www.w3schools.com/howto/img_avatar.png' style={{width:"60px", height:"60px", borderRadius:"50%", position:"relative"}}/>
        <p style={{position:"absolute", top:"-10px", right:"-50px", backgroundColor:"aquamarine", borderRadius:"10px", padding:"1px"}}>Hi {data && <span style={{color:"red", fontWeight:"bolder"}}>{data.username.slice(0,6)}</span>}...</p>
      </div>
      <div className='quote'>
        <h1 className='quote_h'>Welcome to <span style={{color:"aqua", textShadow:"2px 2px 2px black", fontSize:"70px"}}>MSOFT</span></h1>
        <p className='quote_p'>We are into developing,designing websites,digital marketing and developing mobile apps. we are very passionate about this industry and always ready to implement new technology trends.</p>

        <Link to ="/services" className='btn btn-success'>Services</Link>
      </div>

      

    </div>
  )
}

export default Home
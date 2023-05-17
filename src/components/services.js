import React, {useState, useContext, useEffect} from 'react'
import Footer from './footer'
import { store } from '../App'
import { Navigate } from 'react-router-dom'
import axios from "axios"


const Services = () => {
  const [token, setToken] = useContext(store)

  const [data, setData] = useState(null);

  useEffect(()=> {
    axios.get("http://localhost:5000/services", {
      headers : {
        "x-token" : token
      }
    }).then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  if(!token) {
    return <Navigate to ="/login" />
  }
  


  return (
    <div>

      <Footer/>
    </div>
  )
}

export default Services
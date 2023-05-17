import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Userdata = () => {

    const [userdata, setdata] = useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:5000/getuserdetails").then(items => setdata(items.data)).catch(err => console.log(err))
    },[])

    const deleteuser = (id)=>{
         axios.delete(`http://localhost:5000/deleteuserdetails/${id}`).then(items => setdata(items.data)).catch(err=> console.log(err));
         alert("user credentials deleted successfully...");
    }


  return ( 
 
    <div style={{position:"relative", zIndex:"10", backgroundColor:"wheat"}}>
        {userdata.map(items =>
            <div className="card card1" key={items._id} >
               <div>
                    <h5 className="card-header" style={{backgroundColor:"lime"}}>id : {items._id}</h5>

                    <div className="card-body" style={{backgroundColor:"dodgerblue"}}>
                        <h5 className="card-title">User Name : {items.username}</h5> 
                        <h5 className="card-title">Email : {items.email}</h5> 
                        <h5 className="card-title">Password : {items.password}</h5>
                        <h5 className="card-title">Conform Password : {items.conform_password}</h5>

                        <div><button className='trash' onClick={()=>deleteuser(items._id)}><i className="fa-solid fa-trash "></i></button></div>  
                        
                    </div> 
               </div>
               
                                        
               
            </div>
        )}
    </div>

  )
}

export default Userdata
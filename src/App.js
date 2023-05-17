import React, {useState, createContext} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import AboutUs from './components/about';
import Services from './components/services';
//services components
import Web_application from "./components/servicescomponents/web application";
import Mobile_application from "./components/servicescomponents/mobile application"
import Digital_application from './components/servicescomponents/digital application';
import Webhosting from './components/servicescomponents/web hosting';
import Bulk_sms from './components/servicescomponents/bulk sms';
import Content_writing from './components/servicescomponents/content writing';
import Price_info from './components/servicescomponents/price info';
import Myprofile from './components/myprofile';


import Contact from './components/contact';
import Error from './components/error';
import Nav from './components/nav';
import Galary from './components/galary';
import Create_account from './components/create account';
import Login from './components/login';

// getting data from mongoDB
import Userdata from './components/userdata';

export const store = createContext();
 

const App = () => {

  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
          <BrowserRouter>
          <div style={{}}>
           <Nav/>
          </div>
          
            <Routes>

              <Route path='/' element ={<Home/>}/>
              <Route path='/aboutus' element ={<AboutUs/>}/>
              <Route path='/services' element ={<Services/>}/>
              {/* servicesRoutings */}

              <Route path='/services/webapplication' element={<Web_application />}/>
              <Route path='/services/mobileapplication' element={<Mobile_application />}/>
              <Route path='/services/digitalmarketing' element={<Digital_application />}/>
              <Route path='/services/webhosting' element={<Webhosting />}/>
              <Route path='/services/bulksms' element={<Bulk_sms />}/>
              <Route path='/services/contentwriting' element={<Content_writing />}/> 
              <Route path='/services/priceinfo' element={<Price_info />}/>


              <Route path='/contact' element ={<Contact/>}/>
              <Route path='/galary' element ={<Galary/>}/>
              <Route path='/createaccount' element ={<Create_account/>}/>
              <Route path='/login' element ={<Login/>}/>

              {/* getting data from mongoDB */}
              <Route path="/myprofile" element = {<Myprofile/>}/>
              <Route path="/getuserdetails" element = {<Userdata/>}/>

              <Route path='*' element ={<Error/>}/>
            
                      
            </Routes>
          </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
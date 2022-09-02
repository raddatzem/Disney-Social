 
import React, {useState, useEffect} from 'react';
import Amplify, {Auth} from 'aws-amplify'
import "./home.css"
import axios from "axios"


const Home = () => {
 const [userName, setUserName] = useState("")

 Auth.currentUserInfo().then(obj => setUserName(obj.username))






 return (
   <div className="card"> 
    <div className="card__content">
        {userName}
       

    </div>
  
   </div>
 );
};
 
export default Home;
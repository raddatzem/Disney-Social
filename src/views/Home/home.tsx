 
import React, {useState, useEffect} from 'react';
import Amplify, {Auth} from 'aws-amplify'
import "./home.css"
import axios from "axios"


const Home = () => {
 const [userName, setUserName] = useState("")
 const [weather, setWeather] = useState([])
 Auth.currentUserInfo().then(obj => setUserName(obj.username))


 useEffect(() => {
    const getWeather = async () => {
        const response = await axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=32836,usa&appid=7eb1fbc6f3960c4f27269ae75663ee0f')
        setWeather(response.data.weather)
    }
    getWeather()
    console.log(getWeather)
}, [])



 return (
   <div className="card"> 
    <div className="card__content">
        {userName}
       
        {weather}
    </div>
  
   </div>
 );
};
 
export default Home;
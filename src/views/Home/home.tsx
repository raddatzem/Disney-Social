 
import React, {useState, useEffect} from 'react';
import Amplify, {Auth} from 'aws-amplify'
import "./home.css"
import axios from "axios"
import NewsItem from '../../components/NewsItem';
import { AmplifyNewsCard } from '../../components/Amplify-Card/amplifyNewsItem';


const Home = () => {
 const [userName, setUserName] = useState("")
 const [articles, setArticles] = useState([])

 Auth.currentUserInfo().then(obj => setUserName(obj.username))


 useEffect(() => {
    const getArticles = async () => {
        const response = await axios.get('https://3er53meh8e.execute-api.us-east-1.amazonaws.com/get-news-api')
        console.log(response)
        setArticles(response.data.articles)
    }
    getArticles()
}, [])



 return (
   <div> 
    <div className='home-items'>
    <img className="card" src={require("./welcome.png")}></img>
      <br></br>
      <br></br>
      {userName? `Welcome back ${userName}`: "Please Login or Create an Account to Continue"}
     <br></br>
    
     </div>  

 
  
   </div>
 );
};
 
export default Home;
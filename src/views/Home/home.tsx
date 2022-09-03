 
import React, {useState, useEffect} from 'react';
import Amplify, {Auth} from 'aws-amplify'
import "./home.css"
import axios from "axios"
import NewsItem from '../NewsItem';


const Home = () => {
 const [userName, setUserName] = useState("")
 const [articles, setArticles] = useState([])

 Auth.currentUserInfo().then(obj => setUserName(obj.username))


 useEffect(() => {
    const getArticles = async () => {
        // const response = await axios.get('https://newsapi.org/v2/everything?q=disney%20parks&apiKey=242c2484c1f744f5b1a73cc0f6e215ec')
        console.log(response)
        setArticles(response.data.articles)
    }
    getArticles()
}, [])



 return (
   <div className="card"> 
    <h2 className="card__content">
     Welcome to Disney Social  {userName} 
     </h2>  
     <br></br>
    <div>
     {articles.map(article => {
                return(
                    <NewsItem 
                    title={article['title']}
                    description={article['description']}
                    url={article['url']}
                    urlToImage={article['urlToImage']}
                    />
                )
            })}

    </div>
  
   </div>
 );
};
 
export default Home;
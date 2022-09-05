 
import React, {useState, useEffect} from 'react';
import axios from "axios";
import NewsItem from '../../components/NewsItem';
import { AmplifyNewsCard } from '../../components/Amplify-Card/amplifyNewsItem';

const Timeline = () => {
    const [articles, setArticles] = useState([])
  
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://3er53meh8e.execute-api.us-east-1.amazonaws.com/get-news-api')

            console.log(response.data.articles)
            setArticles(response.data.articles)
           
        }
        getArticles()
    }, [])
       
   
    
    return ( 
        <div>
            {articles.map(article => {
                return(
                    <AmplifyNewsCard
                    title={article['title']}
                    description={article['description']}
                    url={article['url']}
                    urlToImage={article['urlToImage']}
                    />
                )
            })}
        </div>
 );
};


export default Timeline;
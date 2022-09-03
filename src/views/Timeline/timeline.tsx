 
import React, {useState, useEffect} from 'react';
import axios from "axios";
import NewsItem from '../NewsItem';

const Timeline = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
           
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])
       

    
    return ( 
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
 );
};


export default Timeline;
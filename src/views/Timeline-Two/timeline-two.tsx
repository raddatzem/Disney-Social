import React, {useState, useEffect} from 'react';
import axios from "axios";
import NewsItem from '../NewsItem';

const TimelineTwo = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            // const response = await axios.get('https://newsapi.org/v2/everything?q=walt%20disney%20world&apiKey=242c2484c1f744f5b1a73cc0f6e215ec')
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

        export default TimelineTwo;
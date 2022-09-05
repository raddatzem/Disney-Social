import React, {useState, useEffect} from 'react';
import axios from "axios";
import { AmplifyUserCard } from '../../components/Amplify-Card/userCard';


const FetchArticles = () => {
    const [articles, setArticles] = useState([])
  
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://3er53meh8e.execute-api.us-east-1.amazonaws.com/get-user-news')

            console.log(response.data.Items)
            setArticles(response.data.Items)
           
        }
        getArticles()
    }, [])
       
   
    
    return ( 
        <div>
            {articles.map(article => {
                return(
                    <AmplifyUserCard
                    title={article['title']}
                    description={article['description']}
                    />
                )
            })}
        </div>
 );
};


export default FetchArticles;
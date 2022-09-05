import React, {useState, useEffect} from 'react';
import axios from "axios";
import NewsItem from '../../components/NewsItem';
import { AmplifyNewsCard } from '../../components/Amplify-Card/amplifyNewsItem';
import { Auth } from 'aws-amplify';
import { TextField, Button } from '@aws-amplify/ui-react';



 

const AddArticle = () => {
    const [success, setSuccess] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  
    const postArticles = async () => {
        const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
        console.log(jwtToken)
        let resp = await fetch('https://3er53meh8e.execute-api.us-east-1.amazonaws.com/post-news-api', {
          method: 'POST',
          headers: { 
            'Content-Type' : 'application/json',
            'Authorization' : jwtToken,
          },
          body: JSON.stringify({title: title, description: description})
        });
        if (!resp.ok){
          
          
          console.log(resp)
        }
        setSuccess(true)
        return await resp.json();
        }

    return ( 
        
        
        <div>
            {success && <div>success</div>}
            {!success && <div>
            <TextField label="Title" isMultiline={false} 
                        onInput={ (e: any) => {
                            setTitle(e.target.value)
                        }}
                        />
            <TextField label="Description" isMultiline={true} 
                        onInput={ (e: any) => {
                            setDescription(e.target.value)
                        }}
                        />
            <Button
                loadingText=""
                onClick={() => postArticles()}
                ariaLabel=""
            >
                Submit
            </Button>
            </div>}
        </div>
 );
};


export default AddArticle;
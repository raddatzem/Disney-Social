 
import React, {useState} from 'react';
import Amplify, {Auth} from 'aws-amplify'



const Home = () => {
 const [userName, setUserName] = useState("")

 Auth.currentUserInfo().then(obj => setUserName(`Welcome back ${obj.username}`))



 return (
   <div>
    {userName}
    
    
    
    
    </div>
 );
};
 
export default Home;
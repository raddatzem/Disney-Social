// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import './login.css';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
 
import { useNavigate, useLocation } from 'react-router';
 
//https://ui.docs.amplify.aws/react/guides/auth-protected
export default function Login() {
 const { route } = useAuthenticator((context) => [context.route]);
 const location = useLocation();
 const navigate = useNavigate();
 //The below line gives typescript a headache
 //So I disabled typescript checking(s)
 const from = location.state?.from?.pathname || '/';
 useEffect(() => {
   if (route === 'authenticated') {
     navigate(from, { replace: true });
   }
 }, [route, navigate, from]);
 return (
   <View className="auth-wrapper">
     <Authenticator></Authenticator>
   </View>
 );
}


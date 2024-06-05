import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidatData } from '../utils/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';


const Login = () => {
  const [isSignInForm,setSignInForm]=useState(true);
const [errMessage,setErrormessage]=useState(null);

  const email=useRef(null);
  const password=useRef(null); 
  const handleButtonClick = () =>{
    //validate form data
    const message = CheckValidatData(email.current.value,password.current.value);
    setErrormessage(message);
    console.log(message);
    if(message)return ;

    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
       // navigate("/browser");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode+" "+errorMessage)
        // ..
      });   
    }else{
      //sign in logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+" "+errorMessage)
  });

    }

  }
  const ToggleSignInForm= () =>{
      setSignInForm(!isSignInForm);
  };
  return (
    <div className=' '>
    <Header/>
    <div className='absolute'>
    <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='netflix.png'></img>
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 p-12 absolute bg-black my-48 mx-auto right-0 left-0 text-white opacity-90'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?" Sign In":"Sign Up"}</h1>
        {!isSignInForm&&(<input type='text' placeholder='Full Name ' className='p-4 my-4 w-full bg-gray-600'/>)}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-600'/>
        <p className='text-red-500 font-bold'>{errMessage}</p>
        <button onClick={handleButtonClick} className='bg-red-700 p-4 my-6 w-full'>{isSignInForm?" Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={ToggleSignInForm}>{isSignInForm?" New to Netflix? Sign Up Now":"Already registered ? Sign Up Now"}</p>
    </form>
      
    </div> 
  )
}

export default Login

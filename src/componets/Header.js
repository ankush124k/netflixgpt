import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser,removeUser} from '../utils/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const{ uid ,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // ...
        navigate("/browser");
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
      
    });

    return ()=>unsubscribe();
  },[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-44 mx-auto md:mx-0' src="/logo.png" alt='logo'></img>
      <button onClick={handleSignOut} className='font-serif text-white'>(SignOut)</button>
    </div>
  )
}

export default Header

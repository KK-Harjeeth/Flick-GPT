import React, { useEffect } from 'react'
import logo from '../utils/FlickGPTlogo.png'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { Link } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import {changeLanguage} from '../utils/configSlice'
function Header() {
    const navigate = useNavigate();
    const user  = useSelector((state) => state.user);
    const dispatch = useDispatch();
   const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch)
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
        navigate('/error')
        });
    }
    
    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user.uid;
              // ...
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              navigate('/browse')
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
              // navigate('/')
            }
          });

          //unsubscribe when the component unmounts

          return ()=>unsubscribe();
    },[]);
    const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value))
    }
    const handleGPTSearchClick=()=>{
        // Toggle GPT Search 
        dispatch(toggleGPTSearchView())
    }
  return (
    <div className='absolute px-8 py-2 z-10 w-full flex justify-between'>
      <Link to='/'>
        <img className='w-16' src={logo} alt="logo" />
      </Link>
      {user && <div className='flex p-4'>
        {showGPTSearch && <select name="" id="" className='p-2 mb-2 mr-4 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className='text-white hover:underline mb-2 p-2' onClick={handleGPTSearchClick}>{showGPTSearch? "Home" : "GPT Search"}</button>
        <button onClick={handleSignOut} className='mb-2 p-2 text-white hover:underline'>Sign Out</button>
        <img className='w-10 h-10' src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="usericon" />
      </div>}
    </div>
  )
}

export default Header; 
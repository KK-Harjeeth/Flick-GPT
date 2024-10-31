import Header from "./Header";
import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { addUser } from "../utils/UserSlice";
import { useDispatch } from "react-redux";
const SignUp = () => {
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const confirmPassword = useRef(null);
    const [errorMessage,setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const handleButtonClick=()=>{
        // Check if passwords match
        if (password.current.value !== confirmPassword.current.value) {
            setErrorMessage("Passwords do not match.");
            return;
        }
        const message = checkValidData(email.current.value,password.current.value,name.current.value);
        setErrorMessage(message);
        if(message) return;
        // SignIn Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                  }).then(() => {
                    // Profile updated!
                    // ...
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  }); 
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
                // ..
            });
    } 
  return (
    <div className="relative h-screen w-full">
      <Header />

      {/* Background image container */}
      <div className="relative h-full w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Centered login form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form onSubmit={(e)=>e.preventDefault()} className="w-96 h-auto p-8 bg-black bg-opacity-75 rounded-md text-white">
            <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-4 bg-gray-800 text-white rounded text-base"
            />
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded text-base"
          />
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded text-base"
          /> 
          <input
            ref={confirmPassword}
            type={showPassword ? "text" : "password"}
            placeholder="Re-Enter your password"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded text-base"
          /> 
          {/* Show password checkbox */}  
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-base text-white">
              Show Password
            </label>
          </div>
          {errorMessage&& <p className="text-base text-red-600 mb-4">{errorMessage}</p>}
          <button className="w-full p-3 bg-red-600 rounded font-bold text-base" onClick={handleButtonClick}>
            Sign Up
          </button>
          <Link to='/'>
                <p className="py-4 text-base underline">Already a User ? Sign In!</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

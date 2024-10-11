import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {
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
        <form className="w-96 h-auto p-8 bg-black bg-opacity-75 rounded-md text-white">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded text-base"
          /> 
          <button className="w-full p-3 bg-red-600 rounded font-bold text-base">
            Sign In
          </button>
          <Link to='/signup'>    
            <p className="py-4 text-base underline">New to Flick-GPT ? Sign Up Now!</p>
          </Link>
          
        </form>
      </div>
    </div>
  );
};

export default Login;

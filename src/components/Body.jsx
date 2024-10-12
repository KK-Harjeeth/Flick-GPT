import Login from './Login'
import Browse from './Browse'
import SignUp from './SignUp'
import { Routes, Route } from 'react-router-dom';

function Body() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default Body;
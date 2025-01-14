// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';


function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
   
  );
}

export default App;
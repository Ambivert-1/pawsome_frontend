// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import FindPet from './pages/FindPet';
import ListPet from './pages/ListPet';
import Donate from './pages/Donate';



function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/findpet" element={<FindPet/>}/>
        <Route path="/listpet" element={<ListPet/>}/>
        <Route path="/donate" element={<Donate/>}/>

      </Routes>
   
  );
}

export default App;
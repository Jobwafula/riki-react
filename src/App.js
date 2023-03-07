import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Content from './components/Content';
import Footer from './components/Footer';
import ApplyLogin from './components/ApplyLogin';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Company from './pages/Company';
import HowItWorks from './pages/HowItWorks';
import Bloq from './pages/Bloq';
import ContactSupport from './pages/ContactSupport';
import Login from './pages/Login';


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='Apply' element={<Apply />}></Route>
      <Route path='Login' element={<Login />}></Route>
      <Route path='Company' element={<Company />}></Route>
      <Route path='HowItWorks' element={<HowItWorks />}></Route>
      <Route path='Bloq' element={<Bloq />}></Route>
      <Route path='ContactSupport' element={<ContactSupport />}></Route>
    </Routes>
  )
}
export default App;

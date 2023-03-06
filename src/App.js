import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Content from './components/Content';
import Footer from './components/Footer';
import ApplyLogin from './components/ApplyLogin';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='Apply' element={<Apply />}></Route>
    </Routes>
  )
}
export default App;

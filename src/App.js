import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Content from './components/Content';
import Footer from './components/Footer';
import ApplyLogin from './components/ApplyLogin';


function App() {
  
  return (
    
    <div >
        <Navbar /> 
        <ApplyLogin />
        <Content />
        <Footer />   
    </div>
  );
}
export default App;

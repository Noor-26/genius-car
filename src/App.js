import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import ServicesDetail from './Pages/Home/ServicesDetail/ServicesDetail';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/service/:serviceId" element={<ServicesDetail/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;

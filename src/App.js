import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';


function App() {
  return (
    <div className="App">
      <Header/>
   <Routes>
     <Route path="/" element={<Services/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;

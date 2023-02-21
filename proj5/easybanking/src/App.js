import './App.css';
import Navbar from './Components/Navbar';
import{ BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
function App() {
  return (
    <>
    
       <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contacts" element={<Contacts />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

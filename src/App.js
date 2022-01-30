import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from "Pages/Cart";
import Home from "Pages/Home";
import Menu from "Pages/Menu";
import Profile from "Pages/Profile";
import LoginSignup from "Pages/LoginSignup";
import Feedback from "Pages/Feedback";
import Orders from "Pages/Orders";
import "scrollbarContainer.css";
import About from 'Pages/About';



function App() {
  return (
   
     <div className="App" >
       <div className="body" style={{scrollBehavior: 'smooth'}}>

       <Router basename="/">
            <Routes>
              
                <Route path='/' element={<Home/>} /> 
                <Route path='/about' element={<About/>}/>
                <Route path='/menu' element={<Menu/>} /> 
                <Route path='/cart' element={<Cart/>} />  
                <Route path='/auth' element={<LoginSignup/>} />              
                <Route path='/profile' element={<Profile/>} />   
                <Route path='/feedback' element={<Feedback/>} />    
                <Route path='/orders' element={<Orders/>} /> 
            </Routes>

          
       </Router>

       
      </div>
     </div>
   
  );
}

export default App;

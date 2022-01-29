import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from "Pages/Cart";
import Home from "Pages/Home";
import Menu from "Pages/Menu";
import Profile from "Pages/Profile";
import LoginSignup from "Pages/LoginSignup";
import "scrollbarContainer.css";



function App() {
  return (
   
     <div className="App" >
       <div className="body" style={{scrollBehavior: 'smooth'}}>

       <Router basename="/">
            <Routes>
              
                <Route path='/' element={<Home/>} /> 
                <Route path='/menu' element={<Menu/>} /> 
                <Route path='/cart' element={<Cart/>} />  
                <Route path='/auth' element={<LoginSignup/>} />              
                <Route path='/profile' element={<Profile/>} />   

            </Routes>

          
       </Router>

       
      </div>
     </div>
   
  );
}

export default App;

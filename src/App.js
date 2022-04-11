import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from "Pages/Cart";
import Home from "Pages/Home";
import Menu from "Pages/Menu";
import Profile from "Pages/Profile";
import LoginSignup from "Pages/LoginSignup";
import Feedback from "Pages/Feedback";
import Orders from "Pages/Orders";
import Success from "Pages/Success";
import "scrollbarContainer.css";
import About from 'Pages/About';
import StripeMain from 'StripeComponents/StripeMain';
// import {Header, MobileMenu, Footer} from 'Compnents2';
import Header from 'Compnents2/Header';
import Footer from 'Compnents2/Footer';
import MobileMenu from 'Compnents2/MobileMenu';
import Checkout from 'CommonComponents/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import POS from 'Pages/POS';


function App() {
  return (

     <div className="App" >
       <div className="body" style={{scrollBehavior: 'smooth'}}>

       <Header/>
       <MobileMenu/>
       <Router basename="/">
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>}/>
                <Route path='/menu' element={<Menu/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/auth' element={<LoginSignup/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/feedback' element={<Feedback/>} />
                <Route path='/success' element={<Success/>} />
                <Route path='/orders' element={<Orders/>} />
                <Route path='/stripe' element={<StripeMain/>} />
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/pos' element={<POS/>}/>
            </Routes>


       </Router>
    




      </div>
     </div>

  );
}

export default App;

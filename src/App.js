import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Menu from './Pages/Menu';
import "./scrollbarContainer.css";

function App() {
  return (
   
     <div className="App" >
       <div className="body" style={{scrollBehavior: 'smooth'}}>

       <Router basename="/">
            <Routes>
              
                <Route path='/' element={<Home/>} /> 
                <Route path='/menu' element={<Menu/>} /> 
              
                  
            </Routes>

          
       </Router>

       
      </div>
     </div>
   
  );
}

export default App;

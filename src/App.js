import Footer from "./Compnents2/Footer";
import Header from "./Compnents2/Header";
import MainContent from "./Compnents2/MainContent";
import MobileMenu from "./Compnents2/MobileMenu";
import "./scrollbarContainer.css";

function App() {
  return (
   
     <div className="App" >
       <div className="body" style={{scrollBehavior: 'smooth'}}>
       <MobileMenu/>
       <Header/>
       <MainContent/>
       <Footer/>
      </div>
     </div>
   
  );
}

export default App;

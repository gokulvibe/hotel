import Footer from "./components/Footer";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import "./scrollbarContainer.css";

function App() {
  return (
   
     <div className="App" >
       <div className="body">
      
          {/* <h1>Hiiiiiiiiii</h1> */}
          <Header/>
          <MainContent/>
          <Footer/>
      </div>
     </div>
   
  );
}

export default App;

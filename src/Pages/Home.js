import Footer from "../Compnents2/Footer";
import MainContent from "../Compnents2/MainContent";
import '../Compnents2/CustomCSS/snap.css';
import "../Compnents2/CustomCSS/scroll.css";

function Home() {
  return(

       <div id="home" className="home" style={{maxWidth:"100%",overflow:"none"}}>

            <MainContent/>
            <div className="snapFoot"><Footer /></div>
        </div>
  );
}

export default Home;

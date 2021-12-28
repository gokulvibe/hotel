import Footer from "./components/Footer";
import Header from "./components/header";
import MainContent from "./components/MainContent";
import { Scrollbars } from 'react-custom-scrollbars';

function App() {
  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}  renderTrackVertical={({style, ...props}) =>
    <div {...props} className={style.scrollTrackVertical} style={{...style, backgroundColor: 'white', right: '2px', bottom: '2px', top: '2px', borderRadius: '3px', width: '5px'}}/>
}>
     <div className="App" >
      
          {/* <h1>Hiiiiiiiiii</h1> */}
          <Header/>
          <MainContent/>
          <Footer/>
      
     </div>
    </Scrollbars>
  );
}

export default App;

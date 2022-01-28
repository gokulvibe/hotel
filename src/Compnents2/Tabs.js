import React, { useState } from "react";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    
    <div className="Tabs">
        
      {/* Tab nav */}
      <ul className="nav2">
        <li className={activeTab === "tab1" ? "active" : ""}  onClick={handleTab1} style={{fontFamily:"saman",fontSize:"2.5em"}}>Login</li>
        <li className={activeTab === "tab2" ? "active" : ""}  onClick={handleTab2}  style={{fontFamily:"saman",fontSize:"2.5em",whiteSpace:"nowrap"}}  >Sign up</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
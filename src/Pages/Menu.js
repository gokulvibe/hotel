import React from 'react';
import Footer from 'Compnents2/Footer';
import Header from 'Compnents2/Header';
import MobileMenu from 'Compnents2/MobileMenu';
import MenuMainContent from 'MenuComponents/MenuMainContent';

function Menu() {
  return (

        <div id="Menu">
        <MobileMenu/>
        <Header/>
        <MenuMainContent/>
        <Footer/>

        
        </div>
  );
}

export default Menu;

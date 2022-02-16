import React from "react";
import 'MenuComponents/MenuMainComponent/CustomCSS/searchbar.css';
import FloatingImage from "./FloatingImage";

function SearchBar(){
    return(
        <div className="search-bar">
           <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"></input>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            </div>


        </div>
    );
}
export default SearchBar;
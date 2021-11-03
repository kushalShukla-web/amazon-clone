import React,{useContext} from "react";
import SearchIcon from '@mui/icons-material/Search';
import stateContext from './Context'
import './App.css';
import {
    Link
  } from "react-router-dom";
  import image from "./images/amazon.png"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header(){
  const {bucket} =useContext(stateContext)
    return(
      <div className="main">
        <Link to ="/">
        <img src={image} alt="images" className="main_img"/>
      </Link>


      <div className="main_1">
      <input className="main_input" type="text" />
      <SearchIcon className="main_SearchIcon" />
      </div>

      <div className="main_header">
      <Link className="header_link" to="/login">
      <div className="main_header1">
     <span className="main_header2">Hello</span>
     <span className="main_header3">signIn</span>
     </div> 
      </Link>

      <Link className="header_link" to="/">
      <div className="main_header1">
        <span className="main_header2">Return</span>
        <span className="main_header3">&order</span>
      </div> 
      </Link>

      <Link className="header_link" to="/">
      <div className="main_header1">
        <span className="main_header2">Your</span>
        <span className="main_header3">Prime</span> 
     </div>
      </Link>
      <Link to="/checkout">
      <div className="main_header1" >
      <span><ShoppingBasketIcon/></span>
      <span>{bucket.length}</span>
      
      </div>
      </Link>

      </div>
      </div>
      
    )
}
export default Header
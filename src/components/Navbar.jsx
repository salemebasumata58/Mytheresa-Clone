import React, { useState } from 'react';
import "./navbar.css";
import Web from '../components/Navbar/webview/web';
import Mobile from "../components/Navbar/mobile/mobile"
// import Heads from '../../containers/Header';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
      
    <div className='header'>
   
      <div className='menu'>
     
        <div className='web-menu'>
       
        <Web/>
        <div style={{"maxWidth":"300px","margin":"2px", "alignSelf":"center"}}>
        <div className="input-icons">
        <input className="input-field" placeholder='Search for..' type="text"/>
            <i className="fa fa-search icon"></i>
     </div>
     </div>
        </div> 
        <div className='mobile-menu'>
            <div onClick={() =>setIsOpen(!isOpen)}>
            <i className="fi fi-rr-menu-burger"></i>
           
            </div>
           
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <img style={{minWidth:"25%", margin:"auto"}} src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220503T161145'></img><i class="fi fi-rr-shopping-bag"></i>
             
        </div> 
      </div> 
     
    </div>
   
  )
}

export default Navbar;

// style="margin:auto;max-width:300px
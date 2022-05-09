import React from 'react';
import {DropdownContent1, DropdownContent2, DropdownContent3, DropdownContent4, DropdownContent5, DropdownContent6} from "./dropdown-content";


import "./web.css";

function Web() {
   
  return (
    <div className='web'>
       <div className='web-option'>
           <a class="dropbtn" href='/new-arrivals'>
           NEW ARRIVALS
          </a>
     {/* <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
     </div> */}
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/designers'>
           DESIGNERS
           </a>
           <div class="dropdown-content">
   <DropdownContent5/>
     </div>
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/clothing'>
           CLOTHING
           </a>
           <div class="dropdown-content">
               <DropdownContent1/>
    {/* <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a> */}
     </div>
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='//shoes'>
           SHOES
           </a>
           <div class="dropdown-content">
   <DropdownContent2/>
     </div>
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/bags'>
           BAGS
           </a>
           <div class="dropdown-content">
      <DropdownContent3/>
     </div>
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/accessories'>
           ACCESSORIES
           </a>
           <div class="dropdown-content">
   <DropdownContent4/>
     </div>
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/jewelary'>
           JEWELRY
           </a>
           <div class="dropdown-content">
   <DropdownContent6/>
     </div>
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/vacation'>
           VACATION
           </a>
           {/* <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
     </div> */}
       </div>
       <div className='web-option'>
           <a class="dropbtn"href='/sale'>
           Sale
           </a>
           {/* <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
     </div> */}
       </div>
      
      
    </div>
  )
}

export default Web

import React from 'react'
import {Link} from "react-router-dom";
import "./head.css"
function Heads() {
    const nav = [
        {title : "WOMEN", to :"/women"},
        {title : "MEN", to :"/men"},
        {title : "KIDS", to :"/kids"},

    ];
  return (
      <div className='box' >
    <div className='head'>
        <div className='pages'>{ nav.map((e, i)=> (
               <a style={{"margin": "10px","color":"black","curser":"pointer","textAlign":"center"}} key={i} href= {e.to} >
                   {e.title}
               </a> 
            ))}</div>
           <div className='info'>
           <a>Signup for Newsletter</a> 
           <a onClick={() => {window.location.href="/login"}}>My Account</a>
           <a>My wishlist</a>
           <i class="fi fi-rr-heart" ></i> 
           <a>Malaysia | English</a> 
           </div>
            
    </div >
    <div className='div'>
    <img className='img' src='https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220503T161145'></img>
    <p className='cart-pointer' onClick={() => {window.location.href="/cart"}}>SHOPPING BAG</p><i style={{marginTop:"0px", marginLeft:"10px", marginRight:"40px"}} class="fi fi-rr-shopping-bag"></i>
    </div>
     </div>

  )
}

export default Heads
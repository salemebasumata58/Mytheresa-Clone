import React from 'react'
import { useState, useEffect, useRef } from "react";
import { Empty } from "./Empty";
import { IoIosStarOutline, IoMdClose } from "react-icons/io";
import { BsCurrencyEuro, BsPlus, } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Cookies from 'js-cookie';
import axios from "axios";
// import Navbar from '../Navbar/Navbar';


import "./cart.css";

export const Cart = () => {
    // let sum = 0;
    
    let _id = Cookies.get("mongooseId");
    // const [bagtotal,setbagtotal] = useState(0)
    // const bagtotal = useRef(0);
    const [bag, setbag] = useState([]);
    // console.log(bag[0].menId.price)
    let result = 0;
    if(bag.length!==0){

         result = bag.reduce((total, currentValue) => total = total + (currentValue.menId.price * currentValue.menId.quant), 0);
         localStorage.setItem("bagtotal",result)
    }
    // const [quant,setquant] =  useEffect()
    console.log(result,"res")
    useEffect(() => {
        getbagData()
    }, [])
    const getbagData = async () => {
        let response = await axios.get(`https://mytheresa.herokuapp.com/cart/${_id}`);
        setbag(response.data)
        localStorage.setItem("bagItem",JSON.stringify(response.data))

    }
    const updatebag = async (id, value) => {
        let res = await axios.patch(`https://mytheresa.herokuapp.com/cart/${id}`, { "quant": value });
        console.log(res.data, "updated")
        setbag(res.data)
        localStorage.setItem("bagItem", JSON.stringify(res.data))
    }
    const deleteItem = async (id) => {
        console.log(id);
        let res = await axios.delete(`https://mytheresa.herokuapp.com/cart/${id}`)
        getbagData()
    }
    console.log(bag)
    return (<div className="main_cart_container">
        
        {
            bag.length !== 0 ? <div>
                <p className="ptag-left">YOUR SHOPPING BAG</p>
                <button className="btn-ryt">PROCEED TO CHECKOUT</button>
                <table className="cart-table">
                    <thead>
                        <th></th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </thead>
                    <tbody>
                        {bag.map((e) => {
                         
                            return <tr style={{ border: "1px solid black" }} key={e._id}>
                                <td className="cardtd1">
                                    <div className="cart-details">
                                        <div>
                                            <img src={e.menId.images.img1} alt="" />
                                        </div>
                                        <div>
                                            <h3>{e.menId.brandName}</h3>
                                            <p>{e.menId.name}</p>
                                            <p>Size : {e.menId.size[0]}</p>
                                            <p>Item No. : {e.menId.itemNo}</p>
                                            <div className="Remove-wishlist">
                                                <IoMdClose size={"1.5em"} color={"#999"} />
                                                <span onClick={() => {
                                                    deleteItem(e._id)
                                                }}>Remove</span>
                                                <IoIosStarOutline size={"1.3em"} color={"#999"} />
                                                <span>Add to wishlist</span>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="cardtd2"><p> <BsCurrencyEuro />{e.menId.price}</p></td>
                                <td className="cardtd2" >
                                    <p> <BsPlus size={"1.5em"} onClick={() => {
                                        updatebag(e.menId._id, e.menId.quant + 1)
                                    }} />{e.menId.quant} < BiMinus size={"1.5em"} onClick={() => {
                                        if (e.menId.quant > 1) {

                                            updatebag(e.menId._id, e.menId.quant - 1)
                                        }
                                    }} />  </p></td>
                                   
                                <td className="cardtd2"><p><BsCurrencyEuro />{(e.menId.price) * (e.menId.quant)}</p></td>

                             
                            </tr>
                        })}




                    </tbody>
                </table>
                <div >
                    <h4>YOUR CURRENT PROMOTIONS</h4>
                    <p>Free shipping</p>
                    <hr />
                    <div className="bagtotal">
                        <div>
                            <div className="promo_div">
                                <input className="promo" type="text" placeholder="Gift Card/ Store Credit/Promo Code" />
                                <button className="promo-btn">USE CODE</button>
                            </div>
                            <button className="continue-btn">CONTINUE SHOPPING</button>
                        </div>
                        <div className="bag_summary">
                            <p>Subtotal	€ {result}</p>
                            <p>Grand Total	€ {result}</p>
                            <p>incl. VAT excl. shipping costs</p>
                            <button className="btn-ryt" onClick={() => {window.location.href="/shipping"}}>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>

            </div> : <Empty />
        }

    </div>
    )
}
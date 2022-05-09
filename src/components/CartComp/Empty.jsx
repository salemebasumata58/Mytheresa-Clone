import React from 'react'
// import ReactDOM from 'react-dom'
import { useState } from "react"
import "./emty.css"


export const Empty = () => {
   
    let image_arr = [{ img: 'https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/ABtest/Empty_Cart/clothing_2x1_20200907175309.jpg', name: "Clothing" },
    { img: 'https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/ABtest/Empty_Cart/shoes_2x1_20200907175308.jpg', name: "Shoes" },
    { img: 'https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/ABtest/Empty_Cart/bags_2x1_20200907175308.jpg', name: "Bag" },
    { img: 'https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/ABtest/Empty_Cart/acccessories_2x1_20200907175309.jpg', name: "Accessories" }]
    return <div className="empty_div">
        <p>YOUR SHOPPING BAG IS EMPTY</p>
        <p>You currently don't have any items in your shopping bag.</p>
        <p>Browse through our categories for inspiration.</p>

        <div className="image_arr">
            {
                image_arr.map((e) => {
                    return <div >
                        <img src={e.img} alt="" />
                        <p>{e.name}</p>
                    </div>
                })

            }
        </div>

    </div>
}
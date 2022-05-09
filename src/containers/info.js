import { useState } from "react"
import { Deliver, Detail, Sizedetails } from "./detail";

export const Info =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [isSize, setISize] = useState(false);
    const [Delivary, setDelivar] = useState(false);


    return (
        <div className="info">
            <hr/>
            <button className="showbtnn" onClick={()=>setIsOpen(!isOpen)}>Style and Details  <i style={{marginRight:"0px"}} class="fi fi-rr-angle-small-right"></i></button><hr/>
            {!isOpen ?"" : <Detail/> } 
          
            <button className="showbtnn" onClick={()=>setISize(!isSize)}>Size & fit   <i style={{marginRight:"0px"}} class="fi fi-rr-angle-small-right"></i></button><hr/>
            {!isSize ?"" : <Sizedetails/> } 
            <button className="showbtnn" onClick={()=>setDelivar(!Delivary)}>Delivary & free items <i style={{marginRight:"0px"}} class="fi fi-rr-angle-small-right"></i></button><hr/>
            {!Delivary ?"" : <Deliver/> } 


        </div>
    )
}
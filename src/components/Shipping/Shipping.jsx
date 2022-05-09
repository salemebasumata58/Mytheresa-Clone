
import "./Shipping.css";
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list';

 

export const Shipping =()=>{
const [Data,setData]=useState({
    First_Name:"",
    Last_Name:"",
    Email:"",
    Password:"",
    Confirm_Password:"",
    
});
function handleChange(e){
const {id,value}=e.target;

setData({
    ...Data,
    [id]:value
})

}


    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler =  (value) => {
      setValue(value)
    }
  
    
  


function handleSubmit(event){
event.preventDefault();

fetch ("http://localhost:8080/users",{
method:"POST",
headers:{
    "content-type":"application/json"
}
,
body:JSON.stringify(Data),



})
alert("Done");

}

    return (
        <div className="bigger">
    <div className="Input">
    <h3>SHIPPING ADDRESS</h3>
    <p>Please enter your shipping address in the form below.</p>
    
<form onSubmit={handleSubmit}>
    
<input className="in" id="First_Name" onChange={handleChange} placeholder="First Name" type="text" required/>
<br/>
<input className="in" id="Last_Name" onChange={handleChange} placeholder="Last Name" type="text" required/>
<br/>
<input className="in" id="Last_Name" onChange={handleChange} placeholder="Company" type="text" required/>
<br/>
<input className="in" id="Last_Name" onChange={handleChange} placeholder="Street*" type="text" required/>
<br/>
<input className="in" id="Last_Name" onChange={handleChange} placeholder="Address line 2" type="text" required/>
<br/>
<input className="in" id="Last_Name" onChange={handleChange} placeholder="Postcode*" type="text" required/>
<br/>
<input className="in" id="Last_Name" onChange={handleChange} placeholder="City" type="text" required/>
<br/>
 <Select className="select" options={options} value={value} onChange={changeHandler} />
<br/>
<input className="in" id="Password" onChange={handleChange} placeholder="Mobile Number" type="text" required />
<br/>

<p>*Required Fields</p>

<input className="button" onClick={() => {window.location.href="/thankyou"}} type="submit" value="PROCEED TO CHECKOUT"/>
</form>

    </div>
    {/* <hr></hr> */}
    <img  className="checkoutImage" src='https://i.ibb.co/Tqq7y73/Screenshot-473.png' alt="img" />
    </div>)
}



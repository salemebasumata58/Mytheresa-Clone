import React from 'react'
import { useState } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { login, userdetails } from "../../redux/Auth/action";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

export const Signin = () => {
   // const [read, setread] = useState({})
   const [Data, setData] = useState({

      email: "",
      password: "",


   });
   const dispatch = useDispatch();
   // const navigate = useNavigate();
   function handleChange(e) {
      const { id, value } = e.target;

      setData({
         ...Data,
         [id]: value
      })

   }


   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.post(
            "https://mytheresa.herokuapp.com/login",
            Data

         );
         let d = res.data;
         console.log(d)
         dispatch(login(true));
         dispatch(userdetails({
            email: d.user.email,
            firstName: d.user.firstName,
            lastName: d.user.lastName,
            token: d.token
         }))
         alert("Login successfully")
         Cookies.set('token', d.token);
         Cookies.set('mongooseId', d.user._id)


      } catch (error) {
         alert(error.response.data.message)
      }

   };



   return (
      <div className="Input">
         <h3>ALREADY REGISTERED?</h3>
         <p>If you have an account with us, please log in.</p>

         <form onSubmit={handleSubmit}>


            <input id="email" className='login_reg' onChange={handleChange} placeholder="Email" type="email" required />
            <br />
            <input id="password" className='login_reg' onChange={handleChange} placeholder="Password" type="password" required />
            <br />
            <p>*Required fields</p>
            <p>Forgot Your Password?</p>
            <input className="button" type="submit" value="LOGIN" />
            <p>
               At Mytheresa, we keep your information secure. As a result, it will be<br />
               necessary for you to log in to your account before you are able to place an <br />
               order or change the information on your account. You will be asked to log<br />
               in to complete your order even if you have already been greeted on the<br />
               website.

            </p>


         </form>

      </div>)
}
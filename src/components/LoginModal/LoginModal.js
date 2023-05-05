import React, { useState } from "react";
import {RxCross2} from 'react-icons/rx'
import "./LoginModal.css";

import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);

  const dispatch=useDispatch()
  const signup = async()=>{
    const {data,error}=await supabase.auth.signUp({
      email,
      password,
    })
    if(data.user){
      alert("Account has been created done. Please verified your email")
    }
  }

  const login = async()=>{
    const {data,error}=await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if(error){
      alert(error?.message)
      return;
    }
    dispatch(setUser(data.user))
    //console.log(data,error);
   
  }



  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get access to your Orders,Wishlist and Recommendations
            </p>
          </div>
        </div>

        <div className="right">
          <input
            className="Login-input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="Login-input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <p className="termsandcon">
            By continuing, you agree to flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Policy.</span>{" "}
          </p>

          {loginType ? (
            <button className="Login-btn" onClick={login}>Login</button>
          ) : (
            <button className="Login-btn" onClick={signup}>Signup</button>
          )}

          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart?Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}

        </div>

        <div className="close" onClick={()=>setIsOpen(false)}>
              <RxCross2 />
        </div>

      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;

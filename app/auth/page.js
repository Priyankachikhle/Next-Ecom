"use client"
import React from "react";
import { useState} from 'react'
import styles from "./page.module.css";

import Image from 'next/image'


const Base_URL ="http://64.225.87.22"
export default function Auth() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isSignup, setIsSignup] = useState("true");


  async function signup (){
    try {
     const response = await fetch('${Base_URL}/api/auth/register',{
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
     })
     if(response.ok){
      const data = await response.json();
      console.log(data);
     }
    }catch(e){
      console.log(e);
    }
  }

  async function login (){
    try {
     const response = await fetch('${Base_URL}/api/auth/login',{
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
       
      })
     })
     if(response.ok){
      const data = await response.json();
      console.log(data);
     }
    }catch(e){
      console.log(e);
    }
  }

function handelSubmit(e){
   e.preventDefault();
   if(isSignup){
    signup();
   }else {
    login();
   }
}

function toggleForm() {
    setIsSignup(!isSignup)
    setEmail("")
    setPassword("")
    setName("")
}


  return (
    <div className={styles.container}>
<form className={styles.form} onSubmit={handelSubmit}>
<h2>Welcome to access commerce</h2>
<h3>PLease register below</h3>

{isSignup && <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />}
      <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type='submit' className={styles.formButton}>{isSignup ? "Sign me up!" : "Log in"}</button>
        <p className={styles.toggleForm} onClick={toggleForm}>
          {isSignup ? "Already have an account? Log in" : "Don't have an account ? Register"}
        </p>
        </form>
        <div className={styles.image}></div>
    </div>
      
  )
}

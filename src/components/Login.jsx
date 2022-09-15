import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth } from './Firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navi = useNavigate();

    const handle = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navi("/todo")
        } catch (error) {
            navi("/")
        }    
    }

    return (
        <div>
        <form onSubmit={handle}>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} ></input>
            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} ></input>   
            <button onSubmit={handle}>Login</button>     
        </form>
        </div>
    )
}

export default Login

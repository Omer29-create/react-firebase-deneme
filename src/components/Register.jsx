import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase'


const Register = () => {


const [dene, setDene] = useState();
const nameRef = useRef();
const mailRef = useRef();
const passwordRef = useRef();


const handle = async (e) => {
    e.preventDefault()
    console.log(
    nameRef.current.value,
    mailRef.current.value,
    passwordRef.current.value)

   const dene =  await createUserWithEmailAndPassword(
        auth, 
        mailRef.current.value, 
        passwordRef.current.value
    )
    console.log(dene)

}


    return (
        <div>
        <form onSubmit={handle}>
            <label>Name</label>
            <input type="text" placeholder="Isim giriniz" name='name' ref={nameRef} ></input>
            <label>Email</label>
            <input type="text" placeholder="Email giriniz" name='mail' ref={mailRef} ></input>
            <label>Password</label>
            <input type="text" placeholder="Password giriniz" name='password' ref={passwordRef} ></input>   
            <button onSubmit={handle}>Register</button>     
            </form>
        </div>
    )
}

export default Register;
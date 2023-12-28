'use client'
import { Headerpage } from "../headerpage";
import sty from '../page.module.css'
import { AiFillAccountBook } from "react-icons/ai";
import AXIOS from 'axios';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup(){
    const[user,setUser]=useState("");
    const[eml,setEml]=useState("");
    const[mb,setMb]=useState("");
    const[pass,setPass]=useState("");
    const rt=useRouter();
    const signup=(e)=>{
        e.preventDefault();
        const url="http://localhost:9000/route/userreg"
        AXIOS.post(url,{user,eml,mb,pass}).then((res)=>{
            alert(res.data)
        })
        rt.push('/signin');
    }
   

    return(
        <>
        <Headerpage/>
        <h1>Signup</h1>
        <div className={sty.su}>
            
        <center><AiFillAccountBook color="grey" className={sty.lg}/></center>
            <form className={sty.frm}>
            
                <p>
                <label className={sty.lab}>Username</label><br></br>
                <input type="text" onChange={(e)=>setUser(e.target.value)}/>
                </p>
                <p>
                <label className={sty.lab}>Password</label><br></br>
                <input type="password"onChange={(e)=>setPass(e.target.value)}/>
                </p>
                <p>
                <label className={sty.lab}>Email</label><br></br>
                <input type="text"onChange={(e)=>setEml(e.target.value)} />
                </p>
                <p>
                <label className={sty.lab}>Contact</label><br></br>
                <input type="text" onChange={(e)=>setMb(e.target.value)}/>
                </p>
                <button onClick={signup} >Confirm</button><br></br>
                <a href="/signin">Already a user</a>
                
                
            </form>
            
        </div>
       
        </>
    )
}
'use client'
import { Headerpage } from "../headerpage";
import sty from '../page.module.css'
import AXIOS from 'axios'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signin(){
    const[eml,setEml]=useState("");
    const[pass,setPass]=useState("");
    const rot=useRouter();
    const signin=(e)=>{
        e.preventDefault();
        const url="http://localhost:9000/route/userlog"
        AXIOS.post(url,{eml,pass}).then((res)=>{
            alert(res.data)
            if(res.data=='Succes')
            rot.push('/task');   
        })

        
    }
    return(
        <>
        <Headerpage/>
        <h1>Signin</h1>
        
        <div className={sty.su}>
        
        <form className={sty.frm}>
                <p>
                <label className={sty.lab}>Username</label><br></br>
                <input type="text"  onChange={(e)=>{
                    setEml(e.target.value)
                }}/>
                </p>
                <p>
                <label>Password</label><br></br>
                <input type="password" onChange={(e)=>{
                    setPass(e.target.value)
                }}/>
                </p>
                
                <button onClick={signin}>Confirm</button>
                
            </form>
            </div>
        </>
    )
}
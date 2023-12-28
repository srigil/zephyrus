'use client'
import sty from '../page.module.css'
import AXIOS from 'axios'
import { useState } from 'react'
import Allrecords from '../allrecords';

export default function Task(){
    const [title,setTtitle]=useState("");
    const [desc,setDesc]=useState("");
    const addData=()=>{
        const url="http://localhost:9000/route/todo";
        AXIOS.post(url,{title,desc}).then((res)=>{
            alert(res.data);
        })
    }

    return(
      <>
        <div className={sty.su}>
      <form onSubmit={addData} className={sty.frm}>
        <p>
          <label className={sty.lab}>Title:</label><br></br>
        <input type='text' onChange={(e)=>setTtitle(e.target.value)}/>
        </p>
        <p>
       <label className={sty.lab}>Description: </label> <br></br>
        <input type='text' onChange={(e)=>setDesc(e.target.value)}/>
        </p>

        
        <button type='submit'>Add Task</button>
      </form>
     
      <div>
      
      </div>
      
    </div>
    <h1><center>Details</center></h1>
    <Allrecords/>
    </>
    )
}
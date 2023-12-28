'use client'
import { useState,useEffect } from "react";
import AXIOS from 'axios';
import sty from './page.module.css'
function Allrecords(){
    const [record,setRecord]=useState([])

    const del = (id) => {
      AXIOS.delete(`http://localhost:9000/route/del/${id}`).then(() => {
        setRecord(record.filter((rec) => rec._id !== id));
      });
    };

    useEffect(()=>{
        const url="http://localhost:9000/route/show";
      AXIOS.get(url).then((res)=>{
           setRecord(res.data)
      })
      
    })
      const [isChecked, setIsChecked] = useState(false);
    
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      }
  return(
    <>
         <div>
      
         <table className={sty.tabl}>
            <thead >
                <tr className={sty.th}>
                    <th>Title</th> 
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((rec)=>{
                    return(   <tr className={sty.td}>
                            <td>{rec.title}</td>
                            <td style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{rec.description}</td>
                            <td><input type="checkbox" checked={rec.isChecked} onChange={()=>handleCheckboxChange(rec._id)}></input></td>
                            <td><button onClick={()=>del(rec._id)}>Delete</button></td>
                        </tr>
                    )

                    })
                }
            </tbody>
         </table>
        
         </div>
    </>
  )

}
export default Allrecords;
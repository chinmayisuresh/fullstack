import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export const Test=()=>{
    let {name}=useParams();
    const [show,setShow]=useState();
    
    async function getData(){
        var data=await fetch(`http://localhost:2755/students/search?name=${name}`);
        var res=await data.json();
        var ans=[];
        ans.push(res);
          console.log(res);
          setShow(ans)
        }
   
        useEffect(()=>{
            getData();
        },[])
    return (
       <div>
             <Link to={'/Dashboard'}>Dashboard</Link>
           
             {show? <div>
               {show.map((e)=>(
                   
                   <div>
                  <h4>Name:{e.full_name}</h4>
                 
                  <h4>MARKS</h4>
                   <h4>TEST 1</h4>
                   <div>
                   <p>Subject:{e.test1.subject}</p>  
                   <p>Marks:{e.test1.marks}</p> 
                   <p> Date:{e.test1.Date}</p>
                   </div>

                   <h4>TEST 2</h4>
                   <p>Subject:{e.test2.subject}</p>  
                   <p>Marks:{e.test2.marks}</p> 
                   <p> Date:{e.test2.Date}</p>

                   <h4>TEST 3</h4>
                   <p>Subject:{e.test3.subject}</p>  
                   <p>Marks:{e.test3.marks}</p> 
                   <p> Date:{e.test3.Date}</p>
                  
                   </div>

                   
                   
               ))}
           </div> : null}
       </div>
   )
}
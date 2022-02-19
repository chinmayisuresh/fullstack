import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


var a=0;
var g=0;
var m=0;
var f=0;

export const Dashboard=()=>{
   const [show,setShow]=useState();
   const [name,setName]=useState('');
   

   const handleClick=(page,limit)=>{
      
    if(a==1){
        age(page,limit);
      }
      else if(g==1){
          grade(page,limit)
      }
      else if(f==1){
          gender(page,limit,1);
      }
      else if(m==1){
          gender(page,limit,0);
      }
      else{
      getData(page,limit);
         }
   }

   const handleAge=()=>{
       g=0;
       f=0;
       m=0;
       a=1;
       age(1,5);
   }
   const handleGrade=()=>{
       a=0;
       g=1;
       f=0;
       m=0;
       grade(1,5);
    }

    const handleF=()=>{
        a=0;
        g=0;
        m=0;
        f=1;
        gender(1,5,1);
    }

    const handleM=()=>{
        a=0;
        g=0;
        m=1;
        f=0;
        gender(1,5,0);
    }

    const handleSubmit=()=>{
         
         getName(name);
    }
    async function getName(name){
        var data=await fetch(`http://localhost:2755/students/search?name=${name}`);
        var res=await data.json();
        var ans=[];
        ans.push(res);
        setShow(ans);
    }
    
    async function getData(page,limit){
        var data=await fetch(`http://localhost:2755/students?page=${page}&limit=${limit}`);
        var res=await data.json();
          console.log(res);
          setShow(res)
        }

    async function age(page,limit){
        var data=await fetch(`http://localhost:2755/students/age?page=${page}&limit=${limit}`);
        var res=await data.json();
        setShow(res);
      }


      async function grade(page,limit){
        var data=await fetch(`http://localhost:2755/students/grade?page=${page}&limit=${limit}`);
        var res=await data.json();
        setShow(res);
       }

     async function gender(page,limit,gender){
        var data=await fetch(`http://localhost:2755/students/gender?page=${page}&limit=${limit}&gender=${gender}`);
        var res=await data.json();
        setShow(res);
     }
     

    useEffect(()=>{
        getData(1,5);
    },[])

    return (
        <div>
            <Link to={'/'}><h3>LOGIN</h3></Link>
            <h1 >DASH BOARD</h1>
            <label >Search by Name</label>
             <input  type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
            <button  onClick={()=>handleSubmit()}>Search</button>
            <h4>FILTERS</h4>
            <button onClick={()=>handleAge()}class='filter'>AGE</button><button onClick={()=>handleGrade()} class='filter'>GRADE</button>
             <button onClick={()=>handleF()} class='filter'>FEMALE</button>
             <button onClick={()=>handleM()} class='filter'>MALE</button>
           {show? <div>
               {show.map((e)=>(
                   
                   <div className='showing'>
                  <h3>Name:{e.full_name}</h3>
                  <h3>Age:  {e.age}</h3>
                  <h3>Grade: {e.grade}</h3>
                  <h3>Gender:{e.gender}</h3>
                  
                   <Link to={`/Tests/${e.full_name}`}> View Test Details</Link>
                   </div>

                   
                   
               ))}
           </div> : null}
             <br></br>

             <div>
            <button id='glowing' class='glow' onClick={()=>handleClick(1,5)}>1</button> 
            <button class='glow' onClick={()=>handleClick(2,5)}>2</button> 
            <button  class='glow' onClick={()=>handleClick(3,5)}>3</button> 
            <button  class='glow' onClick={()=>handleClick(4,5)}>4</button> 
               </div>
        </div>
    )
}
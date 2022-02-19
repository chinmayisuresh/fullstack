import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'
export const Login = () => {
    const [name,setName]=useState('');
    const [show,setShow]=useState();
    const navigate=useNavigate();

    const handleSubmit=()=>{
     getName(name)    
        
     }

     async function getName(name){


        var data=await fetch(`http://localhost:2755/students/search?name=${name}`);
        var res=await data.json();
        
        var ans=[];
        ans.push(res);
        setShow(ans);
        if(res.full_name){
            navigate('/Dashboard');

        }
        else{
            alert('Wrong password or name');
        }
    }
    return (
        <div>
        <Link className='log' to={'/Dashboard'}>DASHBOARD</Link> 

        <h1 className='log'>LOGIN</h1>
        <input className='make' placeholder='Enter Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input className='make' placeholder='Enter Password' type='password' ></input><br></br>
        <button className='lead'  onClick={()=>handleSubmit()}>LOGIN</button>
        </div>
    );
}
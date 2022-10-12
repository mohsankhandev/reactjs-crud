import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {


    const [id, setId]=useState(0);
    const [email, setEmail]=useState("")
   const [password, setPassword]=useState("");

   const history = useNavigate();
   


    useEffect(()=>{
        //localStorage.getItem("id")
        // setId()
        setId(localStorage.getItem("id"));
        setPassword(localStorage.getItem("password"))
        setEmail(localStorage.getItem("email")) 


    },[]);

    function handleupdata(e){
        e.preventDefault();

        axios.put(`https://6344779e242c1f347f86fb86.mockapi.io/CURDJS/${id}` ,
        {
            email:email,
            password:password,
        }).then(()=>{
            history('/read');
      
           });

     
    }

    return (
        <>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div> 
                 <div class="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} ></input>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleupdata}>Update</button>
            </form>
        </>
        
        )
}

export default Update
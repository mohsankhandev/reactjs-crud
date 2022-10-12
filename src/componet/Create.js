import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
  

const Create = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const history = useNavigate();

    const   header = {"Access-Control-Allow-Origin": "*" };


    // function handlesub () {}

    
    const handlesub = (e) =>{
        e.preventDefault();
      axios.post("https://6344779e242c1f347f86fb86.mockapi.io/CURDJS" , {
        email:email,
       password:password,
       header,
     }).then(()=>{
      history('/read');

     });
      
}

  return (
<>
<h2>Create</h2>
<form>
  <div class="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value  )}/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" className="form-control" onChange={(e)=> setPassword(e.target.value  )} ></input>
  </div>
{password}
{email}
  <button onClick={handlesub} type="submit" className="btn btn-primary">Submit</button>
</form>
</>

)
}

export default Create;
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

  const [data, SetData] = useState([]);
  const [tabledark, SetTabledark] = useState('');


  function getData() {
    axios.get("https://6344779e242c1f347f86fb86.mockapi.io/CURDJS").then((res) => {
      console.log(res.data);
      SetData(res.data);
    });

  };
function Hnadledelete(id){
  axios.delete(`https://6344779e242c1f347f86fb86.mockapi.io/CURDJS/${id}`).then(()=>{
    getData();
  });

};
//call to local storage 
function CallLocalStorage(id,email,password){

  localStorage.setItem("id", id)
  
  localStorage.setItem("password", password)
  
  localStorage.setItem("email", email)

};
//useefffect hook call after 
  useEffect(() => {
    getData();

  }, []);
  // },[data])  matlab jab b ya data change hu fa ya function call hu ga use effect 



  return (
    
    <div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={()=>{
    if (tabledark === "table-dark") SetTabledark('');
    else SetTabledark("table-dark")
  }}/>
</div>



<div className='d-flex justify-content-between m-2'>
<h2>Create</h2>
<Link to="/">
<button className='btn btn-primary'>Create New</button>
</Link>
</div>



       <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">id</th>
            <th>dddd</th>
            <th>hhh</th>
          </tr>
        </thead>
        {
          data.map((restdata , idM) => {
            return (
              <>
                <tbody key="idm">
                  <tr >
                    <td>{restdata.email}</td>
                    <td>{restdata.password}</td>
                    <td>{restdata.id}</td>
                   
                    <td> <Link to="/update">
                      
                      <button className='btn btn-success'  
                       onClick={()=> CallLocalStorage(restdata.id,restdata.password,restdata.email)}>
                      
                      Edit</button>  </Link></td>
                  
                    <td><button className='btn btn-success' onClick={()=>Hnadledelete(restdata.id)}>Delete</button></td>

                  </tr>

                </tbody>
              </>
            )

          })
        }

      </table>

    </div>
  )
}

export default Read
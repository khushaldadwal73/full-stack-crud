import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddUser() {

    let navigate=useNavigate()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const{name,username,email}=user;

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value});
    };
   
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080",user)
        navigate("/")


    }

  return <div className='container'>
         <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-3 mt-2 shadow'>
                <h3 className='text-center m-3'>Register User</h3>
                <form onSubmit={(e)=>onSubmit(e)}>
    <div className="mb-3">
        <label htmlfor="Name" className="form-label">Name</label>
        <input type={"text"} class="form-control" placeholder="enter your name" name="name"  onChange={(e)=>onInputChange(e)}  />
        </div>
    <div className="mb-3">
    <label htmlfor="Username" className="form-label">Username</label>
        <input type={"text"} class="form-control" placeholder="enter your username" name="username" onChange={(e)=>onInputChange(e)}  />
    </div>
    <div className="mb-3">
    <label htmlfor="email" className="form-label">E-mail</label>
        <input type={"text"} class="form-control" placeholder="enter your email" name="email"  onChange={(e)=>onInputChange(e)}  />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Information provided by me is correct</label>
    </div>
     <button type="submit" class="btn btn-primary">Submit</button>
     &nbsp;<button type="btn" class="btn btn-danger">Cancel</button>
    </form>
            </div>
            
         </div>
  </div>
}

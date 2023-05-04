import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" style={{width:"100%"}} >
    <div className="container-fluid ">
    <a className="navbar-brand" href="#" style={{color:"#fff",textAlign:"left"}}>Full Stack Crud Application </a>
    
    
    <Link className="btn btn-outline-light" to="/adduser" >Add User</Link >
   

    </div>

</nav>

    </div>
  )
}

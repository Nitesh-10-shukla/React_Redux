import React,{useState} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {AiFillShopping} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {IoStorefrontOutline} from 'react-icons/io5';

const Nav = () => {
  const [showmenu,setShowmenu]=useState(false)

  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm   bg-white mb-5 fixed-top ">
  <div class="container">
    <Link class="navbar-brand brand" to="/"><IoStorefrontOutline size={35} color="blue"/><span> Mega-Store</span></Link>
    <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=> setShowmenu(!showmenu)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  className={`collapse navbar-collapse ${showmenu ? "show" : ""}`} id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 px-5
      ">
        
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/" onClick={()=>setShowmenu(false)}>Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="Blog" to="Productbycategory" onClick={()=>setShowmenu(false)}>Collection</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="Blog" to="Blog" onClick={()=>setShowmenu(false)}>Blog</Link>
        </li>

      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
           <div class="d-flex gap-3 align-items-center last" >
        {/* <button class="btn btn-outline-success" type="submit"><Link to="Register">Register</Link></button> */}
        {/* <button class="btn btn-outline-success" type="submit">Login</button> */}
        <Link to="Register"><BiUserCircle size={40} onClick={()=>setShowmenu(false)}/></Link>
        <AiFillShopping size={40} color="blue" onClick={()=>setShowmenu(false)}/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
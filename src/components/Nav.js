import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {AiFillShopping} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {IoStorefrontOutline} from 'react-icons/io5';

const Nav = () => {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm   bg-white mb-5 fixed-top ">
  <div class="container">
    <Link class="navbar-brand" to="/"><IoStorefrontOutline size={40} color="blue"/> Mega-Store</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 px-5
      ">
        
        <li class="nav-item">
          <Link class="nav-link" to="/">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="Blog" to="Productbycategory">Collection</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="Blog" to="Blog">Blog</Link>
        </li>

      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
           <div class="d-flex gap-3">
        {/* <button class="btn btn-outline-success" type="submit"><Link to="Register">Register</Link></button> */}
        {/* <button class="btn btn-outline-success" type="submit">Login</button> */}
        <Link to="Register"><BiUserCircle size={40}/></Link>
        <AiFillShopping size={40} color="blue"/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
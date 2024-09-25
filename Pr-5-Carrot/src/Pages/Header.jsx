import React from 'react'
import { FaSearch } from "react-icons/fa";
import './header.css'
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


const Header = () => {
  return (
    <>
<div className="container">
    <div className="row">
    <nav className="navbar navbar-expand-lg navbar-light  d-flex align--items-center">
  <div className="container-fluid">
    <div className="col-lg-1">
    <a className="navbar-brand" href="#">
        <img src="public/img/logo.png" alt="" />
    </a>
    </div>
    <button className="navbar-toggler d-sm-none " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse d-sm-none navbar-collapse justify-content-center" id="navbarSupportedContent">
      <div className="col-lg-6">
      <form className="d-flex mt-2">
        <input  type="text"   placeholder="Search for items"/>
        <select>
            <option>All Categories</option>
            <option>Mens</option>
            <option>Womens</option>
            <option>Electronics</option>
        </select>
        <button className='btn btn-success'><FaSearch />
    </button>
      </form>
      </div>
     
    </div>
    <div className="col-lg-5 d-sm-none d-sm-none d-lg-block">
    <div className="logo  justify-content-end d-flex align-items-center">
      <div className="logo-png d-flex align-items-center">
    <span>
    <FaRegUser />

    </span>
          <h5>Account</h5>
      </div>
      <div className="logo-png d-flex align-items-center">
    <span>
    <FaRegHeart />
 

    </span>
          <h5>Wishlist</h5>
      </div>
      <div className="logo-png d-flex align-items-center">
    <span>
    <FaCartPlus />




    </span>
          <h5>Cart</h5>
      </div>
    </div>
    </div>
  </div>
    </nav>
    </div>
</div>

    </>
  )
}

export default Header

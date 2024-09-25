import React from 'react'
import './packing.css'
import { RiRedPacketLine } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";






const Packing = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="box">
                    <p className='packing'><RiRedPacketLine /></p>
                    <h5>Product Packing</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="box">
                    <p className='packing'><FaHeadset /></p>
                    <h5>24X7 Support</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="box">
                    <p className='packing'><BsTruck /></p>
                    <h5>Product Packing</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-2 justify-content-center d-flex">
                <div className="box">
                    <p className='packing'><FaDollarSign /></p>
                    <h5>Product Packing</h5>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Packing

import React from 'react'
import './work.css'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Work = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="work col-12">
            <h2>Great Words From People</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div> 

          <div className="main-work mt-5 row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="box">
                <img src="public/img/31.jpeg" alt="" className="img-fluid" />
                <div className="box-content">
                  <span>Co Founder</span>
                  <h6>Stephen Smith</h6>
                  <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="d-flex opp">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="box">
                <img src="public/img/32.jpeg" alt="" className="img-fluid" />
                <div className="box-content">
                  <span>Manager</span>
                  <h6>Lorem Robinson</h6>
                  <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="d-flex opp">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="box">
                <img src="public/img/33.jpeg" alt="" className="img-fluid" />
                <div className="box-content">
                  <span>Team Leader</span>
                  <h6>Sadaika Alard</h6>
                  <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                  <div className="d-flex opp">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work

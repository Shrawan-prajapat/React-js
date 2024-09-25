import React from 'react'
import './fresh.css'

const Fresh = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-4 mt-2">
                <div className="fresh-img">
                    <img src="public/img/23.jpeg" alt="" />
                    <div className="fresh-content">
                        <h5>
                        Fresh & healthy 
                        <br></br>
                        Organic Fruits
                        </h5>
                        <p><span>35%</span>
                        <span className='first'>on first order</span>
                        </p>
                        <button className='btn btn-success mt-2'>Shop now</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-2">
                <div className="fresh-img">
                    <img src="public/img/22.jpeg" alt="" />
                    <div className="fresh-content">
                        <h5>
                        Fresh  
                        <br></br>
                        Snacks & Sweets
                        </h5>
                        <p><span>20%</span>
                        <span className='first'>on first order</span>
                        </p>
                        <button className='btn btn-success'>Shop now</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-2">
                <div className="fresh-img">
                    <img src="public/img/21.jpeg" alt="" />
                    <div className="fresh-content">
                        <h5>
                        Healthy  
                        <br></br>
                        Bakery Products
                        </h5>
                        <p><span>30%</span>
                        <span className='first'>on first order</span>
                        </p>
                        <button className='btn btn-success'>Shop now</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Fresh

import React from 'react'
import './silder.css'

const Silder = () => {
  return (
    <>
      <section className='slider'>
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <div className="silder-content">
                    <div className="p-1 d-flex done">
                    <p>100% </p>
                    <h5>Organic Fruits</h5>
                    </div>
                    <h1>Explore fresh & juicy fruits.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                            beatae consequuntur.</p>
                    <button className='btn'>Shop now</button>
                </div>
            </div>
            <div className="col-lg-6"></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Silder

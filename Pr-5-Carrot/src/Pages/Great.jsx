import React from 'react'
import './great.css'

const Great = () => {
  return (
    <>
        <section className='great'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card shadow">
                        <div class="card-body">
        <h5 class="card-title">35% <span>Off</span></h5>
        <p class="card-texttt">Great deal on organic food.</p>
        <p class="card-textt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis.
</p>
            <div className="d-flex deal">
            <h4>
                <span>220    : </span>
                Days 
            </h4>
            <h4>
                <span>19 :</span>
                Hrs
            </h4>
            <h4>
                <span>48 :</span>
                Min
            </h4>
            <h4>
                <span>31 </span>
                Sec
            </h4>
            </div>
      </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6"></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Great

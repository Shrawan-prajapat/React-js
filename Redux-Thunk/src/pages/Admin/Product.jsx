import React from 'react'
import Header from '../../componets/Header'
import Sidebar from '../../componets/Sidebar'

const Product = () => {
    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className='col-lg-9'>
                        <h2>Product</h2>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Product
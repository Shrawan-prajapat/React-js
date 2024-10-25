
import React from 'react'

import Sidebar from '../../componets/Sidebar'
import Header from '../../componets/Header'

const Dashboard = () => {
    return (
        <>
           <Header/>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className='col-lg-9'>
                        <h2>Dashboard</h2>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard

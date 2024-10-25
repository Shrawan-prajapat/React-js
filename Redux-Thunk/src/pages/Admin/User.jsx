import React from 'react'
import Header from '../../componets/Header.jsx'
import Sidebar from '../../componets/Sidebar.jsx'

const User = () => {
    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className='col-lg-9'>
                        <h2>Users</h2>
                    </div>
                </div>
            </div>
        </>

    )
}

export default User
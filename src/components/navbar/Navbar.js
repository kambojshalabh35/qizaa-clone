import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='container-fluid px-5 d-flex pt-4 pb-0 sticky-top justify-content-between align-middle'>
        <div className='text-center'>
          <img src="./logo.webp" className='col-8' alt="logo" />
          <h1 className='fs-3 font-weight-800'>QIZAA</h1>
        </div>
        <div className='my-auto col-8'>
          <ul className='d-flex justify-content-around'>
            <li className='active'>Home</li>
            <li>Our Store</li>
            <li>Tableware</li>
            <li>Sustainable Packaging</li>
            <li>Lifestyle Products</li>
            <li>Organic Products</li>
          </ul>
        </div>
        <div className='my-auto d-flex'>
          <div className='fs-4 ms-5 me-2'>
            <i className="bi bi-cart2"></i>
          </div>
          <div className='mx-2'>
            <i className="bi bi-person-circle fs-3"></i>
            <span className='fs-6 mx-3'>
              Join Community
            </span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
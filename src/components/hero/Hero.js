import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <>
        <div className='container-fluid hero'>
            <div className='container mx-5 row pt-5 text-white top-0'>
                <div className='col-6 pt-5'>
                    <h2 className='mt-5'>Sustainability<br /> In Your Pocket</h2><br />
                    <p className='mb-5'>Building a future that's exciting!</p>
                    <a href='/' className='btn-explore px-5 py-2 rounded-pill'>Explore</a>
                </div>
                <div className='col-4'>
                    <img src="./hero_circle.png" className='col-9' alt="..." />
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
import React from 'react'
import './whychooseus.css'

const WhyChooseUs = () => {
  return (
    <>
        <section className='whychooseus d-flex align-items-center'>
            <div className='d-flex justify-content-between container my-auto'>
                <div className='col-md-4 my-auto left'>
                    <div className='col-10 mx-auto text-center top'>
                        <h3>Why Choose Us</h3>
                        <p className='pt-3'>Qizaa- Sustainability In Your Pocket...</p>
                    </div>
                    <div className='col-10 mx-auto mt-5 text-center'>
                        <p>
                            At our core, we truly believe in making the world a more sustainable and better place to live in. 
                        </p>
                    </div>
                </div>
                <div className='col-md-7 right'>
                    <div className='row'>
                        <div className='col-6 mb-5 row'>
                            <div className='col-4'>
                                <img src="/Best Sustainable Products.png" className='col-12' alt="" />
                            </div>
                            <div className='col-8 my-auto'>
                                <p>Best Sustainable Products</p>
                            </div>
                        </div>
                        <div className='col-6 mb-5 row'>
                            <div className='col-4'>
                                <img src="/Way to Sustainable Life.png" className='col-12' alt="" />
                            </div>
                            <div className='col-8 my-auto'>
                                <p>Way to Sustainable Life</p>
                            </div>
                        </div>
                        <div className='col-6 row'>
                            <div className='col-4'>
                                <img src="/Environmental Priority.png" className='col-12' alt="" />
                            </div>
                            <div className='col-8 my-auto'>
                                <p>Environmental Priority</p>
                            </div>
                        </div>
                        <div className='col-6 row'>
                            <div className='col-4'>
                                <img src="/Community Focused.png" className='col-12' alt="" />
                            </div>
                            <div className='col-8 my-auto'>
                                <p>Community Focused</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseUs
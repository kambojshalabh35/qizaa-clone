import React from 'react'
import './joinus.css'

const JoinUs = () => {
  return (
    <>
        <div className='container joinus mb-5 py-5'>
            <h2 className='text-center'>Live A Sustainable Life</h2>
            <div className='text-center'>
                <h3>Join Us Now</h3>
                <form action="">
                    <input type="text" className='mt-4 py-1 px-3' placeholder='Add Your Email' name="joinus" id="" /><br />
                    <button className='btn-joinus rounded-pill mt-4 text-white'>Submit</button>
                </form>
            </div>
            <div className='row mx-auto text-center mt-5'>
                <div className='col-md-3 mx-auto'>
                    <img src="./create.png" className='col-8' alt="" />
                </div>
                <div className='col-md-3 mx-auto'>
                    <img src="./innovate.png" className='col-8' alt="" />
                </div>
                <div className='col-md-3 mx-auto'>
                    <img src="./scale.png" className='col-8' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default JoinUs
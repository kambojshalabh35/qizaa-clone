import React from 'react'
import './footer.css'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <>
        <div className='container-fluid footer-top'>
            <FooterTop />
        </div>
        <div  className='container-fluid footer-bottom'>
            <FooterBottom />
        </div>
    </>
  )
}

export default Footer
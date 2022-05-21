import React from 'react'
import './offer.css'

const Offer = (props) => {
  return (
    <div className='col-md-4 col-11 mx-auto base text-center my-5'>
        <img src={props.data.image} alt="..." />
        <h3 className='mt-5'>{props.data.heading}</h3>
        <p className='mt-3' dangerouslySetInnerHTML={{__html: props.data.body}}></p>
    </div>
  )
}

export default Offer
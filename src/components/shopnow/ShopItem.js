import React from 'react'
import './shopnow.css'

const ShopItem = (props) => {
  return (
    <>
        <div className='col-md-4 col-11 mx-auto my-4 text-start shopitem'>
            <div className='shopitem_image'>
                <img src={`./shopnow/${props.data.image}`} className='col-12' alt="" />
                <div className='display'>
                    <button className='py-2'>Quick View</button>
                </div>
            </div>
            <h4 className='pt-3'>{props.data.heading}</h4>
            <p>₹ {props.data.price}.00 /-</p>
        </div>
    </>
  )
}

export default ShopItem
import React from 'react'
import Offer from '../offers/Offer'
import './brands.css'

const Brands = () => {
    const data = [
        {
            'image':'/brands/Brown Living.webp',
            'heading':'Brown Living',
            'body':'Buy sustainable zero-waste<br />products from best brands.'
        }
        ,{
            'image':'/brands/Planet Care.webp',
            'heading':'Planet Care',
            'body':'Buy sustainable zero-waste<br />products from best brands.'
        }
        ,{
            'image':'/brands/Prakati.webp',
            'heading':'Prakati',
            'body':'Buy sustainable zero-waste<br />products from best brands.'
        }
    ]
  return (
    <>
    <div className='container brands'>
        <div className='text-center col-6 mx-auto'>
            <h2>Sustainable Brands</h2>
        </div>
        <div className='row justify-content-center'>
            {
                data.map((value, key)=>{
                    return <Offer data={value} key={key} />
                })
            }
        </div>
    </div>
</>
  )
}

export default Brands
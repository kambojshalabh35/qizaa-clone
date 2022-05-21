import React from 'react'
import './offer.css'
import Offer from './Offer'

const Offers = () => {
    const data = [
        {
            'image':'sustainability.webp',
            'heading':'Sustainable Products',
            'body':'Buy sustainable zero-waste<br />products from best brands.'
        }
        ,{
            'image':'B2B.webp',
            'heading':'B2B Services',
            'body':'Introducing sustainable culture<br />in corporate environment. '
        }
        ,{
            'image':'Community.webp',
            'heading':'Our Community',
            'body':'Introducing sustainable culture<br /> in all communities. '
        }
    ]
  return (
    <>
        <div className='container what_we_offer'>
            <div className='text-center col-6 mx-auto'>
                <h2>WHAT WE OFFER</h2>
                <p>
                    Qizaa is an All In One platform for Sustainable Products, B2B Sustainable Services, and Community Programs for a Sustainable Lifestyle.
                </p>
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

export default Offers
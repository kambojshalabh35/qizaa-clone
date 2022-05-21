import React from 'react'
import ShopItem from './ShopItem'

const ShopNow = () => {
    const shopData = [
        {
            'image': 'sales1.webp',
            'heading':'Biodegradable Jute Grow Bags 8x 12 & 6x6 inches',
            'price': 55
        }
        ,{
            'image': 'sales2.webp',
            'heading':'Biodegradable Jute Bags 8x 12 inches with Cloth Handle.',
            'price': 135
        }
        ,{
            'image': 'sales3.webp',
            'heading':'Birchwood Fork (Pack of 100) 16cm',
            'price': 55
        }
    ]
  return (
    <>
        <section className='shopnow container text-center'>
            <h2>SHOP NOW</h2>
            <div className='row mt-5'>
                {
                    shopData.map((value, key)=>{
                        return <ShopItem data={value} key={key} />
                    })
                }
            </div>
        </section>
    </>
  )
}

export default ShopNow
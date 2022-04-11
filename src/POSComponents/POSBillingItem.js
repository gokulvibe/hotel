import React from 'react'
import POSBillingSubItem from './POSBillingSubItem'

function POSBillingItem() {
  return (
    <div className='POSBillingItem'>
      <div className='main_items'>
        <div className='item_title'>
          Name
        </div>
        <div className='item_price'>
          Price
        </div>
      </div>
      

      <POSBillingSubItem/>
    </div>
  )
}

export default POSBillingItem
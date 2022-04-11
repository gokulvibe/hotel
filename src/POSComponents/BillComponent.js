import React from 'react'
import POSBillingItem from './POSBillingItem'
import "POSComponents/CustomCSS/POS.css";
import "POSComponents/CustomCSS/POSBill.css";
import POSBillingSubItem from './POSBillingSubItem';
import {useState} from 'react';

function BillComponent() {

    const [items, setitems] = useState(
        [
            {
                "id": 1,
                "name": "Pizza",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },
            {
                "id": 1,
                "name": "Burger",
                "cost": "$10",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },
            {
                "id": 1,
                "name": "French Fries",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },{
                "id": 1,
                "name": "Pizza",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },{
                "id": 1,
                "name": "Pizza",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },{
                "id": 1,
                "name": "Pizza",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },{
                "id": 1,
                "name": "Pizza",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            },
            {
                "id": 1,
                "name": "Pizza",
                "cost": "$5",
                "add_ons": [
                    {
                    "name": "mayoneese",
                    "cost": "$1"
                    },
                    {
                        "name": "cheese",
                        "cost": "$1"
                    }

                ]
            }   
        ]
    )
  return (
    <div className='POSBilling'>

        <div className='POSBilling_Header'>
        <div className='POSBilling_Header_in'>
                <span>Table #1</span>
                <span className='POSBilling_Table_status'>On Process</span>
                {/* <span><i className='fas fa-close'></i></span> */}
                <span>&times;</span>
            </div>
        
        </div>
        <div className='POSBilling_Table_div'>
            <table className='POSBilling_Table'>

            {
                
                items.map((item) => (
                    <div>
                    
                    <div className='POSItem'>
                        <tr className='POSBilling_Table_Row'>
                            <td className='POSBilling_Table_Row item_id'>{item.id}</td>
                            <td className='POSBilling_Table_Row item_name'>{item.name}</td>
                            <td className='POSBilling_Table_Row item_cost'>{item.cost}</td>
                        </tr>
                    </div>

                    {
                        item.add_ons.map((add_on) => (
                            <div>

                            <tr className='POSBilling_Table_SubRow'>
                                <td className='POSBilling_Table_SubRow'></td>
                                <td className='POSBilling_Table_SubRow'>{add_on.name}</td>
                                <td className='POSBilling_Table_SubRow'>{add_on.cost}</td>
                            </tr>
                            </div>
                        )
                        )
                    }
                    
                    <div className='spacer'></div>
                    </div>
                    
                )
                )
            }
            
                </table>
            </div>

        <div className='bill_summary'>

            <div className='bill_summary_inner sub_total'>
                <div className='title'>Subtotal</div>
                <div className='value'>$5</div>
            </div>

            <div className='bill_summary_inner tax'>
                <div className='title'>Tax</div>
                <div className='value'>$5</div>
            </div>

            <div className='bill_summary_inner total'>
                <div className='title'>Total</div>
                <div className='value'>$5</div>

            </div>
            
        </div>
    </div>
  )
}

export default BillComponent
import  React from 'react';
import FakeOrders from "data/fakeOrders.json";
import Order from "Compnents2/OrderComponents/Order";
import {useState,useEffect} from 'react';

function Filter(){
    const [filteredOrders, setfilteredOrders] = useState(FakeOrders.sort((first,second)=>{return first.id>second.id?-1:1;}).filter(item=>{return item.type==="previous"||item.type==="upcoming"}))
    const [isActive1, setActive1] = useState(true);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    function filterA(){
        var B=FakeOrders.filter(item=>{return item.type==="previous"||item.type==="upcoming"})
        setfilteredOrders(B)
    }
    function filterB(){
        var B=FakeOrders.sort((first,second)=>{return first.id>second.id?-1:1;}).filter(item=>{return item.type==="previous"})
        setfilteredOrders(B)
    }
    function filterC(){
        var C=FakeOrders.sort((first,second)=>{return first.id>second.id?1:-1;}).filter(item=>{return item.type==="upcoming"})
        setfilteredOrders(C)
    }
    return(
        <div>
            <h3 style={{color:"white"}}>Filters:</h3>
            <div class="FilterGroup">
                <button className={isActive1?"active":null} onClick={()=>{filterA();setActive1(true);setActive2(false);setActive3(false)}}>All</button>
                <button className={isActive2?"active":null} onClick={()=>{filterB();setActive1(false);setActive2(true);setActive3(false)}}>Previous</button>
                <button className={isActive3?"active":null} onClick={()=>{filterC();setActive1(false);setActive2(false);setActive3(true)}}>Upcoming</button>
            </div>
            <div style={{color:"white"}}>
                {filteredOrders.map((order) => (
                     <Order order={order} key={order.id} />
                ))}
            </div>
        </div>
    )
}

export default Filter;
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
export default function Header(props) {
  let [cartOpen,setCartOpen] = useState(false)
//new Intl.NumberFormat().format(sum) ------>> showing number with two digits after dot
const showOrders = (props)=>{
  let sum = 0;
  props.orders.forEach(el=>{
    sum += Number.parseFloat(el.price)
  })
  return (<div>
      {props.orders.map( el =>            
          ( <Order   
            onDelete = {props.onDelete}
            key = {el.id} 
           item = {el}/>)         
        )}        
        <p className='totalSum'>Sum: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  )
}
const showNothing = (props)=>{
  return (
    <div className='empty'>
      <h2>The cart is empty</h2>
    </div>
  )
}
const  refreshPage=()=> {
  window.location.reload(false);
}
  return (
    <header>
      <div>
        <span className='logo' onClick={refreshPage}>House Staff</span>
        <ul className='nav'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Room</li>
        </ul>
        <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
          <div className='shop-cart'>{
            props.orders.length> 0 ? showOrders(props): showNothing()
            
          } 
        </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

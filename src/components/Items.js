import React from 'react'
import Item from './Item'

export default function Items ({items})  {
  
   return (
    <div>
    {items.map(el=>(
     <Item key = {el.id} item = {el}/>
    ))}
  </div>
   )
 
}
import React from 'react'
import Item from './Item'

export default function Items ({items,onAdd})  {
  
   return (
    <main>
    {items.map(el=>(
     <Item key = {el.id} item = {el} onAdd = {onAdd}/>
    ))}
  </main>
   )
 
}
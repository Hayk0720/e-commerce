import React from 'react'
import Item from './Item'

export default function Items ({items,onAdd,onShowItem })  {
  
   return (
    <main>
    {items.map(el=>(
     <Item key = {el.id} item = {el} onAdd = {onAdd} onShowItem = {onShowItem}/>
    ))}
  </main>
   )
 
}
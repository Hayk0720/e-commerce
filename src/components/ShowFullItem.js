import React from 'react'

export default function ShowFullItem({item,onAdd,onShowItem}) {
  return (
    <div className='full-item'>
        <div className='wrapper'>
            <img src={"./../../img/"+item.img} alt={item.title} onClick={()=>onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{`${item.price}$`}</b>
            <div className='add-to-cart' onClick={()=> onAdd(item)}>+</div>
        </div>
    </div>
  )
}

import React from 'react'

export function Item({item}) {  
    return (      
        <div className='item' >
            <img width={200} src='./../../img/chair.jpeg' alt={item.title}/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{`${item.price}$`}</b>
            <div className='add-to-cart'>+</div>
        </div>     
    )  
}

export default Item

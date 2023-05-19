import React, { useState } from 'react'
import { CategoriesList } from './../helping/Db';

export default function Categories({chooseCategory}) {
    const [category,setCategory] = useState(CategoriesList)
    
  return (
    <div className='categories'>
      {           
        category.map(el=>(
            <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
        ))
      }
    </div>
  )
}


import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import { ItemsList } from './helping/Db';

function App()  {
const [item,setItem] = useState(ItemsList)
const [orderItem,setorderItem] = useState([])


const addToOrder = (addItems)=>{
  let isInArray = false
  orderItem.forEach(el=>{
    if(el.id ===addItems.id )
      isInArray = true
  })
  if(!isInArray)
  setorderItem([...orderItem,addItems])
  console.log(orderItem)
  }
    return (
      <div className='wrapper'>
        <Header orders = {orderItem} />
        <Items items = {item} onAdd = {addToOrder}/>
        <Footer/>
      </div>
    )

}

export default App;


import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import { ItemsList } from './helping/Db';
import  Categories  from './components/Categories';

function App()  {
const [item,setItem] = useState(ItemsList)
const [orderItem,setorderItem] = useState([])
const [currentItems,setCurrentItems] = useState(item)

const addToOrder = (addItems)=>{
  let isInArray = false
  orderItem.forEach(el=>{
    if(el.id ===addItems.id )
      isInArray = true
  })
  if(!isInArray)
  setorderItem([...orderItem,addItems])
  }
  const deleteOrder = (id)=>{ 
    setorderItem(orderItem.filter(el=>
      el.id !==id
    ))

  }
  const chooseCategory = (category)=>{
    console.log(category)
    if(category==='all'){
      setCurrentItems(item)
      return
    }
    setCurrentItems(  item.filter(el=>
      el.category === category))
  }
    return (
      <div className='wrapper'>
        <Header orders = {orderItem} onDelete = {deleteOrder} />
        <Categories chooseCategory = {chooseCategory}/>
        <Items items = {currentItems} onAdd = {addToOrder}/>
        <Footer/>
      </div>
    )

}

export default App;

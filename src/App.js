
import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import { ItemsList } from './helping/Db';
import  Categories  from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

function App()  {
const [item,setItem] = useState(ItemsList)
const [orderItem,setorderItem] = useState([])
const [currentItems,setCurrentItems] = useState(item)
const [showFullItem,setshowFullItem] = useState(false)
const [FullItem,setFullItem] = useState({})

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
  const onShowItem = (item) =>{
    setFullItem(item)
    setshowFullItem(!showFullItem)
  }
    return (
      <div className='wrapper'>
        <Header orders = {orderItem} onDelete = {deleteOrder} />
        <Categories chooseCategory = {chooseCategory}/>
        <Items onShowItem = {onShowItem} items = {currentItems} onAdd = {addToOrder} item = {FullItem}/>
        {showFullItem && <ShowFullItem onShowItem = {onShowItem} onAdd = {addToOrder} item = {FullItem}/>}
        <Footer/>
      </div>
    )

}

export default App;

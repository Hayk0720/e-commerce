
import React,{useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import { ItemsList } from './helping/Db';

function App()  {
const [item,setItem] = useState(ItemsList)
   
    return (
      <div className='wrapper'>
        <Header/>
        <Items items = {item}/>
        <Footer/>
      </div>
    )

}

export default App;

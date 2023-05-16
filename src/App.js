import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';


class App extends React.Component {
  constructor(props){
    super(props)
  
    this.state = {
        items:[
          {id:1,
          title:'chair',
          img:'chair img',
          desc:'lorem chair',
          price:'40.99'
        },
        {id:2,
          title:'table',
          img:'table img',
          desc:'lorem table',
          price:'60.99'
        },
        {id:3,
          title:'armchair',
          img:'armchair img',
          desc:'lorem armchair',
          price:'110.99'
        },
        {id:4,
          title:'lamp',
          img:'lamp img',
          desc:'lorem lamp',
          price:'10.99'
        },
        ]
    }
  }
  render(){    
    return (
      <div className='wrapper'>
        <Header/>
        <Items items = {this.state.items}/>
        <Footer/>
      </div>
    )
  }
}

export default App;

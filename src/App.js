import React, { Component } from 'react';
import Accordion from './components/Accordion';
import {ecommerceFakeApi} from './fakeApi/ecommerce'
import ProductList from './components/ProductList'
import Search from './components/Search'


const data = [
  { title: "title1",
    description: "description1"      
  },
  { title: "title2",
  description: "description2"      
  },
  { title: "title3",
  description: "description3"      
  },
  { title: "title4",
  description: "description4"      
  },
  { title: "title5",
  description: "description5"      
  },
]

class App extends Component {
  render() {    
    return (
      <div>
        <Accordion accordionData={data} />
        <Search data={ecommerceFakeApi}/>
        <ProductList data={ecommerceFakeApi} />
        
      </div>
    );
  }
}

export default App;

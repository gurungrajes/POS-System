import { useState } from 'react'

import Navbar from './Components/Navbar/Navbar';                                                                                          
import Category from './Components/Category/Category';
import Menu from './Components/Menu/Menu';
import MenuData from './Components/Menu/MenuData';
import OrderCart from './Components/OrderCart/OrderCart';

function App() {
  const [menu] = useState(MenuData)
  const handleAdd = (item) => {
    // Add to cart logic here
    console.log('Add:', item)
  }
  return (
    <>
    <Navbar />
    {/* <div style={{display:'flex', alignItems:'flex-start', gap:'24px'}}> */}
      <div style={{flex: 1}}>
       <Category />
       <Menu menu={menu} onAdd={handleAdd} />
{/* </div> */}
            <OrderCart />
    </div>
    </>
  )
}

export default App

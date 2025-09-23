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
<<<<<<< HEAD
    <Navbar />
    {/* <div style={{display:'flex', alignItems:'flex-start', gap:'24px'}}> */}
      <div style={{flex: 1}}>
       <Category />
       <Menu menu={menu} onAdd={handleAdd} />
{/* </div> */}
            <OrderCart />
    </div>
=======
      <div>
        <h1>Hello World</h1>
        <h2>hello rabin</h2>
        <h3>Narayan</h3>
      </div>
>>>>>>> d86fccf0a9507c7cc43d39c8e49949eb1150ee08
    </>
  )
}

export default App

import Header from './components/UI/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import React, { useState } from 'react';

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </>
  );
}

export default App;

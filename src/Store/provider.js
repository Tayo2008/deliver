import React, { useState, createContext } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  //Cart handler section

  //   {
  //     "id": 1,
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     "rating": {
  //        "rate": 3.9,
  //        "count": 120
  //     }
  //  }

  // console.log("all cart items", JSON.stringify(cart, null, 3));
  const addToCart = (item) => {
    //check if itrem is in cart
    const cartItem = cart.find((prod) => prod.id === item.id);

    if (cartItem === undefined) {
      const newCart = [...cart, { ...item, qty: 1 }];
      setCart(newCart);
    } else {
      // console.log("we are in else block");

      //rebuild d cart
      const rest = cart?.filter((prod) => prod.id !== item?.id);

      const updatedCart = cart?.filter((prod) => prod?.id === item.id)[0];

      const temp = {
        ...updatedCart,
        qty: updatedCart?.qty + 1,
      };

      setCart([...rest, temp]);

      //   console.log("not to be updated======== \n", rest);
      //   console.log("we want to updat ========== \n", updatedCart);

      //filter out the item then add one 1 to the quantity

      //set the new cart
    }

    //if item is in cart increase qty

    //else add item to cart

    // const newItem = { ...item,};

    //find item in cart array
    // console.log("filtered to me", cartItem);
    // console.log("filtered to me", JSON.stringify(cartItem, null, 3));

    // if cart item is already in the cart
    // if (cartItem) {
    //   const newCart = [...cart].map((prod) => {
    //     if (prod.id === item?.id) {
    //       return { ...item, amount: cartItem.qty + 1 };
    //     } else {
    //       return item;
    //     }
    //   });
    //   setCart(newCart);
    // } else {
    //   setCart([...cart, newItem]);
    // }
  };

  const removeFromCart = (item) => {
    //rest of the items
    const rest = cart?.filter((prod) => prod?.id !== item?.id);

    //filter item out
    const item2remove = cart?.filter((prod) => prod?.id === item?.id);

    //item qty
    const itemQty = item2remove[0].qty;

    if (itemQty > 1) {
      const updatedItem = { ...item2remove[0], qty: itemQty - 1 };

      setCart([...rest, updatedItem]);
    } else {
      setCart([...rest]);
    }

    //check if item is greater than 1,

    //if item is greater than remove 1

    //else remove all

    // setCart([...newCart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    isOpen,
    cart,
    handleCloseCart,
    handleOpenCart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;

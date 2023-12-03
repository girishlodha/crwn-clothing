import { createContext, useState , useEffect } from "react";
//import { onAuthStateChangedListener ,createUserDocumentAuth} from "../utils/firebase/firebase.utils";

//actual value
//import PRODUCTS from "../shop-data.json"

const addCartItem =(cartItems,productToAdd)=>{
    //if carditem contains producttoadd
    const existingCartitem = cartItems.find((cartItem)=>cartItem.id===productToAdd.id )

    //if found , incre,ent
    if(existingCartitem)
    {
        return cartItems.map((cartItem)=>cartItem.id===productToAdd.id?
        {...cartItem,quantity: cartItem.quantity+1}:
        cartItem)
    }
    //return new array
    return [...cartItems,{...productToAdd,quantity:1}]

} 
const removeCartItem =(cartItems,cartItemToRemove)=>{
    //if carditem contains producttoadd
    const existingCartitem = cartItems.find((cartItem)=>cartItem.id===cartItemToRemove.id )
    
    if(existingCartitem.quantity===1)
    {
        return cartItems.filter((cartItem)=>cartItem.id !== cartItemToRemove.id)
     
    }
    //if found , incre,ent
    if(existingCartitem)
    {
        return cartItems.map((cartItem)=>cartItem.id===cartItemToRemove.id?
        {...cartItem,quantity: cartItem.quantity-1}:
        cartItem)
    }
   

} 
const removeOneCartItem= (cartItems,cartItemToRemove)=>{
    return cartItems.filter((cartItem)=>cartItem.id !== cartItemToRemove.id)

}
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems : [],
    addItemToCart : ()=>{},
    removeItemToCart : ()=>{},
    cartCount:0,
    removeItem: ()=>{},
    cartTotal:0

});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] =  useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartTotal,setTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>total +cartItem.quantity,0);
        setCartCount(newCartCount)
    },[cartItems])
    useEffect(()=>{
        const newCartTotal= cartItems.reduce((total,cartItem)=>total +cartItem.quantity * cartItem.price,0);
        setTotal(newCartTotal)
    },[cartItems])
    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    
    const removeItemToCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }
    const removeItem = (cartItemToRemove) =>{
        setCartItems(removeOneCartItem(cartItems,cartItemToRemove))
    }
    

    const value = {isCartOpen,setIsCartOpen , addItemToCart ,cartItems , cartCount,setCartCount,removeItemToCart,removeItem,cartTotal};
    return <CartContext.Provider value = {value} >{children}</CartContext.Provider>
}
 
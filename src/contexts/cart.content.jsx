import { createContext, useState } from "react";
//import { onAuthStateChangedListener ,createUserDocumentAuth} from "../utils/firebase/firebase.utils";

//actual value
//import PRODUCTS from "../shop-data.json"
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{}
});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setIsCartOpen] =  useState(false);
    const value = {isCartOpen,setIsCartOpen};
    return <CartContext.Provider value = {value} >{children}</CartContext.Provider>
}

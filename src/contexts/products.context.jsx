import { createContext, useState } from "react";
//import { onAuthStateChangedListener ,createUserDocumentAuth} from "../utils/firebase/firebase.utils";

//actual value
import PRODUCTS from "../shop-data.json"
export const ProductsContext = createContext({
    products :[]
});

export const ProductProvider = ({children}) =>{
    const [products,setProducts] =  useState(PRODUCTS);
    const value = {products};
    return <ProductsContext.Provider value = {value} >{children}</ProductsContext.Provider>
}

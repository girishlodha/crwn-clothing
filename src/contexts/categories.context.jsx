import { createContext, useState ,useEffect} from "react";
//import { onAuthStateChangedListener ,createUserDocumentAuth} from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// //actual value
// import SHOP_DATA from "../shop-data";
export const CategoriesContext = createContext({
    categoriesMap :{}
});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap,setCategoriesMap] =  useState({});
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])
    useEffect(()=>{
        const getCategoriesMap = async()=>{
           const categoryMap =   await getCategoriesAndDocuments ();
           setCategoriesMap(categoryMap)
           console.log(categoryMap)

        }
        getCategoriesMap();
       
    },[])
    const value = {categoriesMap};
    return <CategoriesContext.Provider value = {value} >{children}</CategoriesContext.Provider>
}

import {initializeApp} from 'firebase/app'
import{getAuth, signInWithRedirect , signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth'

import  {
    getFirestore,
    doc,
    getDoc,
    setDoc
}from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqZqw7BJhqi_BHg1LqSr4cQ846MbW1FeY",
    authDomain: "crwn-clothing-4fbc0.firebaseapp.com",
    projectId: "crwn-clothing-4fbc0",
    storageBucket: "crwn-clothing-4fbc0.appspot.com",
    messagingSenderId: "1015491523271",
    appId: "1:1015491523271:web:7d35c3c78ca5d710d6c4e2"
  };


  
 
  const firebaseApp = initializeApp(firebaseConfig);

  const provider  = new GoogleAuthProvider(); //

  provider.setCustomParameters({
    prompt: " select_account"
  });
  
  export const auth =getAuth();    //
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider); 
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
  export const db = getFirestore();
  export const createUserDocumentAuth = async (userAuth , additionalInformation ={displayName:'Girish'} ) =>{
    if(!userAuth)return ;
    const userDocRef = doc(db , 'users' , userAuth.uid);

    console.log(userDocRef) ; 

    const userSnapshot = await getDoc(userDocRef);


    // if user data not exists
    if(!userSnapshot.exists())
    {
        const {displayName , email} = userAuth ; 
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch (error){
            console.log('error creating the user')
        }
    }

    //if user data exists


    return userDocRef
  }

  export const createAuthUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password)return;
    return await createUserWithEmailAndPassword(auth,email , password);

  }

  export const signInAuthUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password)return;
    return await signInWithEmailAndPassword(auth,email , password);

  }
// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC2RjorKdB0ue1PkrsaPxTTiZC6PPA3DqQ",
  authDomain: "pastelariabase.firebaseapp.com",
  projectId: "pastelariabase",
//   storageBucket: "pastelariabase.appspot.com",
//   messagingSenderId: "835345732610",
//   appId: "1:835345732610:web:ff8a69940328e7a545831b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const conectar = collection(db , 'Login');




const [usuario1 , setUsario1]= useState("");
    
useEffect(()=>{
    const getUsario = async ()=> {
    const dados = await getDocs(conectar)
    console.log(dados.docs.map((doc)=>({...doc.data(),id:doc.id})));
    setUsario1(dados.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUsario();
    
    
    },[])
export const Bancodados = (Usuario, senha) => {
    // const [usuario , setUsario]= useState("");
    // const [senha , setSenha]= useState("");


// return(<div>
    
//        {
//         usuario1.map((ver)=>(
// <p>
//     {ver.senha}
// </p>
//         ))
//        } 
  
// </div>)
}


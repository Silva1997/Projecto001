import React from "react";
import { useContext,createContext, useState } from "react";
import { getProdutos } from "../Paginas/Produtos/Produtos";
import { PegarItem,EditarItem } from "../localarmazenamento/Localstore";
import  PropTypes  from "prop-types";

export const Contexto = createContext({
    items: [],
    getProductQuantity: ()=>{} ,
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    updateCartItemCount :() => {},
    
})
// aqui
export const AcessoContexto = ({children})=>{
    const [cartProducts, setCartProducts] = useState(PegarItem('carrinho') || [] );

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
            
        if (quantity === undefined) {
            return 0;
        }
    
        return quantity;
    }
    
    const updateCartItemCount = (newAmount, id) => {
        setCartProducts((prev) => ({ ...prev, [id]: newAmount }));
      };


    function addOneToCart(id,product) {
      
        const quantity = getProductQuantity(id);
        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                   {
                    id: id,
                    quantity: 1,
                    image:product.image,
                    texto:product.text1,
                    tipo:product.tipo,
                    preco:product.preco
                
                   }
                    
                ],
                EditarItem("Carrinho", [...cartProducts,product] )
            )
           
            // EditarItem("Carrinho", [...cartProducts,product] )
           
        } 
        
        else { 
            
            // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            
            setCartProducts(
                cartProducts.map( product => product.id === id                                // if condition
                    ? { ...product,quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )

            // EditarItem("Carrinho", [...cartProducts,""] );
        }
    }
  
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);
    
        if(quantity === 1) {
            deleteFromCart(id);
            
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
          
        }
    }
    
    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
       

        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
              
                return currentProduct.id !== id;
            })  
        )
      
       
        
     

}
    
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProdutos(cartItem.id);
        return    totalCost += (productData.preco * cartItem.quantity);
    })

        return (totalCost);
    }
   
    
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        updateCartItemCount,
     
     
    }
    
  return( 
     <Contexto.Provider value={contextValue}>
      {children}
    </Contexto.Provider>
  )
  
}
AcessoContexto.prototype = {
    children: PropTypes.node
  }


export const UserCarrinho=()=>{
    const cart = useContext(Contexto);
    return cart;
}


export const produtos = [
    {
    id:1,
    image: require("C:/Users/Eugenio Silva/Music/Meu/src/app/Paginas/imgP/BoloA.jpg"),
    text1:"Aniversario",
    tipo:"Bolo",
    preco:(17).toFixed(3)
    },
    
    {
        id:2,
        image:require("C:/Users/Eugenio Silva/Music/Meu/src/app/Paginas/imgP/BoloCA.jpg"),
        text1:"Casamento",
        tipo:"Bolo",
        preco:(24).toFixed(3)
    },
    {
        id:3,
        image:require("C:/Users/Eugenio Silva/Music/Meu/src/app/Paginas/imgP/BoloC.jpg"),
        text1:"Chocolate",
        tipo:"Bolo",
        preco:(10).toFixed(3)
    },
    {
        id:4,
        image:require("C:/Users/Eugenio Silva/Music/Meu/src/app/Paginas/imgP/BoloG.jpg"),
        text1:"Pudim",
        tipo:"Bolo",
        preco:(15).toFixed(3)
    },
    {
        id:5,
        image:require("C:/Users/Eugenio Silva/Music/Meu/src/app/Paginas/imgP/BoloG.jpg"),
        text1:"Gingumba",
        tipo:"Bolo",
        preco:(19).toFixed(3)
    }
    ]
    
    export function getProdutos(id){
        let productDados=produtos.find(product=> product.id === id);
    if (productDados === undefined){
        console.log("Produto nao  definido"+ id);
        return undefined;
    
    }
        return productDados;
    }
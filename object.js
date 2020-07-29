const prod1 = {} //chaves significam que se trata de um objeto

prod1.nome = "Celular Ultra Mega" 
prod1.preco = 4988.90
prod1["Desconto"] =0.4 //evitar atrib com espaço

console.log(prod1)

const prod2 = { // object e json são coisas diferentes
    nome: "Camisa Polo",
    preço: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blabla: 2
        }
    }

}

console.log(prod2)
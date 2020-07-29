let valor // não inicializada
console.log(valor)
//console.log(valor2)

valor = null  //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Resposta:Cannot read property 'toString' of null.ERRO proposital

const produto ={}
console.log(produto.preço)

produto.preco = undefined // EVITAR atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(produto.preco)
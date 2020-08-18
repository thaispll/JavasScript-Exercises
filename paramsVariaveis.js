function soma() {
    let soma = 0
    for (i in arguments) { //O objeto arguments é uma variável local disponível dentro de todas as funções. PARECE MAS NÃO É UM ARRAY
        soma += arguments[i]

    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3 ))
console.log(soma(1.1, 2.2, "Teste" ))
console.log(soma("a", "b", "c"))
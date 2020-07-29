//é implícito o fato da função retornar algo

//funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//function with return
function soma(a, b = 0)  {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
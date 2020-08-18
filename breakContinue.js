const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x ==5){
        break //age em for, while e age em cima de switch
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue//age em cima de estruturas de repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //rotulo, NORMALMENTE NÃO DEVERIA SER UTILIZADO, CAUSA DESORGANIZAÇÃO NO CÓDIGO
    for(a in nums){
        for (b in nums){
            if (a == 2 && b ==3) break // ira chamar o break do for mais interno
            break externo // chamará o break externo
            console.log(`Par = ${a}, ${b}`)
        }
    }
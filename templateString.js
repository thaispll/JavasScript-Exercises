const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"
const template = ` //funcionalidade nova, versão 2015 do JavaScript

      Olá 
      ${nome}!`

    console.log(concatenacao, template)

    //expressões

 const up = texto => texto.toUpperCase()
 console.log(`Ei.... ${up("cuidado")}!`) //arroz function
 //dentro do Template String posso chamar uma função
interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}
function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para, id, assunto, texto);
}

class enviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "thais.pll@hotmail.com",
            id: "9899",
            assunto: "Olá!",
            texto: "Tudo bem?"
        })
    }
}
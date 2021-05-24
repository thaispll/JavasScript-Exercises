import Pessoa = require('./Pessoa');

class Cliente extends Pessoa {
    public codigoCliente: number;

}

Object.seal(Cliente);
export = Cliente;
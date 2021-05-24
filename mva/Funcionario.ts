import Pessoa = require("./Pessoa");

class Funcionario extends Pessoa {

    public salario: number;
    public codigoFuncionario: number;
}

Object.seal(Funcionario);
export = Funcionario;
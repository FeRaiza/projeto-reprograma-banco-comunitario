import { Clientes } from "../interfaces/Cliente";
import { Conta } from "./conta";
import { ContaCorrente } from "./contaCorrente";
import { ContaPoupanca } from "./contaPoupanca";

export class Gerente {
    public nomeCompleto: string;
    public id: string
    public clientes: Clientes[] = [];

    constructor(nomeCompleto: string){
        this.nomeCompleto = nomeCompleto;
    }

    public adicionarCliente(cliente: Clientes): void {
        this.clientes.push(cliente);
    }

    public removerCliente(id: string): boolean {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }

    public abrirContaCorrente(numeroConta: string, cliente: Clientes): ContaCorrente {
        const contaCorrente = new ContaCorrente(numeroConta, cliente);
        return contaCorrente;
    }

    public abrirContaPoupanca(numeroConta: string, cliente: Clientes): ContaPoupanca {
        const contaPoupanca = new ContaPoupanca(numeroConta, cliente);
        return contaPoupanca;
    }

    public fecharConta(conta: Conta): void {
        conta.sacar(conta.getSaldo());
    }
}
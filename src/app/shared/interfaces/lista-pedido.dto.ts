import { Cliente } from '../models/cliente.model';
import { ProdutoDto } from '.';
import { FormaPagamento } from '../models/forma-pagamento.model';

export interface ListaPedido {
    idPedido: string;
    instante: string;
    cliente: Cliente;
    itens: ProdutoDto[];
    formaPagamento: FormaPagamento;
}
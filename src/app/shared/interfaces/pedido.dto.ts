import { ItemPedidoDto } from './item-pedido.dto';
import { FormaPagamento } from '../models/forma-pagamento.model';
import { RefDto } from '.';
import { Cliente } from '../models/cliente.model';

export interface PedidoDto {
    cliente: Cliente;
    pagamento: RefDto;
    itens: ItemPedidoDto[];
}
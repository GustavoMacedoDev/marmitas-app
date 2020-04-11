import { ItemPedidoDto } from './item-pedido.dto';
import { FormaPagamento } from '../models/forma-pagamento.model';
import { RefDto } from '.';

export interface PedidoDto {
    cliente: RefDto;
    pagamento: RefDto;
    itens: ItemPedidoDto[];
}
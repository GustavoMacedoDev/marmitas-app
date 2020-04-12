import { Component, OnInit } from '@angular/core';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/service/pedido.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl : './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  pedidos: PedidoDto[];
  pedido: PedidoDto;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos() {
    this.pedidoService.listarPedidos().subscribe(res => this.pedidos = res);
  }

  

}

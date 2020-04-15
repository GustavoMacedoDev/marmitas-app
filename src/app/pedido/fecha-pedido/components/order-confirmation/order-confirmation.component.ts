import { Component, OnInit } from '@angular/core';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-order-confirmation',
  templateUrl : './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  pedidos: PedidoDto[];
  pedido: PedidoDto;
  mesa: string = "mesa";

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos() {
    this.pedidoService.listarPedidos().subscribe(res => this.pedidos = res);
  }


  geraPdf() {
    var doc = new jspdf();

    doc.text(this.mesa, 15, 15);
    
    doc.save("teste.pdf");
  }
  

}

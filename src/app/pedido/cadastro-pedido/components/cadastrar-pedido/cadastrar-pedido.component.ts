import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models';
import { ProdutoService } from 'src/app/shared/services';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  public produtos: Produto[];

  constructor(public produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe(res => this.produtos = res);
    console.log(this.produtos);
  }

}

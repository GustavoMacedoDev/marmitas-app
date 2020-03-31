import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-lista-produtos-pedido',
  templateUrl: './lista-produtos-pedido.component.html',
  styleUrls: ['./lista-produtos-pedido.component.css']
})
export class ListaProdutosPedidoComponent implements OnInit {

  public produtos: ProdutoDto[];

  constructor(public produtoService: ProdutoService,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe(res => this.produtos = res);
    console.log(this.produtos);
  }

  addToCart(produto: ProdutoDto) {
    this.cartService.addProduto(produto);
    console.log(produto);
  }

}

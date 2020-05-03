import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { MesaDto } from 'src/app/shared/interfaces/mesa.dto';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService, ShoppingCartService } from 'src/app/shared/services';

@Component({
  selector: 'app-lancamento-mesa',
  templateUrl: './lancamento-mesa.component.html',
  styleUrls: ['./lancamento-mesa.component.css']
})
export class LancamentoMesaComponent implements OnInit {

  id: string;
  mesa: MesaDto;
  produtos: ProdutoDto[];

  constructor(
              private route: ActivatedRoute,
              private mesaService: MesaService,
              private produtoService: ProdutoService,
              private shoppingCartService: ShoppingCartService
              ) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    this.buscaMesaPorId();
    this.buscaProdutos();
  }

  buscaMesaPorId() {
    this.mesaService.buscaMesaPorId(this.id)
      .subscribe(res => this.mesa = res);
    
  }

  buscaProdutos() {
    return this.produtoService.listarProdutosAtivos().subscribe(res => this.produtos = res);
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

}

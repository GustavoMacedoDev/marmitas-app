import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: ProdutoDto;
  form: FormGroup;
  produtoId: string;

  constructor(
              private produtoService: ProdutoService, 
              private router: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.produtoId = this.router.snapshot.params['id'];
    this.gerarForm();
    this.obterDadosProduto();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required]],
  		preco: ['', [Validators.required]]
  	});
  }

  obterDadosProduto() {
    this.produtoService.listaProdutoPorId(this.produtoId)
      .subscribe(res => this.produto = res);
    console.log(this.produto);
  }


}

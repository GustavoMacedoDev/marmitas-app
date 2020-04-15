import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/shared/interfaces/categoria.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Restaurant } from 'src/app/shared/interfaces/restaurant.dto';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  form: FormGroup;
  categorias: Categoria[];
  restaurantes: Restaurant[];

  constructor(private fb: FormBuilder,
              private categoriaService: CategoriaService,
              private restaurantService: RestaurantService,
              private produtoService: ProdutoService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.gerarForm();
    this.categoriaService.listarCategorias().subscribe(res => this.categorias = res);
    this.restaurantService.listarRestaurantes().subscribe(res => this.restaurantes = res);
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required]],
      preco: this.fb.control('', [Validators.required]),
      categoria: this.fb.control(''),
      restaurante: this.fb.control('')
      
  	});
  }

  cadastrarProduto() {
  	if (this.form.invalid) {
      return;
    }

    const produto: ProdutoDto = this.form.value;
    console.log(this.form.value);
    this.produtoService.cadastrar(produto)
      .subscribe(
        data => {
          const msg: string = "Realize o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          //this.router.navigate(['/login']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }

}

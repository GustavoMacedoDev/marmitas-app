import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CadastrarPedidoComponent } from './components/cadastrar-pedido';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutosPedidoComponent } from './components/lista-produtos-pedido/lista-produtos-pedido.component';
import { ListaCarrinhoComponent } from './components/lista-carrinho/';


@NgModule({
  declarations: [
    CadastrarPedidoComponent,
    ListaProdutosPedidoComponent,
    ListaCarrinhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ]
})
export class CadastroPedidoModule { }

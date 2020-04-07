import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule, CadastroPjModule, CadastroPjRoutingModule, CadastroPfModule, CadastroPfRoutingModule } from './autenticacao';
import { PedidoRoutingModule, CadastroPedidoModule } from './pedido';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';

import localePtBr from '@angular/common/locales/pt';
import { FechaPedidoModule } from './pedido/fecha-pedido/fecha-pedido.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FechaPedidoRoutingModule } from './pedido/fecha-pedido/fecha-pedido.routing';

registerLocaleData(localePtBr);


@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPedidoModule,
    PedidoRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FechaPedidoModule,
    FechaPedidoRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    
    AppRoutingModule
  ],
  providers: [{ provide : LOCALE_ID, useValue : 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { ShoppingCartService } from './services';



@NgModule({
  declarations: [MascaraDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective
  ],
  providers: [ShoppingCartService]
})
export class SharedModule { }

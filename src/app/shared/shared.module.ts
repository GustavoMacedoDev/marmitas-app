import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { ShoppingCartService } from './services';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    MascaraDirective,
    RadioComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective, RadioComponent, InputComponent
  ],
  providers: [ShoppingCartService]
})
export class SharedModule { }

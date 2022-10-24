import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    TituloComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports:[TituloComponent]
})
export class RoutesModule { }

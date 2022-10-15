import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';




@NgModule({
  declarations: [
    TituloComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TituloComponent]
})
export class RoutesModule { }

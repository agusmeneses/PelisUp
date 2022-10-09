import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TituloComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TituloComponent]
})
export class RoutesModule { }

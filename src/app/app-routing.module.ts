import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IngresarComponent } from './ingresar/ingresar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { CardComponent } from './components/shared/card/card.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {
    path: 'inicio',component: InicioComponent,
  },
  {
    path: 'series',component: SeriesComponent,
  },
  {
    path: 'pelis',component: PeliculasComponent,
  },
  {
    path: 'ingresar',component: IngresarComponent,
  },
  {
    path: '',component: InicioComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

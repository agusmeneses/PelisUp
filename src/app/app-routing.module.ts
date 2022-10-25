import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { RegistrarComponent } from './components/routes/registrar/registrar.component';


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
    path:'registrar', component: RegistrarComponent,
  },
  {
    path: '',component: InicioComponent,
  },
  {
    path:"**", component: ErrorComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

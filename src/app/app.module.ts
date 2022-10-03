import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RoutesModule } from './components/routes/routes.module';
import { SharedModule } from './components/shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { SeriesComponent } from './series/series.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { IngresarComponent } from './ingresar/ingresar.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeriesComponent,
    PeliculasComponent,
    IngresarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

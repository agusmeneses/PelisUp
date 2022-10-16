import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RoutesModule } from './components/routes/routes.module';
import { SharedModule } from './components/shared/shared.module';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';





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
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

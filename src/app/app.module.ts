import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importamos modulo de rutas
import { routing, appRoutingProviders } from './app.routing';

// Importamos componentes (se importan automaticamenteal con CLI)
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    routing // Cargar modulo
  ],
  providers: [appRoutingProviders], // Cargar como servicio
  bootstrap: [AppComponent]
})
export class AppModule { }

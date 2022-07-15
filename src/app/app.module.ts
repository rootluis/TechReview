import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AreaComponent } from './components/area/area.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologyComponent,
    NavbarComponent,
    AreaComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './home/home.component';
import { LibrosComponent } from './libros/libros.component';
import { LibrerriaComponent } from './librerria/librerria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarlibroComponent } from './agregarlibro/agregarlibro.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    IniciarSesionComponent,
    HomeComponent,
    LibrosComponent,
    LibrerriaComponent,
    AgregarlibroComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'Registrate', component: RegistroComponent},
      {path: 'Iniciar_sesion', component: IniciarSesionComponent},
      {path: '', component: HomeComponent},
      {path: 'libreria', component: LibrerriaComponent},
      {path: 'agregar_libro', component: AgregarlibroComponent}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

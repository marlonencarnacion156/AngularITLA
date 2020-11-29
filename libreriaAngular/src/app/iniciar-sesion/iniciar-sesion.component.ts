import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  public adminOnly = () => hasCustomClaim('admin');
  public redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['Iniciar_sesion']);
  public redirectLoggedInToItems = () => redirectLoggedInTo(['libreria']);
  public belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);


  public logo = 'https://i2.wp.com/www.julianmarquina.es/wp-content/uploads/Herramientas-para-administrar-y-gestionar-nuestra-colecci%C3%B3n-de-libros-electr%C3%B3nicos.jpg?fit=1000%2C666&ssl=1';


  constructor(public auth: AngularFireAuth) {}
  ver() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log("ver");
  }
  logout() {
    this.auth.signOut();
  }
  ngOnInit(): void {
  }

}

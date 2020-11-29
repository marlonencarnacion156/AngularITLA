import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nombre: FormControl = new FormControl('', [Validators.maxLength(15), Validators.minLength(5), Validators.required]);
  public apellido: FormControl = new FormControl('', [Validators.maxLength(15), Validators.minLength(5), Validators.required]);
  public correo: FormControl = new FormControl('', [Validators.email, Validators.required]);
  public contrasena: FormControl = new FormControl('', [Validators.maxLength(15), Validators.minLength(5), Validators.required]);
  public contrasena2: FormControl = new FormControl('', [Validators.maxLength(15), Validators.minLength(5), Validators.required]);

  public registro: FormGroup = new FormGroup({
    'nombre': this.nombre,
    'apellido': this.apellido,
    'correo': this.correo,
    'contrasena': this.contrasena,
    'contrasena2': this.contrasena2


  })


  constructor() { }

  ngOnInit(): void {
  }

  public save(){
    console.log(this.registro);
  }

}

import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregarlibro',
  templateUrl: './agregarlibro.component.html',
  styleUrls: ['./agregarlibro.component.css']
})
export class AgregarlibroComponent implements OnInit {

  public titulo: FormControl = new FormControl('', Validators.required);
  public autor: FormControl = new FormControl('', Validators.required);
  public sinopsis: FormControl = new FormControl('', Validators.required);
  public paginas: FormControl = new FormControl('', Validators.required);
  public fecha: FormControl = new FormControl('', Validators.required);
  public imagen: FormControl = new FormControl('', Validators.required);

  public addLibro: FormGroup = new FormGroup({
    'titulo': this.titulo,
    'autor': this.autor,
    'sinopsis': this.sinopsis,
    'paginas': this.paginas,
    'fecha': this.fecha,
    'imagen':this.imagen
  })

  public save(){
    console.log(this.addLibro.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

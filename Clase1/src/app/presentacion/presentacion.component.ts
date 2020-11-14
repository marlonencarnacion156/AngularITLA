import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  public title:string= "Presentación"
  public nombre: string= "Marlon Encarnación";
  public bio: string= "Desarrollador Web FrontEnd con conocimientos puntuales de BackEnd"

  constructor() { }

  ngOnInit() {
  }

}

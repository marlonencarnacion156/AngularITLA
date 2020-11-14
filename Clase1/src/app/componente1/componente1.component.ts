import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  public nombre: string = "Marlon Encarnación";

  constructor() { }

  ngOnInit() {
  }

  public getFormatedName(){
    return this.nombre; 
  }

  public getFormatedName2(color:any){
    return; this.nombre; 
  }

}

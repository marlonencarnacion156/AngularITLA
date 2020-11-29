import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = 'https://i2.wp.com/www.julianmarquina.es/wp-content/uploads/Herramientas-para-administrar-y-gestionar-nuestra-colecci%C3%B3n-de-libros-electr%C3%B3nicos.jpg?fit=1000%2C666&ssl=1';

  constructor() { }

  ngOnInit(): void {
  }

}

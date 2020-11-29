import { Component, OnInit } from '@angular/core';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // faCoffee = faCoffee;

  public title: any = 'Librería Virtual';
  public ano = 2020;

  constructor() { }

  ngOnInit(): void {
  }

}

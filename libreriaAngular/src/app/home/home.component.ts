import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgHome = "https://bit.ly/39esMbk";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
// import { DarkSkyWeatherService } from './services/index';

@Component({
  selector: 'my-app', // tslint:disable-line
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public title: String;

  constructor() {
    this.setTitle('Welcome to Tic-Tac-Toe!');
  }

  setTitle(str: String) {
    this.title = str;
  }
}

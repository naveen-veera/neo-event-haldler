import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-handler';
  country: string;
  state: boolean = false;

  getValue(value: any): void {
    this.country = value;
  }
}

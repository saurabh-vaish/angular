import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'saurabh';
  url = 'www.google.com';
  x = 10;
  username = 'xyz';
  fun1() {
    alert('Event binding')
  }

  fun2() {
    alert('changed value' + this.x);
  }


}

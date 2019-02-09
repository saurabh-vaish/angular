import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city = ['hyd','syd','del'];
  add ;
  func1()
  {
    this.city.push(this.add);
  }
}

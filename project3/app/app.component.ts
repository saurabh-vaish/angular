import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj = [{name:'scott',city:'sec',wkl:['hyd','sec','raj'] },
  {name:'tom',city:'hyd',wkl:['hyd','sec','chennai'] },
  {name:'amit',city:'bang',wkl:['hyd','sec','chennai'] },
  ]

}

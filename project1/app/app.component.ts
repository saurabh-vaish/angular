import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obj = [{name:'scott',city:'lko',child:['ravi','raj'] },
        {name:'tom',city:'prg',child:['sam','ram']},
        ]
}



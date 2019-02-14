import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  sno=100
  constructor() {
    localStorage.setItem("sn",this.sno)
    localStorage.setItem("un","scott")
   }

  ngOnInit() {
  }

}

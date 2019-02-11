import { Component, OnInit, Inject } from '@angular/core';
import { cls1 } from '../file1';
import { cls2 } from '../file2';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(@Inject(cls1) public obj1,@Inject(cls2) public obj2) { }

  ngOnInit() {
  }

}

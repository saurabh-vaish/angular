import { Component, OnInit, Inject } from '@angular/core';
import { cls1 } from '../file1';
import { cls2 } from '../file2';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(@Inject(cls1) public obj1,@Inject(cls2) public obj2) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  styles: ['h2 {color: red}']
})
export class ChildComponent {

  constructor() {}

  ngOnInit(): void {}

}

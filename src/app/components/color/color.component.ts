import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'green';
  color = this.defaultColor;
  constructor() { }
  changeColor(newColor: string): void {
    this.color = newColor;
  }
  ngOnInit(): void {
  }
}

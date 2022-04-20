import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css'],
})
export class SommeComponent implements OnInit {
  @Input() x: number = 0;
  @Input() y: number = 0;
  constructor() {}
  ngOnInit(): void {}
}

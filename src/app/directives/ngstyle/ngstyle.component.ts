import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  color = 'red';
  bgc = 'gold';
  font = '75px';
  constructor() { }

  ngOnInit(): void {
  }

}

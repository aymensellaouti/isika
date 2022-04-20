import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  users = [
    {
      firstname: 'Sylvain',
      name: 'Boulloud'
    },
    {
      firstname: 'Jeyan',
      name: 'Cakirlar'
    },{
      firstname: 'Elise',
      name: 'Dassonneville'
    },{
      firstname: 'Cheikh',
      name: 'Dieng'
    },
    {
      firstname: 'Valentin',
      name: 'Lagarde'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

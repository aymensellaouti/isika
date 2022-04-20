import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  /* ngFor() {} */
  @Input() users: User[] = [
    new User('Sylvain', 'Boulloud'),
    new User('Jeyan', 'Cakirlar'),
    new User('Elise', 'Dassonneville'),
    new User('Cheikh', 'Dieng'),
    new User('Valentin', 'BouLagardelloud'),
  ];

  constructor() {}
  /* f(name) {system.out.printlen(name);} */
  ngOnInit(): void {}
}

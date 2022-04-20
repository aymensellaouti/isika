import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFormation';
  joueurs = [
    new User('leo','messi'),
    new User('Dim','payet'),
  ];
}

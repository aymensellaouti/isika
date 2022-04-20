import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css'],
})
export class PereComponent implements OnInit {
  /*
  Ecouter l'EventEmitter
  Récupérer la valeur
  Faire ce qu'il veut avec cette valeur
  */
  constructor() {}

  ngOnInit(): void {}
  processMessage(message: string) {
    alert(message);
  }
  f() {}
}

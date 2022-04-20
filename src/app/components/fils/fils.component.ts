import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() messageDePapa = '';
  @Output() sendDataToPapa = new EventEmitter();
  constructor() { }
  /*
    1- Créer mon propre event
    2- Emettre et y injecter le message
  */
  ngOnInit(): void {}
  sendMessage() {
    this.sendDataToPapa.emit('cc papa');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  isAllume = true;
  constructor() {}
  showHide() {
      this.isAllume = !this.isAllume;
  }
  ngOnInit(): void {
/*     setInterval(() => {

    }, 1500); */
  }
}

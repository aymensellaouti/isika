import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string = 'Cheikh';
  isHidden: boolean = true;
  inputContent = '';
  color = 'red';
  constructor() { }
  changeColor() {
    this.color = 'yellow';
  }
  changeInputContent(newContent: string) {
    this.inputContent = newContent;
  }
  ngOnInit(): void {
/*     setInterval(
      () => {
        this.isHidden = !this.isHidden;
      }, 1000
    ); */
  }

}

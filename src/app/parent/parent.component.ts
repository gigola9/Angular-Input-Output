import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  title: string = "Sharing data between parent and child components";

  changeText(e) {
    this.title = e;
  }
}

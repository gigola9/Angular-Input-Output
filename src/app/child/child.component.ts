import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() title: string;
  @Output() changeText = new EventEmitter<string>();

  onButtonClick() {
    this.changeText.emit('Angular Input() & Output()');
  }
}

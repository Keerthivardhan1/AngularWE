import { Component, Output , EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentData:String="";
  childData:string="Child Data"

  @Output() messageEvent = new EventEmitter<string>();

  sendData(){
    this.messageEvent.emit(this.childData);
  }

}

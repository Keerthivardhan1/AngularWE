import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentData:string = "Parent Data";
  childData:string = "";

  receiveMessage(msg:string){
    this.childData = msg;
  }

}

import { Component, OnInit, Input} from '@angular/core';

// Child component used in AppComponent

@Component({
  selector: 'S6A4-app-root',
  template: `<h3>{{childTitle}}</h3>`,
  styleUrls: ['./app.component.css']
})
export class S6A4Component {
  @Input() childTitle:string;    
}
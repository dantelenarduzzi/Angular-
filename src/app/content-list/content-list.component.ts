import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  @Input() content: any;
  public consoleprint(message : string){
    console.log(message);
  }
  constructor() {
  }

  ngOnInit(): void {
  }


}

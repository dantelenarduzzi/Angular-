import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let contentList: Content = {
      author: "Dante", body: "This is just a test ", id: 0, title: "Dante's Test"
    };
let list: ContentList;
list = new ContentList(contentList);
list.add()

  }





}

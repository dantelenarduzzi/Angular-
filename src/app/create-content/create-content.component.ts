import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  @Output() adddedContentEvent = new EventEmitter<Content>();

  addedContent: Content;

  constructor() {
    this.addedContent = {
      id: 0,
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: ['']
    };

  }

  ngOnInit(): void {
  this.adddedContentEvent.emit(this.addedContent)

  }

  addContent(): void{
    console.log('Event Success!', this.addedContent.title);
    this.adddedContentEvent.emit(this.addedContent);
  }
}

import {Component, Input} from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assign1';
  public userInput: any;

  contentArray: Content[] = [{
    id: 1,
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/CSGOcoverMarch2020.jpg/220px-CSGOcoverMarch2020.jpg",
    type: "FPS",
    author: "Valve",
    title: "CounterStrike Global Offensive",
    body: "Counter Strike is one of the first innovators of FPS Games",
    tags: ['csgo', 'fps', 'legendary']
  },
    {
      id: 2,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg",
      type: "Battle Royale",
      author: "DayBreak",
      title: "H1Z1",
      body: "The original battle royale",
      tags: ['H1', 'BR', 'OG']
    },

    {
      id: 3,
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FortniteLogo.svg/250px-FortniteLogo.svg.png",
      type: "Battle Royale",
      author: "Epic Games",
      title: "Fortnite",
      body: "The game that everyone and their mother has heard about",
      tags: ['Fortnite', 'BR', 'PG']
    },
    {
      id: 4,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
      type: "Battle Royale",
      author: "Respawn",
      title: "Apex Legends",
      body: "One of the well known battle royales that isn't fortnite",
      tags: ['Apex', 'BR', 'FPS']
    },

    {
      id: 5,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg",
      type: "FPS",
      author: "Blizzard",
      title: "OverWatch",
      body: "Blizzard's First FPS Game",
      tags: ['OW', 'FPS', '6v6']
    }
  ];

  public constructor() {
   this.userInput = "";

  }

  public ngOnInit(): void {
  };


  triggerAlertTitle(): void {


    if (this.contentArray.filter(contentArray => contentArray.title = (this.userInput)) )

      alert("There is an item with this title");
    else{
      alert("there is not an item with this title");
    }


  }
}

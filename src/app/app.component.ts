import { Component } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assign1';

  contentArray: Content[] = [{
    id: 1,
    imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/CSGOcoverMarch2020.jpg/220px-CSGOcoverMarch2020.jpg",
    type:"first person shooter",
    author: "Valve",
    title: "CounterStrike Global Offensive",
    body:"Counter Strike is one of the first innovators of FPS Games",
    tags: ['csgo', 'fps', 'legendary']},
    {
      id: 2,
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg",
      type:"MMORPG",
      author: "Blizzard",
      title: "World Of Warcraft",
      body:"The most well known game of its genre",
      tags: ['WoW', 'MMORPG', 'Notorious']},

    {
      id: 3,
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/FortniteLogo.svg/250px-FortniteLogo.svg.png",
      type:"Battle Royale",
      author: "Epic Games",
      title: "Fortnite",
      body:"The game that everyone and their mother has heard about",
      tags: ['Fortnite', 'BR', 'PG']},
    {
      id: 4,
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg",
      type:"Battle Royale",
      author: "Respawn",
      title: "Apex Legends",
      body:"One of the well known battle royales that isn't fortnite",
      tags: ['Apex', 'BR', 'FPS']},

    {
      id: 5,
      imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg",
      type:"first person shooter",
      author: "Blizzard",
      title: "OverWatch",
      body:"Blizzard's First FPS Game",
      tags: ['OW', 'FPS', '6v6']}
  ];
  public constructor() {

  }

  public ngOnInit(): void {
  };
}

import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "src/app/helper-files/content-interface";

@Pipe({
  name: 'fPS'
})
export class FPSPipe implements PipeTransform {

  transform(games:Content[]): Content[] {
  return games.filter(game => game.type == "FPS");
  }

}

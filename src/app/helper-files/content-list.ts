import { Content } from "./content-interface";


export class ContentList{
  static contentCount = 0;
  private _items: Content[];


  constructor(item: Content) {
    this._items = [];
    this._items[0] = item;
  }

  get items():Content[]{
    return this._items;
  }

  public add() {
    return this._items.push();
  }
  public amount() {
    return this._items.length;
  }
  public input() {
  }

}

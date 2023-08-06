import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent implements OnInit{
  @Input()
  public gif! : Gif;

  ngOnInit(): void {
    if(!this.gif) throw ('Gif property is required');
  }

}

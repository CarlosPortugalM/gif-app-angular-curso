import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'gifts-homepage',
  templateUrl: './homepage.component.html',
})
export class HomePageComponent {

  constructor(private giftsService: GiftsService){

  }

  get gifts(): Gif[]{
    return this.giftsService.gifList;

  }

}

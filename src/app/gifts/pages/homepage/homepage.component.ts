import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gif } from '../../interfaces/gifts.interfaces';
import { LazyImagesComponent } from 'src/app/shared/components/lazy-images/lazy-images.component';
import { SharedModule } from 'src/app/shared/shared.module';

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

import { Component } from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private giftsService: GiftsService) {}

  get tags(): string[]{
    return this.giftsService.tagsHistory;
  }

  public searchAgain(tag: string): void {
    this.giftsService.searchTag(tag);
  }
}

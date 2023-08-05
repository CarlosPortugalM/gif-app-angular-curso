import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifts.interfaces';


const GIPHY_KEY = 'egWnfTeeIU9CPyYjOVHlyD3LxizT9Eke';
const SERVICE_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({providedIn: 'root'})


export class GiftsService {

  public gifList: Gif[] = [];


  private _tagsHistory : string[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [... this._tagsHistory];
  }

  public searchTag(newTag: string): void{
    if(newTag.length === 0) return;
    this.organizeHistory(newTag);

    const params = new HttpParams()
      .set('api_key', GIPHY_KEY)
      .set('limit', 10)
      .set('q',newTag);

    this.http.get<SearchResponse>(`${SERVICE_URL}/search`,{params})
      .subscribe((response) =>{
        this.gifList = response.data;

    });

  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag)=> oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));

  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory.at(0)!)
  }


}

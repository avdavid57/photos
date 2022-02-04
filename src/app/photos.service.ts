import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 
        'Client-ID rD4Po7oZNMV18B_RPS9E3VTnjR1rMRRDbJjoKurPYZA'
      }
    }) as any;
  }
}

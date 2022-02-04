import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']
})
export class ViewPhotosComponent implements OnInit {
  photoUrl: string = "";

  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
   }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
      });
  }

  ngOnInit(): void {
  }

}

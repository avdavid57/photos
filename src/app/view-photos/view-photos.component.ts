import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']
})
export class ViewPhotosComponent implements OnInit {

  constructor(private photosService: PhotosService) {
    this.photosService.getPhoto().subscribe(() => {

    });
   }

  ngOnInit(): void {
  }

}

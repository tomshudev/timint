import { Component, OnInit } from '@angular/core';
import { TracksService } from '../_services/tracks.service';

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks = null

  constructor(private tracksService: TracksService) {
    tracksService.getTracks(tracks => this.tracks = tracks);
  }

  ngOnInit() {
  }

  openTimeline(id) : void {
    console.log(id);
  }
}

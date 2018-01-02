import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';
declare var initTimeline:any;
declare var closePopup:any;
declare var move:any;
declare var timeline:any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initTimeline(() => {
    });
  }

  keysListener($event) {
    if ($event.code == "Escape")
      closePopup()
    if ($event.code == "ArrowLeft"){
      move(0.05)
    }
    if ($event.code == "ArrowRight"){
      move(-0.05)
    }
    if ($event.code == "ArrowUp"){
      timeline.zoomIn (0.2, {animation: false})
    }
    if ($event.code == "ArrowDown"){
      timeline.zoomOut (0.2, {animation: false})
   }
  }
}

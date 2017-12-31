import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';
declare var initTimeline:any;

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
    initTimeline();
  }
}

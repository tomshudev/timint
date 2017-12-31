import { Component, OnInit } from '@angular/core';
declare var initTimeline:any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../app.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initTimeline();
  }

}

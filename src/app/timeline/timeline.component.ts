import { Component, OnInit } from '@angular/core';
import {SelectComponent} from 'ng-select-bypass';
import { fadeInAnimation } from '../_animations/index';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from '../_services/tracks.service';

declare var $:any;
declare var initTimeline:any;
declare var closePopup:any;
declare var move:any;
declare var timeline:any;
declare var timelineLoadPromise:Promise<any>;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TimelineComponent implements OnInit {

  track = null

  constructor(private route: ActivatedRoute, private tracksService: TracksService) {}

  ngOnInit() {
    this.tracksService.getTrackById(this.route.snapshot.paramMap.get('id'),(track) => {
      this.track = track;
      initTimeline(this.track.brutos, () => { timeline.searching = false });
    });

    function KeyPress(e) {
      var evtobj = window.event? event : e;

      if (evtobj.keyCode == 70 && evtobj.ctrlKey) {
        SelectComponent.prototype.openDropdownBypass();
        // Preventing the original action
        e.preventDefault();
      }
    }
    
    document.onkeydown = KeyPress;
  }
  keysListener($event) {
    if (timeline.searching)
      return
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
